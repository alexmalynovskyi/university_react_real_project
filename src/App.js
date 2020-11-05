import logo from './logo.svg';
import './App.css';
import { Link ,BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Signin } from './pages/authentication/Signin';
import { Main } from './components/Layout/Main';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Article  } from './components/Layout/Article';
import { Content  } from './components/Layout/Content';
import { Nav } from './components/Layout/Nav';

function App() {
  return (
     <Main>
        <Header>
        {/* <Link to="/"> dashboards</Link> */}
        {/* <Link to="/sigin"> sign in</Link> */}
        </Header>
        <Article>
          <Nav />
          <Content>
            <Router>
              <Route path='/sigin' component={Signin} />
              <Route exact path='/' component={Dashboard}/>
            </Router>
          </Content>
        </Article>
        <Footer />
     </Main>
  );
}

export default App;
