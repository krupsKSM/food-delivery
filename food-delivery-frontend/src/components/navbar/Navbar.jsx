import {assets} from "../../assets/food-del-assets/assets/frontend_assets/assets"
import "./navbar.css"
import { useState } from "react"

function Navabr(){

    const [menu , setMenu] = useState("home")
    return (
        <>
        <div className="navbar">
            <img src={assets.logo} alt = "logo" className = "logo"/>
            <ul className="navbar-menu">
                <li className={menu === "home" ? "active": ""} onClick = {()=> setMenu("home")} >home</li>
                <li className={menu === "menu" ? "active":""} onClick = {()=> setMenu("menu")} >menu</li>
                <li className={menu === "mobile-app" ? "active" :""} onClick = {()=> setMenu("mobile-app")} >mobile-app</li>
                <li className={menu === "contact-us" ? "active":""} onClick = {()=> setMenu("contact-us")} >contact us</li>
            </ul>
            
            <div className="navbar-right">
                <img src={assets.search_icon} alt = "search-icon"/>
                <div className="navbar-basket-icon">
                    <img src= {assets.basket_icon} alt="basket-icon" />
                    <div className="dot"></div>
                </div>
                <button >sign in</button>
            </div>
        </div>
        </>
    )
}
export default Navabr