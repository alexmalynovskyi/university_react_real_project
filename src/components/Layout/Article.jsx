const articleStyle = {
  flex: 1,
  display: 'flex',
  border: '1px solid #000'
};

export const Article = (props) => {
  return <div style={articleStyle}>
    {props.children}
  </div>
}