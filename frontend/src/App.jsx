import { useEffect, useState } from "react";
import API from "./services/api";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  const addToCart = (product) => {
    const exist = cart.find(
      (item) => item._id === product._id
    );

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item._id === id
            ? {
              ...item,
              quantity: item.quantity - 1,
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="container">
      <h1>E-Commerce Store</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Cart
        cart={cart}
        increase={increase}
        decrease={decrease}
      />
    </div>
  );
}

export default App;