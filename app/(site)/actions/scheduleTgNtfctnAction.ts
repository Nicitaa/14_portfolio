"use server"

import { CreateScheduleCommand, SchedulerClient, Target } from "@aws-sdk/client-scheduler"
import moment from "moment-timezone"

import { Channel, SendNotificationTo } from "@/store/useAppointmentStore"
import { Value } from "@/store/useSelectedDateStore"
import { formatTime } from "@/utils/formatTime"

export async function scheduleTgNtfctnAction(
  message: string,
  selectedDate: Value,
  at: string,
  channel: Channel,
  sendNotificationTo: SendNotificationTo,
  inputNotificationTo: string,
) {
  const client = new SchedulerClient({ region: process.env.NEXT_PUBLIC_AWS_REGION })

  const date = Array.isArray(selectedDate) ? selectedDate[0] : selectedDate
  if (!date) {
    console.log(20, "error creating schedule to send notification in telegram")
    return "error creating schedule to send notification in telegram"
  }

  const bookingDate = moment(date).format("YYYY-MM-DD")
  const newScheduledAtISO = moment
    .tz(`${bookingDate} ${at}`, "Europe/Moscow")
    .seconds(0)
    .milliseconds(0)
    .format("YYYY-MM-DDTHH:mm:ss") // correct format for AWS
  // reference - https://repost.aws/questions/QUoeDOkdKNSfGERuBVa2-_Mw/validationexception-invalid-schedule-expression-at-2024-10-20t17-19-10z-eventbridge-sdk-typescript

  // Check if the time is in the future before scheduling
  if (moment(newScheduledAtISO).isBefore(moment())) {
    console.error("Cannot schedule a time in the past")
    return "error: scheduling time is in the past"
  }

  const scheduledName = `ScheduleTgNtfctn_${formatTime(newScheduledAtISO).replace(/[\s\/\.:]/g, "_")}`

  const params = {
    Name: scheduledName,
    ScheduleExpression: `at(${newScheduledAtISO})`, // Correct format is 2024-10-20T17:19:10
    ScheduleExpressionTimezone: "Europe/Moscow",
    Target: {
      Arn: `arn:aws:lambda:${process.env.NEXT_PUBLIC_AWS_REGION}:${process.env.AWS_ACCOUNT_ID}:function:${process.env.NEXT_PUBLIC_LAMBDA_FN_NAME}`,
      RoleArn: `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/service-role/SendScheduledEmails-role-wk1opcl8`, // this role allows invoke lambda function
      Input: JSON.stringify({
        dateTime: formatTime(newScheduledAtISO),
        message,
        channel,
        sendNotificationTo,
        inputNotificationTo,
      }),
    } as Target,
    FlexibleTimeWindow: {
      Mode: "OFF" as const,
    },
    State: "ENABLED" as const,
  }

  try {
    const command = new CreateScheduleCommand(params)
    const response = await client.send(command)
    console.log(58, "response - ", response)
  } catch (error) {
    console.error("Error creating one-time schedule:", error)
  }
}
