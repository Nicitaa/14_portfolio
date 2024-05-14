import { GMLiveCheckbox } from "./GMLiveCheckbox"

export function GMCheckbox({ isGMLive }: { isGMLive: boolean }) {
  return (
    <div className="flex flex-row justify-center items-center gap-x-xs">
      <div className="relative tooltip">
        <p className="font-bold">isGMLive</p>
        <p className="tooltiptext w-[219px] top-[450%] left-[10%]">
          If you are in google meets
          <br /> make sure is checked
        </p>
      </div>
      <GMLiveCheckbox isGMLive={!!isGMLive} />
    </div>
  )
}
