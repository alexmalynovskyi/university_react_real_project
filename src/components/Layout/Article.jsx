const articleStyle = {
  flex: 1,
  display: 'flex'
};

export const Article = (props) => {
  return <div style={articleStyle}>
    {props.children}
  </div>;
};