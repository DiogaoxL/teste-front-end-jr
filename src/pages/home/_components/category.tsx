
interface CategoryProps {
    icon: string
    title: string
}

export const Category = ({icon, title}: CategoryProps) => {


    return (
        <li className="category-items">
                {icon && <img className="img-ct" src={icon} alt="ícone da categoria" />}
                <span className="category-title">{title}</span>
        </li>
    )

}