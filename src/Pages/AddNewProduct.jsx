
import { useState } from "react"
import { json, useNavigate } from "react-router-dom"
function AddNewProduct() {

    
    //get data from inputs Too add new data
    let [title, setTitle] = useState('')
    let [category, setCategory] = useState('')
    let [price, setPrice] = useState(0)
    let [image, setimage] = useState(0)

   const navite = useNavigate()

    let disapleFormSubmet = (ev) => {
        ev.preventDefault()
        console.log(title, price, category);
        fetch('https://database-products.onrender.com/products', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                category: category,
                price: price,
                image: image
            })
        })
            .then(res => res.json()).then(data => navite('/products'));
    }

    return (
        <>
        <h1>add your product now </h1>
        <form onSubmit={disapleFormSubmet}>
            <div className="mb-3">
                <label htmlFor="productTitle" className="form-label">Product Title</label>
                    <input type="text" className="form-control" id="productTitle" aria-describedby="product name" onChange={(event) => {
                        setTitle(event.target.value)
                }} />
            </div>
            <div className="mb-3">
                <label htmlFor="productCategory" className="form-label">Product category</label>
                <input type="text" className="form-control" id="productCategory" onChange={(event) => {
                        setCategory(event.target.value) 
                }}/>
                </div>
                <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">Product Price</label>
                <input type="number" className="form-control" id="productPrice" onChange={(event) => {
                        setPrice(parseInt(event.target.value))
                    }} />
                </div>
                <div className="mb-3">
                <label htmlFor="productImageLink" className="form-label">Product Price</label>
                <input type="text" className="form-control" id="productImageLink" onChange={(event) => {
                        setimage(event.target.value)
                    }} />
                </div>
            <button type="submit" className="btn btn-success">add new product</button>
        </form>
        </>
    )
}

export default AddNewProduct