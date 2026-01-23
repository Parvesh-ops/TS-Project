import { useState, useEffect } from "react"
import axios from "axios"
import type { IProduct } from "./types/products"
import Products from "./components/Products"

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)

        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
        setProducts(response.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.status);
        }
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🛒 Fake Store Ecommerce
      </h1>

      {/* Loading */}
      {loading && <p className="text-center">Loading products...</p>}

      {/* Error */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Products */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            addToCart={(id) => console.log("Add to cart:", id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;