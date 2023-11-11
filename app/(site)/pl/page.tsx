import Link from "next/link"

export default function Page() {
  return (
    <div className="h-full flex flex-col gap-y-md justify-center items-center pt-[16rem] text-center">
      <h1>Help me create internalization for this site</h1>
      <Link className="text-cta" href="https://github.com/i18next/next-i18next/discussions/2223">
        https://github.com/i18next/next-i18next/discussions/2223
      </Link>
    </div>
  )
}
