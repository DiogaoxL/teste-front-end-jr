
import './home.scss'
import { Footer } from "./_components/footer"
import { Header } from '../../components/header/Header'
import { CategoryBar } from './_components/category-bar'
import ProductList from './_components/Products'
import { PartinerCard } from './_components/partner-card';
import { ProducutsCards } from './_components/producuts-cards'
import { NavBarProductsCaregory } from './_components/navbar-products-category'

export const Home = () => {


    return (
        <>
        <Header/> 
             <main>
                <section className='bg-home'>
                    <h1>Venha conhecer nossas promoções</h1>
                    <h2>50% Off nos produtos </h2>
                    <div>
                    <button>Ver produto</button>
                    </div>
                </section>
            </main>

            <CategoryBar/>

            <div className='title-category-products'>
                <p>Produtos relacionados</p>
            </div>

           <NavBarProductsCaregory/>

             <ProductList></ProductList> 

            <div className='partners-cards'>
             <PartinerCard/> 
             <PartinerCard/> 
            </div>

            <div className='title-products'>
                <h3>Produtos relacionados</h3>
                <p>Ver todos</p>
            </div>

            <div className='products-cards'>
             <ProducutsCards /> 
             <ProducutsCards/> 
            </div>

            <Footer/>

        </>
    )
}