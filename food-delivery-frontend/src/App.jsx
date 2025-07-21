import Navbar from "./components/navbar/Navbar"
import { Routes ,Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import PlaceOrder from "./pages/placeOrder/PlaceOrder"

function App(){

  return(
    <>
    <div className="app">
      {/* <h2>Food delivery</h2> */}
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path = "/cart" element = {<Cart/>} />
        <Route path = "/placeOrder" element = {<PlaceOrder/>} />
      </Routes>
    </div>
    </>
  )
}

export default App