import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51TPRUIE73ZHNLij2l5muc5nHnZoLGqZgG5nsAGQF3Ac3hQ2o2OawmbkjKjwIXBeSVLKWQjnVwgPvm1D7MEyRTjBa00Hng4RI7a",
);

function Routing() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />

          <Route
            path="/payments"
            element={
              <ProtectedRoute msg="you must log in to pay" redirect="/auth">
                <Payment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg="you must log in to access your orders"
                redirect="/auth"
              >
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Elements>
    </Router>
  );
}

export default Routing;
