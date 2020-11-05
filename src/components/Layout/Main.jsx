const styles = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  margin: 0
}

export const Main = (props) => {
  return <div style={styles}>{props.children}</div>
}