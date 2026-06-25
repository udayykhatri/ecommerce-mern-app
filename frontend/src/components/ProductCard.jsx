function ProductCard({ product, addToCart }) {
    return (
        <div className="card">
            <img
                src={product.imageUrl}
                alt={product.productName}
            />

            <div className="card-content">
                <h3>{product.productName}</h3>

                <p>{product.description}</p>

                <div className="price">
                    ₹{product.price}
                </div>

                <button
                    className="btn"
                    onClick={() => addToCart(product)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;