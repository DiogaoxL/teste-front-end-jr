interface NavBarProps{
    navIcon:string
    navTitle:string
}
export const NavBar = ({navIcon, navTitle}: NavBarProps) => {


    return (
        <li className="nav-items">
                {navIcon && <img className="nav-icons" src={navIcon} alt="ícone da categoria" />}
                <span className="nav-title">{navTitle}</span>
        </li>
    )

}