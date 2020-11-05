const contentStyle = {
  flex: 1,
  border: '1px solid #000'
};

export const Content = (props) => {
  return <div style={contentStyle}>
    {props.children}
  </div>
}