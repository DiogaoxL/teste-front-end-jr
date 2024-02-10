import { NavBarProducts } from "./navbar-products"

export const NavBarProductsCaregory = () =>{
  const navbarproducts = [
    {
        navTitleProduct: "celular", 

    },
    {
        navTitleProduct: "acessórios", 
      
    },
    {
        navTitleProduct: "NOTEBOOKS", 
      
    },
    {
        navTitleProduct: "TVs", 
      
    },
    {
        navTitleProduct: "Ver todos", 
      
    }
]
  

  return(
    
    <ul className="navbar-products-category">
      {navbarproducts.map((NavBarProductsCaregory, index)=>{
        return(
          <NavBarProducts navProduct ={NavBarProductsCaregory.navTitleProduct} key={index}/>
        )
      })}
    </ul>
  )
}