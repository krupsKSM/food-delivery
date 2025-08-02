import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/food-del-assets/assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download'>
        <p>For better experience download <br /> Tomato App</p>

        <div className="app-download-paltforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
