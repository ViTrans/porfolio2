import ProductItem from "./ProductItem";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(collection(db, "products"));
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="container pt-8">
      <h2 className="heading mb-9 md:mb-14 relative pb-4 font-bold text-xl md:text-[32px] text-primary leading-normal text-left left">
        Sản phẩm của mình
      </h2>
      <div className="grid lg:grid-cols-4 gap-8 lg:gap-16 max-lg:grid-flow-col max-lg:auto-cols-[215px] max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory scroll-hidden">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
