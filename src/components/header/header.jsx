import './header.css'
import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return(
      <div className="main__head">
          <img className="main__head-img"
               src="https://in-museum.ru/wp-content/uploads/2019/04/cropped-logo_big.png" alt=""/>
          <NavLink to="Partners" className="main__head-link main__head-link-active">ПАРТНЕРЫ</NavLink>
          <NavLink to="SpecialProjects" className="main__head-link main__head-link-active">СПЕЦПРОЕКТЫ</NavLink>
          <NavLink to="Organizers" className="main__head-link main__head-link-active">ОРГАНИЗАТОРЫ</NavLink>
          <NavLink to="Poster" className="main__head-link main__head-link-active">АФИША</NavLink>
          <NavLink to="react-task" className="main__head-link main__head-link-active">АКЦИЯ</NavLink>
      </div>
  )
}

export default Header;