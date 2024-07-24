import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
        <Link to={"/products"}  className="underline">Ürünler</Link>
    </div>
  )
}

export default Dashboard