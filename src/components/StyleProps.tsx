type StyleProps = {
    styleProps : React.CSSProperties
}
const StyleProps = ({styleProps}: StyleProps) => {
  return (
    <div style={styleProps}>
      <h2>Style Props</h2>
    </div>
  )
}

export default StyleProps