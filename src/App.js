import { Route, Routes } from "react-router-dom";
import {
  PizzaList,
  PizzaView,
  Join,
  ShoppingCart,
  EventList,
  EventView,
  NotFound,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PizzaList />} />
      <Route path="/pizza" element={<PizzaList />} />
      <Route path="/pizza/:id" element={<PizzaView />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/event" element={<EventList />} />
      <Route path="/event/:id" element={<EventView />} />
      <Route path="/join" element={<Join />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
