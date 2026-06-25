function Cart({ cart, increase, decrease }) {
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h2>Cart</h2>

            {cart.map((item) => (
                <div key={item._id}>
                    <p>{item.productName}</p>

                    <button onClick={() => decrease(item._id)}>
                        -
                    </button>

                    {item.quantity}

                    <button onClick={() => increase(item._id)}>
                        +
                    </button>
                </div>
            ))}

            <h3>Total: ₹{total}</h3>
        </div>
    );
}

export default Cart;