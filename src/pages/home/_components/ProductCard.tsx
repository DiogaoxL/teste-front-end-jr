interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
    onClick: () => void;
  }

export const ProductCard = ({
    descriptionShort,
    photo,
    price,
    onClick
}: Product )  => {
  
  return (
    <aside className="card-product-root">
      <img src={photo} className="card-photo" />
      <p className="description-short">{descriptionShort}</p>
      <p className="previous-price">R$ 30,90</p>
      <span>R$ {price},00</span>
      <p className="installments">ou 2x de R$ 49,95 sem juros</p>
      <span className="free-shipping">Frete grátis</span>
      <div className="button-aside">
        <button onClick={onClick}>COMPRAR</button>
      </div>
    </aside>
  );
};
