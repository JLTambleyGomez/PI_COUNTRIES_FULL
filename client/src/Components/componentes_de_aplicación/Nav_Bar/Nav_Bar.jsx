import style from './Nav_Bar.module.css';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className={style.bar1}>
      
      <div className={style.buttonContainer}>
        <button className={style.myButton}>
          <NavLink to="/home" className={style.link}>
            Home
          </NavLink>
        </button>
        <button className={style.myButton}>
          <NavLink to="/form" className={style.link}>
            Nueva Actividad
          </NavLink>
        </button>
      
        <button className={style.myButton}>
          <NavLink to="/" className={style.link}>
            Salir
          </NavLink>
        </button>
     
      </div>
    </div>
  );
}

export default NavBar;
