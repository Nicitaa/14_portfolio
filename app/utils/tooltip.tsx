export function tooltip(tooltip: string, tooltiptext: string) {
  return (
    <span className="tooltip">
      {tooltip}
      <span className="tooltiptext">{tooltiptext}</span>
    </span>
  )
}
