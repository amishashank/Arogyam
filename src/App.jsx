import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  useEffect(() => {
    // Create the chatbot script
    const script = document.createElement("script");
    script.type = "module";
    script.async = true;
    script.src =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    document.body.appendChild(script);

    // Create the chatbot element
    const chatbot = document.createElement("zapier-interfaces-chatbot-embed");
    chatbot.setAttribute("is-popup", "true");
    chatbot.setAttribute("chatbot-id", "cmgupswhn001sfemydwg9fn9x");

    document.body.appendChild(chatbot);

    // Cleanup when component unmounts
    return () => {
      script.remove();
      chatbot.remove();
    };
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
