import { useEffect, useState } from 'react';
import './Product.css';

function Product({item, products, setCartItems, items, cartItems}){
    const [buttonText, setButtonText] = useState('Заказать');
    
    
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
        addedItem.count = 1;
        const newItems = [...cartItems, addedItem];
        //items.push(addedItem);
       // console.log(items);
        setCartItems(newItems);
        //console.log(cartItems);
        //setCartItems(addedItem);
      };
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