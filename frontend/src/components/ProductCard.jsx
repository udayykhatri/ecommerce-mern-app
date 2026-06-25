function ProductCard({ product, addToCart }) {
    return (
        <div className="card">
            <img src={product.imageUrl} alt={product.productName} />

            <h3>{product.productName}</h3>

            <p>{product.description}</p>

            <h4>₹{product.price}</h4>

            <button onClick={() => addToCart(product)}>
                Add To Cart
            </button>
        </div>
    );
}

export default ProductCard;