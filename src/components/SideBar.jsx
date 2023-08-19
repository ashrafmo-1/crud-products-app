import { Link } from "react-router-dom"

function SideBar() {
    return (
        <ul className="list-unstyled">
            <li>
                <Link to={'/products'}>get all products</Link>
            </li>
            <li>
                <Link to={'/'}>get all catigorys</Link>
            </li>
            <li>
                <Link to={'/'}></Link>
            </li>
            <li>
                <Link to={'/'}>your car shoping</Link>
            </li>
            <li>
                <Link to={'/'}>buy now</Link>
            </li>
        </ul>
    )
}

export default SideBar