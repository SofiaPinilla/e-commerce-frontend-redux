import { useDispatch, useSelector } from "react-redux";
import { like } from "../../../../features/products/productsSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Product = () => {
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const product = products.map((product) => {
    const isAlreadyLiked = product.likes?.includes(user?.user._id);
    return (
      <div className="Product" key={product._id}>
        <p>{product.name}</p>
        <span className="wish">Wish list: {product.likes?.length}</span>
        {isAlreadyLiked ? (
          <HeartFilled  onClick={()=>  console.log("dislike")  } />
        ) : (
          <HeartOutlined onClick={   () => dispatch(like(product._id))  } />
        )}
      </div>
    );
  });
  return <div>{product}</div>;
};

export default Product;
