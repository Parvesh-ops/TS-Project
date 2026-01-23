import type { IProduct } from "../types/products"

interface ProductProps{
    product: IProduct;
    addToCart:(id:number)=>void
}

const Products = ({ product, addToCart }: ProductProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      
      <div className="h-56 bg-white p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2">
          {product.title}
        </h3>

        <p className="mt-2 text-lg font-bold">
          ₹{product.price}
        </p>

        <div className="text-sm text-gray-500 mt-1">
          ⭐ {product.rating.rate} ({product.rating.count})
        </div>

        <button
          onClick={() => addToCart(product.id)}
          className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Products
