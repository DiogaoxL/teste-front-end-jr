
import { TrustMessages } from "./trust-messages"
import Logo from "/public/assets/brand/Group35.svg"
import { SearchBar } from "./search-bar"
import { NavCategory } from "./navbar-category"
export const Header = () => {


    return (
        <>
            <header className="header">
                <TrustMessages />
                <div className="content-search-bar">
                    <img src={Logo} alt="Logo marca"/>
                    <SearchBar/>
                    <ul>
                        <li><img src="/public/assets/icons/Icon-package.svg" alt="" /></li>
                        <li><img src="public/assets/icons/Heart.svg" alt="" /></li>
                        <li><img src="/public/assets/icons/UserCircle.svg" alt="" /></li>
                        <li><img src="/public/assets/icons/ShoppingCart.svg" alt="" /></li>
                    </ul>
                </div>
                <NavCategory/>
            </header>


        
        </>
    )
}