import './Header.css';
import { Link } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import logo from '../../images/logo.png';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Shop } from '@mui/icons-material';

function Header(){
    return(
        <header className='header'>
            <div className='header__container'>
                <Link to="/" className='header__logo-link'>
                    <img src={logo} className='header__logo' alt="Лого сайта" />
                </Link> 
                <div className='header__navigation'>
                    <Navigation />
                </div>
                <div className='header__profile-container'>
                    <Link to="/cart" className='header__cart-link'>
                        <ShoppingCartIcon />
                    </Link>
                    {/* <Link to='/profile' className='header__profile-link'>
                        <AccountBoxIcon />
                    </Link> */}
                    
                </div>
            </div>

        </header>
    )
}
export default Header;