import './App.css';
import CreateProduct from './components/Products/CreateProduct'
import Products from './components/Products/Products'
import Home from './components/Products/Home'
import Login from './components/Signup-Login/Login'
import Signup from './components/Signup-Login/Signup'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Footer from './components/Layout/Footer'
import ProductsState from './context/Products/ProductsState';
import UsersState from './context/Users/UsersState'
import Contact from './components/Products/Contacto'
import Foundation from './components/Products/Fundacion'

import { 
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


function App() { 
  return (
    < >
    <UsersState>
    <ProductsState>
    <Router>
    <Header/>
    <Switch>

 {/*Rutas privadas */}



    {/*Rutas de autenticacion  */}
    <Route exact path="/iniciar-sesion" component ={Login}/>
    <Route exact path="/crear-sesion" component ={Signup}/>
     {/*Rutas publicas */}
      <Route exact path="/productos/crear" component={CreateProduct} />
      <Route  exact path="/productos" component={Products} />
      <Route  exact path="/contacto" component={Contact} />
      <Route  exact path="/fundacion" component={Foundation} />
      <Route  exact path="/" component={Home} />
    </Switch>
    <Footer/>
    </Router>
    </ProductsState>
    </UsersState>
    </>
  );
}

export default App;
