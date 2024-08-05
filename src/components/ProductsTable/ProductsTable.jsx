import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../store/product-actions";
import { HiExternalLink } from "react-icons/hi";

const ProductsTable = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.product.products);
  const totalQuantity = useSelector((state) => state.product.totalQuantity);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  console.log(totalQuantity, productData);

  return (
    <div className="panel">
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Ürün Adı</th>
              <th>Ürün Fiyatı</th>
              <th>Ürün Kampanyası</th>
              <th>Ürün Kategorisi</th>
              <th className="text-start">Durum</th>
              <th className="text-start">İşlemler </th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, idx) => (
              <tr key={idx}>
                <td className="whitespace-nowrap">{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.productCampain}</td>
                <td className="text-center whitespace-nowrap">{product.productCategory}</td>
                <td>Durum</td>
                <td className="py-2">
                  <button className="text-center" type="button"><HiExternalLink size={20}/></button>
                  <button className="text-center px-2" type="button">Güncelle</button>
                  <button className="text-center px-2" type="button">Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
