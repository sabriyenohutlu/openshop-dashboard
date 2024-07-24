import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
        <Link to="/urunler" className="underline">Ürünler</Link>
    </div>
  )
}

export default Dashboard