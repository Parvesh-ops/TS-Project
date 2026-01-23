
import type { IProduct } from "../App";

interface ProductProps {
    product: IProduct;
     addToCart: (id: number) => void;
}

export const Products = ({ product,addToCart }: ProductProps) => {
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ₹{product.price}</p>
            <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
            <button onClick={()=>addToCart(product.id)}>Add to  Cart</button>
        </div>
    )
}


