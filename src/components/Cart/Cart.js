import './Cart.css';
import { Link } from 'react-router-dom';
import CartCard from '../CartCard/CartCard';
import { useState } from 'react';

function Cart({cartItems}){
    const [cost, setCost] = useState(0);
    const order = document.querySelector('.popup');
    const orderPopup = document.querySelector('.order_popup');
    const orderBtn = document.querySelector('.cart__order-button');
    const [addressText, setAddressText] = useState(localStorage.getItem('address') || '');
    const addressInput = document.querySelector('.order_popup_adress');
    if(orderBtn){
        orderBtn.addEventListener('click', function(){
            order.style.visibility = 'visible';
            order.style.opacity = '1';
        });
    } else {
        console.log('Не найден');
    }
    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(orderPopup);
        if (!withinBoundaries && e.target == order) {
            order.style.visibility = 'hidden'; // скрываем элемент т к клик был за его пределами
        }
    });
    
    // Функция для получения значения из инпута
    function getAddress(evt) {
        // Получаем значение из инпута
        const address = addressInput.value;
        
        // Присваиваем значение переменной
        localStorage.setItem('address', address);
        setAddressText(evt.target.value);
    }

    return(
        <section className="cart">
            <h2 className="title">Корзина</h2>
            {
                cartItems && cartItems.length > 0 ?
                <div className="cart__container">
                    <div className='cart__container_main'>
                        <div className='cart__cards'>
                        {
                            cartItems.map((item, key) => (
                                <CartCard 
                                    item={item} 
                                    key={item.title} 
                                    setCost={setCost}
                                    cost={cost}
                                    cartItems={cartItems}
                                />
                            ))
                        }
                        </div>
                    </div>
                    <div className='cart__container_order'>
                        <h3 className='cart__order-title'>Заказ</h3>
                        <div className='cart__order_cost'>
                            <p className='cart__order_cost-title'>Итого:</p>
                            <p className='cart__order_cost-summary'>{cost}</p>
                        </div>
                        <button className='cart__order-button' id="orderBtn">Заказать</button>
                    </div>
                </div>
                :
                <div className='cart__container_empty'>
                    <p className='cart__subtitle'>Корзина пуста</p>
                    <Link to="/" className='cart__link'>→ Ознакомиться с продукцией ←</Link>
                </div>
            }
            {
                cartItems && cartItems.length > 0 ?
                <div className='cart__buttons'>
                    <button className='cart__button_reset'>Очистить корзину</button>
                </div>
                :
                <></>
            }
            
            <div className='popup'>
                <div className='order_popup' id='order'>
                    <h2 className='order_popup-title'>Подтверждение заказа</h2>
                    <p className='order_popup-tip'>Введите адрес доставки</p>
                    <input className='order_popup_adress' placeholder='Пример: ул.Пушкина 2а, кв.11' id="address" onChange={getAddress} value={addressText} ></input>
                    <button className='order_popup-button'>Оформить</button>
                </div>
            </div> 
        </section>
    )
}
export default Cart;