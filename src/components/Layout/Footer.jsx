const footerStyle = {
  height: '20vh'
};

export const Footer = (props) => {
  return <footer style={footerStyle}>
    {props.children}
  </footer>;
};