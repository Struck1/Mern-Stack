import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-2'>
        <Container>
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' exact component={RegisterPage} />
          <Route path='/' exact component={HomePage} />
          <Route path='/products/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/profile' exact component={ProfilePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
