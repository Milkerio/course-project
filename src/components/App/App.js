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
    let items = [];
    const [cartItems, setCartItems] = useState([]);
    useEffect(()=>{
        console.log(items);
        console.log(cartItems);
    },[items, cartItems])
    useEffect(()=>{
        setCartItems(items)
    },[])
    return(
        <div className='page'>
            <Header />
            <main className='page-main'>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main setCartItems={setCartItems} items={items} cartItems={cartItems} />
                    }
                />
                <Route
                    path="/profile"
                    element={<Profile />}
                />
                <Route 
                    path="/cart"
                    element={<Cart cartItems={cartItems} items={items} setCartItems={setCartItems} />}
                />
            </Routes>
            </main>  
            <Footer />
        </div>
    )
}
export default App;