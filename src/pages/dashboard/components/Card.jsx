const cardStyle = {
  flex: '0 0 300px',
  margin: '10px',
  border: '1px solid #ccc' 
}

export const Card = (props) => {
  const { id, title, src } = props;
  console.log(src);

  return  <div style={cardStyle}>
  <p> id : {id}</p>
  <p> id : {title}</p>
  <img src={src} alt={title} />
  <button>add to cart</button>
</div>
}