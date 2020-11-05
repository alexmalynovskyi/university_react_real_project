const footerStyle = {
  height: '20vh',
  border: '1px solid #000',
  border: '1px solid #000'
}

export const Footer = (props) => {
  return <footer style={footerStyle}>
    Footer
    {props.children}
  </footer>
}