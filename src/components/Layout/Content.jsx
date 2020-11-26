const contentStyle = {
  flex: 1
};

export const Content = (props) => {
  return <div style={contentStyle}>
    {props.children}
  </div>;
};