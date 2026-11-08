
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import ProductsDetails from './Pages/ProductsDetails.jsx'
import Cart from './Pages/Cart.jsx'
import Orders from './Pages/Orders.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
function App() {


  return (
    <div id ="Pages">
       <BrowserRouter>
       <Header/>
      
       <Routes>
         <Route path="/"  element={<Home/>}/>
         <Route path="/Products"  element={<Products/>}/>
         <Route path="/ProductsDetails"  element={<ProductsDetails/>}/>
         <Route path="/Cart"  element = {<Cart/>}/>
         <Route path="/Orders"  element = {<Orders/>}/>
       
       </Routes>
       <Footer/>
       
       </BrowserRouter>
    </div>
  )
}

export default App
