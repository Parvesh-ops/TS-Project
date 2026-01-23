import { useState } from "react"
import { Products } from "./components/Products";


export interface IProduct {
    id: number;
    title: string;
    price: number;
    inStock: boolean;
    image: string;
}

const App = () => {
    const [products, setProducts] = useState<IProduct[]>([
        { id: 1, title: "Iphone", price: 4000, inStock: true, image: "https://via.placeholder.com/150", },
        { id: 2, title: "Samsung J9", price: 2000, inStock: false, image: "https://via.placeholder.com/150", },
        { id: 3, title: "Iphone 16", price: 40000, inStock: true, image: "https://via.placeholder.com/150", },
    ])

    const addToCart = (id: number) => {
        console.log("Added product:", id);
    }

    return (
        <div>
            <h1>Ecommerce Demo</h1>
            {
                products.map((product) => (
                    <Products key={product.id} product={product} addToCart={addToCart} />
                ))
            }
        </div>
    )
}

export default App
