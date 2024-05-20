import Link from "next/link"

export function GoogleMeetsData() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-row">
        <p>Here is google meets link&nbsp;</p>
        <Link className="text-cta" href="https://meet.google.com/yiy-pbnd-ygo">
          https://meet.google.com/yiy-pbnd-ygo
        </Link>
      </div>
    </div>
  )
}
