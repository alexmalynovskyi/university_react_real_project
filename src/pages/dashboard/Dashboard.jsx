import { data } from '../../config/mockData'
import { Card } from './components/Card';

const styles = {
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  }
}

export const Dashboard = () => {
  const renderCards = () => {
    console.log(data)
    return data.products.length > 0 ?
      data.products.map(prod => 
        <Card 
          id={prod.id} 
          title={prod.title}
          src={prod.src} 
        />
      ) : null;
  }

  return <div style={styles.cards}>
    {renderCards()}
  </div>
}