import { useQuery } from "@tanstack/react-query";
import productService from "../services/productService";
import ProductCard from "../features/product/ProductCard";
import { ProductProps } from "../features/product/product.types";

function Home() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAllProducts(),
  });

  return (
    <div className="app">
      <h1>Product List</h1>
      <div className="product-list">
        {data?.map((product: ProductProps) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
