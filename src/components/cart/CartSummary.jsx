import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/cartHelpers";
import { useState } from "react";
import qrImage from "../../assets/qr.jpg"; // ✅ make sure qr.jpg exists

function CartSummary() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");

  // 🧮 Base Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 🦊 Foxo Price (special member price — 5% off MRP)
  const foxoPrice = subtotal * 0.95;

  // 💸 Additional discount (5%) on Foxo Price
  const discount = foxoPrice * 0.05;

  // 🚚 Delivery charge logic
  const deliveryCharge = foxoPrice >= 999 ? 0 : 59;

  // 🧾 Final total (no tax)
  const total = Math.round(foxoPrice - discount + deliveryCharge);

  // 🎁 Rewards (5% cashback on final total)
  const rewards = Math.round(total * 0.05);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Cart Summary</h2>

      {/* Summary details */}
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Items ({cart.length})</span>
          <span>{formatPrice(subtotal)}</span>
        </div>

        {/* MRP vs Foxo Price */}
        <div className="flex justify-between items-center">
          <span>MRP Total</span>
          <span className="line-through text-gray-500">{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium text-blue-700">Foxo Price</span>
          <span className="text-green-600 font-semibold">
            {formatPrice(foxoPrice)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Discount (5%)</span>
          <span className="text-green-600">- {formatPrice(discount)}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Charges</span>
          {deliveryCharge === 0 ? (
            <span className="text-green-600 font-medium">FREE</span>
          ) : (
            <span>{formatPrice(deliveryCharge)}</span>
          )}
        </div>

        <hr className="my-2" />

        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Est. Order Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      {/* Info cards */}
      <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-2 text-sm text-green-800 flex items-center gap-2">
        🚚 Free delivery on orders above ₹999
      </div>

      <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-sm text-yellow-800 flex items-center gap-2">
        🎁 You’ll earn ₹{rewards} (5%) in Rewards
      </div>

      {/* Payment Options */}
      <div className="mt-5">
        <h3 className="font-semibold text-gray-800 mb-2">Payment Options</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>💳 Credit / Debit Card</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="netbanking"
              checked={paymentMethod === "netbanking"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>🏦 Net Banking</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="qr"
              checked={paymentMethod === "qr"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>📱 QR Payment</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span>💵 Cash on Delivery</span>
          </label>
        </div>

        {/* QR Image */}
        {paymentMethod === "qr" && (
          <div className="mt-4 flex flex-col items-center">
            <img
              src={qrImage}
              alt="QR Code Payment"
              className="w-32 h-32 border rounded-lg shadow-sm"
            />
            <p className="text-xs text-gray-600 mt-2">
              Scan this QR to complete your payment.
            </p>
          </div>
        )}
      </div>

      <button
        className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-all"
      >
        CHECKOUT NOW
      </button>
    </div>
  );
}

export default CartSummary;
