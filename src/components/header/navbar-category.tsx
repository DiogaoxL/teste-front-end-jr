import { NavBar } from "./navbar";

export const NavCategory = () => {

    const navbar = [
        {
            navTitle: "Todas Categorias", 
            navIcon: ""
        },
        {
            navTitle: "Supermercado", 
            navIcon: ""
        },
        {
            navTitle: "Livros", 
            navIcon: ""
        },
        {
            navTitle: "Moda", 
            navIcon: ""
        },
        {
            navTitle: "Lançamentos", 
            navIcon: ""
        },
        {
            navTitle: "Ofertas do dia", 
            navIcon: ""
        },
        {
            navTitle: " Assinatura", 
            navIcon: "/public/assets/icons/CrownSimple.svg"
        }

    ]

    return (
        <ul className="category-navbar">
            {navbar.map((navCategory, index) => {
                return (
                  <NavBar navIcon={navCategory.navIcon} navTitle={navCategory.navTitle} key={index} />
                )
            })}
        </ul>

        
        
    )
}
