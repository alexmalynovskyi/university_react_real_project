const navStyle = {
  flex: '0 0 20vw',
  border: '1px solid #000'
};

export const Nav = (props) => {
  return <nav style={navStyle}>
    Nav
    {props.children}
  </nav>
}