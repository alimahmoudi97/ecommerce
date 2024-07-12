import ProductCart from "../cart/ProductCart";

function ProductsList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product, index) => {
        return <ProductCart key={product._id} product={product} />;
      })}
    </div>
  );
}
export default ProductsList;
