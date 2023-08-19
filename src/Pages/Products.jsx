import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Swal from 'sweetalert2'

function Products() {
    const [products, setproducts] = useState([])

    const getProducts = () => {
        fetch('http://localhost:9000/products').then(res => res.json()).then(data => setproducts(data));
    }
    useEffect(() => {
        getProducts()
    }, [])

    const DeleteProduct = (product) => {
        Swal.fire({
            title: `are you sure delete - ${product.title}`, showCancelButton: true, icon: 'warning'}).then(data => {
            if (data.isConfirmed === true) {
                fetch(`http://localhost:9000/products/${product.id}`, {method: 'delete'}).then(res => res.json()).then(data => getProducts())
            } else {
                return false
            }
        })
}

    return (
        <>
        <h1>home page</h1>

            <Link to={'/products/add'} className="mt-5 mb-1 btn btn-success">Add new product</Link>
        <table className="mt-2 table table-bordered border-success">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>category</th>
                        <th>photo</th>
                        <th>controls</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod) => {
                        return (
                    <tr key={prod.id}>
                                <td>{ prod.id }</td>
                                <td>{ prod.title }</td>
                                <td>${ prod.price }</td>
                                <td>{ prod.category }</td>
                                <td><img src={ prod.image } alt="" /> </td>
                        <td className="btnsConrols">
                                    <button className="btn btn-danger btn-sm" onClick={() => {

                                        DeleteProduct(prod)

                            }}>delete</button>
                            <Link to={`/products/${prod.id}`} className="btn btn-info btn-sm">show</Link>
                            <Link to={'/editProduct'} className="btn btn-primary btn-sm">edit</Link>
                        </td>
                    </tr>
                        )
                    })}
                </tbody>
        </table>
        </>
    )
}

export default Products