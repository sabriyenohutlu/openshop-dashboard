import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../store/product-actions";
const ProductsTable = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state)=>state.product.products)
  const totalQuantity = useSelector((state)=>state.product.totalQuantity)

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  console.log(totalQuantity,productData)

  return (
    <div className="panel">
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Sale</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action </th>
            </tr>
          </thead>
          <tbody>
            <template>
              <tr>
                <td className="whitespace-nowrap">Ürün1</td>
                <td>Ürün1</td>
                <td>Ürün1</td>
                <td className="text-center whitespace-nowrap">Ürün1</td>
                <td className="text-center">
                  <button type="button">Düzenle</button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
