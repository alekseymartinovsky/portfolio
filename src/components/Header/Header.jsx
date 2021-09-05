import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => {
    return(
        <div className={style.header}>
            <div><NavLink exact to="/" activeClassName={style.active} className={style.header_link}>Работы</NavLink></div>
            <div><NavLink to="/about" activeClassName={style.active} className={style.header_link}>Контакты</NavLink></div>
        </div>
    )
}

export default Header;