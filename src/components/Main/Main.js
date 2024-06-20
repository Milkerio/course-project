import './Main.css';
import InfoIcon from '@mui/icons-material/Info';
import ProductsContainer from '../ProductsContainer/ProductsContainer';

function Main(){
    return(
        <section className='main'>
            <div className='main__title-container'>
            <h2 className='main__title'>Вода с доставкой</h2>
            <InfoIcon className='main__title-info' />
            <div className='main__info'>Минимальный размер бутыли - 3 литра.</div>
            </div>
            <div className='products'>
                <ProductsContainer />
            </div>
        </section>
    )
}
export default Main;