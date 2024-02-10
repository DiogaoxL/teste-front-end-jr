import { TrustMessage } from './trust-message'
import "./styles/header.scss"

export const TrustMessages = () => {
  const messages = [
    {
      icon: '/public/assets/icons/ShieldCheck.svg',
      message: 'Compra',
      contrast: '100% segura ',
      isReverse: false
    },
    {
      icon: '/public/assets/icons/Truck.svg',
      message: 'acima de R$ 200',
      contrast: 'Frete grátis',
      isReverse: true
    },
    {
      icon: '/public/assets/icons/CreditCard.svg',
      message: 'suas compras',
      contrast: 'Parcele',
      isReverse: true
    }
  ]

  return (
    <aside className='trust-message-bar'>
      {messages.map((message, index) => {
        return (
            <TrustMessage contrast={message.contrast} message={message.message} key={index} icon={message.icon} isReverse={message.isReverse}/>
        )
      })}
    </aside>
  )
}
