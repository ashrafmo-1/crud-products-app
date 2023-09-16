import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowProduct() {
    let { prodID } = useParams()
    let [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://database-products.onrender.com/products/${prodID}`).then(res => res.json()).then(prod => setProduct(prod));
    }, [])


  return (
    <div className="showProductDetails mt-5 text-center">
      <img className="showProductImg mb-5" src={product.image} alt="" />
      <h1 className="showProductTit mt-5 mb-5"> {product.title} <span> ( {product.category} )</span> </h1>
      <p> {product.description} </p>
      <div className="d-flex justify-content-around mt-5 mb-5">
        <h1> Rete: {product.rating?.rate} </h1>
        <h1> Count Product: {product.rating?.count} </h1>
      </div>
    </div>
  )
}

export default ShowProduct;
