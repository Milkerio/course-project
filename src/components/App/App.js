import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import water3 from '../../images/water3.PNG';
import water19 from '../../images/water19.png';
import Cart from '../Cart/Cart';

function App(){
    const items = [
        {
            title: "Вода Ключ Здоровья 3 литра",
            image: water3,
            cost: 20,
        },
        {
            title: "Вода Ключ Здоровья 19 литров",
            image: water19,
            cost: 40,
        },
    ]
    const [cartItems, setCartItems] = useState(items);
    return(
        <div className='page'>
            <Header />
            <main className='page-main'>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main />
                    }
                />
                <Route
                    path="/profile"
                    element={<Profile />}
                />
                <Route 
                    path="/cart"
                    element={<Cart cartItems={cartItems} />}
                />
            </Routes>
            </main>  
            <Footer />
        </div>
    )
}
export default App;