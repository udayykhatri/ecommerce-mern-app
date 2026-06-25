function Cart({ cart, increase, decrease }) {
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>

            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div
                        key={item._id}
                        className="cart-item"
                    >
                        <div>
                            <strong>{item.productName}</strong>
                            <p>₹{item.price}</p>
                        </div>

                        <div className="qty-controls">
                            <button
                                className="qty-btn"
                                onClick={() => decrease(item._id)}
                            >
                                -
                            </button>

                            <span>{item.quantity}</span>

                            <button
                                className="qty-btn"
                                onClick={() => increase(item._id)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))
            )}

            <div className="total">
                Total: ₹{total}
            </div>
        </div>
    );
}

export default Cart;