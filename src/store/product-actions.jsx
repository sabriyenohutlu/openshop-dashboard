import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebaseConfig"
import { productActions } from "./product-slice";

export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async() => {
      const querySnapshot = await getDocs(query(collection(db, "product")));
      const data = [];
      const size = querySnapshot.size
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), doc: doc.id });
      });

      return {data,size};
    }

    try {
      const {data, size} =await fetchData()
       dispatch(
         productActions.allProducts({
          products: data || [],
          totalQuantity: size
         })
       )
  
    } catch(error){
       console.log(error)
    }
  }
}
