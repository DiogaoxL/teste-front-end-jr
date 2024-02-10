 import { Category } from "./category"

export const CategoryBar = () => {

    const categorys = [
        {
            title: "Tecnologia", 
            icon: "public/assets/icons/monitorar-tablet-e-smartohone 1.svg"
        },
        {
            title: "Supermercado", 
            icon: "/public/assets/icons/supermercados 1.svg"
        },
        {
            title: "Bebidas", 
            icon: "/public/assets/icons/whiskey.svg"
        },
        {
            title: "Ferramentas", 
            icon: "public/assets/icons/ferramentas 1.svg"
        },
        {
            title: "Saúde", 
            icon: "public/assets/icons/cuidados-de-saude 1.svg"
        },
        {
            title: "Esportes e Fitness", 
            icon: "public/assets/icons/corrida 1.svg"
        },
        {
            title: "Moda", 
            icon: "public/assets/icons/moda 1.svg"
        },
    ]

    return (
        <ul className="category-bar">
            {categorys.map((category, index) => {
                return (
                  <Category icon={category.icon} title={category.title} key={index} />
                )
            })}
        </ul>
    )
}