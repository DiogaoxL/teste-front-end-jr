import React, { useState, useEffect } from "react";
import "../home.scss";
import { ProductCard } from "./ProductCard";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [modal, setModal] = useState(false);
  const [productName, setProductName] = useState<string>();
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productPhoto, setProductPhoto] = useState<string>();
  const [productDescription, setProductDescription] = useState<string>();
  const [productCounter, setProductCounter] = useState<number>(1);

  const handleAddProduct = () => {
    const newProductCounter = productCounter + 1;
    setProductCounter(newProductCounter);
    const singleProductPrice = productPrice / productCounter;
    setProductPrice(productPrice + singleProductPrice);
  };

  const handleRemoveProduct = () => {
    if (productCounter <= 1) {
      setProductCounter(1);
      return;
    } else {
      const newProductCounter = productCounter - 1;
      setProductCounter(newProductCounter);
      const singleProductPrice = productPrice / productCounter;
      setProductPrice(productPrice - singleProductPrice);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5173/lista_produto");
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error("erro diabo", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {modal && (
        <div className="product-modal">
          <div className="modal-active">
            {productPhoto && <img src={productPhoto} />}
            <div className="product-info">
              {productName && <h1>{productName}</h1>}
              {productDescription && <p>{productDescription}</p>}
              {productPrice && <h1>R$ {productPrice.toFixed(2).replace(".", ",")}</h1>}
              <a href="#">Veja mais detalhes do produto </a>

              <div className="add-product">
                <button onClick={handleRemoveProduct}>-</button>
                <span>{productCounter}</span>
                <button onClick={handleAddProduct}>+</button>
              </div>
              <button className="buy-product-btn">comprar</button>
            </div>

            <button className="close-modal-btn" onClick={() => setModal(false)}>
              <img src="/public/assets/icons/close-icon.svg" />
            </button>
          </div>
        </div>
      )}
      <div className="product-list">
        {products.map((product, index) => (
          <>
            <ProductCard
              onClick={() => {
                setModal(true);
                setProductPhoto(product.photo);
                setProductName(product.productName);
                setProductPrice(product.price);
                setProductDescription(product.descriptionShort);
              }}
              key={index}
              productName={product.productName}
              descriptionShort={product.descriptionShort}
              photo={product.photo}
              price={product.price}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default ProductList;
