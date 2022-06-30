import { useEffect } from 'react';
import Product from './Product/Product'
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../../features/products/productsSlice";
const Products = () => {
 const dispatch = useDispatch();
 const { isLoading } = useSelector((state) => state.products);

  const getProductsAndReset = async () => {
    await dispatch(getAll()); //me trae los productos
    dispatch(reset()) //resetear el estado isLoading = false
   };
   useEffect(() => {
     getProductsAndReset();
   }, []);

   if (isLoading) {
    return <h1>Cargando productos...</h1>;
  }

  return (
    <div>
        <h1>Products</h1>
        <Product/>
    </div>
  )
}

export default Products
