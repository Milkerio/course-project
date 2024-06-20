import { useEffect, useState } from 'react';
import './Product.css';
import { click } from '@testing-library/user-event/dist/click';

function Product({item, products}){
    const [buttonText, setButtonText] = useState('Заказать');
    
    var cartItems = [];
    let addedItem = {};
    function extractNumbersFromString(str) {
      // Регулярное выражение для поиска чисел
      const regex = /[0-9]+/g;
      
      // Используем метод match для поиска всех совпадений
      const matches = str.match(regex);
      
      // Возвращаем массив найденных чисел
      return matches ? matches : [];
    }
    const handleClick = (evt) => {
        setButtonText((prevText) => { // Обновляем текст кнопки
          if (prevText === 'Заказать') return 'Добавлено';
          else if (prevText === 'Добавлено') return 'Заказать';
        });
        evt.target.disabled = 'true';
        let clickedItem = (evt.target.closest('.product'));
        addedItem.title = clickedItem.querySelector('.product__name').textContent;
        addedItem.image = clickedItem.querySelector('.product__photo').src;
        addedItem.cost = extractNumbersFromString(clickedItem.querySelector('.product__cost').textContent);
        console.log(addedItem);
      };
    function addProduct(product){
      cartItems.push(product);
      console.log(cartItems);
    };
    window.onload = function(){
      const addButtons = document.querySelectorAll('.product__button-buy');
      for(let i = 0; i < 3; i++){
        addButtons[i].addEventListener('click', addProduct(products[i]))
      }
    }
    return(
        <div className="product">
            <img className="product__photo" src={item.image} />
            <p className="product__name">{item.title}</p>
            <p className="product__cost">Цена: {item.cost} за штуку</p>
            <button className='product__button-buy' onClick={handleClick}>{buttonText}</button>
        </div>
    )
}
export default Product;