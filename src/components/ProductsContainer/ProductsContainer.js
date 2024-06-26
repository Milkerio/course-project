import products from "../../utils/products";
import Product from "../Product/Product";
import './ProductsContainer.css';

function ProductsContainer({setCartItems, items, cartItems}){
    return(
        <div className="products__container">
            {
                products && products.length > 0 ?
                products.map((item, key) => (
                    <Product
                        item={item}
                        key={item.title}
                        products={products}
                        setCartItems={setCartItems}
                        items={items}
                        cartItems={cartItems}
                    />
                ))
                :
                <></>
            }
        </div>
    )
}
export default ProductsContainer;