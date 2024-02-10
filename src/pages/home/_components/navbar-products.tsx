interface NavBarProductsProps{
  navProduct: string
}

export const NavBarProducts = ({navProduct}: NavBarProductsProps) =>{

  

  return(
    <li className="nav-products">
      <span className="title-nav-product">{navProduct}</span>
    </li>
  )
}