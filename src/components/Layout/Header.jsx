import CartItem from "../CartItem/CartItem";
import { makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  headerStyle: {
    height: '10vh',
    background: '#f9f9f9',
    padding: '16px'
  },
  menuItems: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    '& li': {
      margin: '10px',

      '& a': {
        textDecoration: 'none',
        color: '#8f8f8f',
        fontSize: '24px',
        fontWeight: '400',
        transition: 'all 0.5s ease-in-out',
        position: 'relative',
        textTransform: 'uppercase',
        '&::before': {
          content: 'attr(data-item)',
          transition: '0.5s',
          color: '#8254ff',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          overflow: 'hidden'
        },
        '&:hover': {
          '&::before': {
            width: '100%',
            transition: 'all 0.5s ease-in-out'
          }
        }
      }
    }
  }
}));

export const Header = (props) => {
  const classes = useStyle();

  return <nav className={classes.headerStyle}>
    <ul className={classes.menuItems}>
      <li><Link to='/' >Home page</Link></li>
      <li><Link to='/sigin' >Sign in</Link></li>
      <li><Link to='/cart'><CartItem /></Link></li>
    </ul>
  </nav>;
};