


interface TrustMessageProps {
    icon: string
    message: string
    contrast: string
    isReverse: boolean
}


export const TrustMessage = ({icon, message, contrast, isReverse}: TrustMessageProps) => {

return (


    <li className="trust-message">
    <figure>
        <img src={icon} alt="ícone ilustrativo"/>
    </figure>
   <aside className={`${isReverse && "reverse"} trust-message-aside`}>
   <h5>
        {message}
    </h5>
    <h6>
        {contrast}         
    </h6>
   </aside>
</li>
)


}