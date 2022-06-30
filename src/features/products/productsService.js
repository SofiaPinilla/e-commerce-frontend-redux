import axios from "axios";

const API_URL = "http://localhost:8000";

const getAll = async () => {
  const res = await axios.get(API_URL + "/products");
  return res.data;//action.payload
};

const like = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/products/likes/"+_id,{}, {
        headers: {
          authorization: user?.token,
        },
      } );
    return res.data;
  };

const productsService = {
  getAll,
  like
};

export default productsService;
