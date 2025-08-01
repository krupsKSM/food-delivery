import Navbar from "./Components/Navbar/Navbar"
import { Routes ,Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"

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