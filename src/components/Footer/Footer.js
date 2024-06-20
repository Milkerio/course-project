import './Footer.css';

function Footer(){
    return(
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__name'>
                    <p className='footer__copyright'>2024 © Ключ Здоровья</p>
                </div>
                <div className='footer__info'>
                    <p className='footer__phone'>+7 (8332) 434-999 (Киров) <br></br> Режим работы с 7:00 до 24:00</p>
                    <p className='footer__email'>kz-kirov@mail.ru</p>
                </div>
                <div className='footer__address'>
                    <p className='footer__address-name'>610046, Киров, 2-ой Кирпичный пер., 2а</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;