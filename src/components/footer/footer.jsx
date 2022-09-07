import './footer.css'
import React from "react";

const Footer = () => {
  return(
      <div className="main__footer">
          <div className="main__footer-items">
              <p className="main__footer-items-p">inmeuseumrus@gmail.com</p>
              <p className="main__footer-items-p2">2019 Инклюзивный музей</p>
              <div className="main__footer-items-photo">
                  <img
                      src="https://e7.pngegg.com/pngimages/478/171/png-clipart-youtube-music-logo-computer-icons-youtube-angle-rectangle.png"
                      alt="" className="main__footer-items-photo-img"/>
                  <img
                      src="https://c1.klipartz.com/pngpicture/439/164/sticker-png-social-icon-social-icon-vk-social-logotype-icon-social-icons-rounded-icon-symbol-automotive-decal.png"
                      alt="" className="main__footer-items-photo-img"/>
                  <img
                      src="https://flyclipart.com/thumb2/iconsetc-flat-circle-white-on-black-raphael-facebook-icon-466346.png"
                      alt="" className="main__footer-items-photo-img"/>
                  <img src="https://i.pinimg.com/originals/ca/29/86/ca2986a43d699a2e11ccc83fd5fb9630.png  " alt=""
                       className="main__footer-items-photo-img"/>
              </div>
          </div>
      </div>
  )
}
export default Footer;