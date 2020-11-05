const headerStyle = {
  height: '20vh',
  border: '1px solid #000',
  background: 'BDF6FF'
}

export const Header = (props) => {
  return <header style={headerStyle}>
    Header
    {props.children}
  </header>
}