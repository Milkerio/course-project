import './CartCard.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';

export default function CartCard({item, setCost, cost, cartItems}){
    const [itemCount, setItemCount] = useState(1);
    const deleteButton = document.querySelectorAll('.card__button_delete');
    function increaseCount(){
        setItemCount(itemCount+1);
    }
    function decreaseCount(){
        if(itemCount > 1){
            setItemCount(itemCount-1);
        }  
    }
    function setNewCost(){
        const card = document.querySelectorAll('.card__cost');
        card.forEach(element => {
        console.log(element.textContent);
        setCost(cost + Number(element.textContent));
    });
    }
    useEffect(() => {
        setNewCost();
    },[]);
    function removeCard(evt){
        evt.preventDefault();
        var product = this.parentNode;
        product.remove();
    }
    deleteButton.forEach(function(button){
        button.addEventListener('click', removeCard, false);
    });
    function calculateTotalCost(){
        let totalCost = 0;
        for(let i = 0; i < cartItems.length; i++){
            let item = cartItems[i];
            let itemCost = item.cost * itemCount;
            console.log('Товар' + itemCost);
            totalCost += itemCost;
        }
        return totalCost;
    }
    let totalCost = calculateTotalCost();
    console.log('Итог' + totalCost);
    return(
        <div className='card'>
            <div className='card__image-container'>
                <img className='card__image' alt={item.title} src={item.image} />
            </div>
            <div className='card__info-container'>
                <div className='card__title-container'>
                    <p className='card__title'>{item.title}</p>
                </div>
                <div className='card__count-container'>
                    <button className='card__count-decrease card__count-button' onClick={decreaseCount}>
                        -
                    </button>
                    <p className='card__count'>{itemCount}</p>
                    <button className='card__count-increase card__count-button' onClick={increaseCount}>
                        +
                    </button>
                </div>
                <p className='card__cost'>{itemCount * item.cost}</p>
            </div>
            <button className="card__button_delete">
                <DeleteIcon  />
            </button>
        </div>
    )
    
}