import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import Signin from './pages/authentication/Signin';
import { Main } from './components/Layout/Main';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Article } from './components/Layout/Article';
import { Content } from './components/Layout/Content';
import { Nav } from './components/Layout/Nav';
import { Provider } from 'react-redux';

import store from './store/index';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Main>
          <Header />
          <Article>
            <Route exact path='/cart' component={Cart} />
            <Route path='/sigin' component={Signin} />
            <Route exact path='/' component={Dashboard} />
          </Article>
          <Footer />
        </Main>
      </Router>
    </Provider>

  );
}

export default App;
