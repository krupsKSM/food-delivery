import "./home.css"
import Header from "../../components/header/Header"
import ExploreMenu from "../../components/exploreMenu/ExploreMenu"

import {useState} from "react"

const Home = () => {
    const [category , setCategory] = useState("All")
    return(
        <div>
            <h2>homepge</h2>
            <Header/>
            <ExploreMenu category= {category} setCategory= {setCategory}/>
        </div>
    )
}

export default Home