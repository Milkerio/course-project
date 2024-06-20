import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return(
        <div className='header__navigation-links'>
            <ul className='header__links'>
                <li><Link className='header__link' to="/">Главная</Link></li>
                <li><a className='header__link' href="http://www.artvoda.com/uslugi" target="_blank" rel="noreferrer">Услуги</a></li>
                <li><a className='header__link' href="http://www.artvoda.com/o-nas" target="_blank" rel="noreferrer">О нас</a></li>
                <li><a className='header__link' href="http://www.artvoda.com/kontakty" target="_blank" rel="noreferrer">Контакты</a></li>
            </ul>    
        </div>   
    )
}

export default Navigation;