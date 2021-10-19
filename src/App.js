import './App.css';
import Home from './components/Products/Home'
import Login from './components/Signup-Login/Login'
import Signup from './components/Signup-Login/Signup'
import Profile from './components/Admin/Profile'
import Header from './components/Layout/Header'
import Header2 from './components/Layout/Header2'
import Main from './components/Layout/Main'
import Footer from './components/Layout/Footer'
//products
import ProductsState from './context/Products/ProductsState';
import CreateProduct from './components/Admin/CreateProduct'
import Products from './components/Products/Products'
import SingleProduct from './components/Products/SingleProduct'


import UsersState from './context/Users/UsersState'
import Contact from './components/Products/Contacto'
import Foundation from './components/Products/Fundacion'
import Admin from './components/Admin/Admin'
import StripeContainer from './components/Payment/StripeContainer'


import AuthRoute from './components/Routes/AuthRoute'
import PublicRoute from './components/Routes/PublicRoute'
import PrivateRoute from './components/Routes/PrivateRoute'


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
    <Header2/>
    <Switch>

 {/*Rutas privadas */}
 <PrivateRoute exact path="/admin" component={Admin}/>
      <PrivateRoute exact path="/productos/crear" component={CreateProduct} />
      <PrivateRoute exact path="/mi-perfil" component={Profile}/>
   


    {/*Rutas de autenticacion  */}
    <AuthRoute exact path="/iniciar-sesion" component ={Login}/>
    <AuthRoute exact path="/crear-sesion" component ={Signup}/>
  
     {/*Rutas publicas */}
      <PublicRoute exact path="/productos/:id" component ={SingleProduct} />
      <PublicRoute  exact path="/productos" component={Products} />
      <PublicRoute  exact path="/contacto" component={Contact} />
      <PublicRoute  exact path="/fundacion" component={Foundation} />
      <PublicRoute  exact path="/" component={Home} />
      <PublicRoute exact path ="/payment" component={StripeContainer} />
    </Switch>
    <Footer/>
    </Router>
    </ProductsState>
    </UsersState>
    </>
  );
}

export default App;
