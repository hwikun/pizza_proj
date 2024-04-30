import { Route, Routes } from "react-router-dom";
import {
  PizzaList,
  PizzaView,
  Join,
  ShoppingCart,
  EventList,
  EventView,
  BranchList,
  Contact,
  NotFound,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PizzaList />} />
      <Route path="/pizza" element={<PizzaList />} />
      <Route path="/pizza/:id" element={<PizzaView />} />
      <Route path="/branch" element={<BranchList />} />
      <Route path="/branch/:id" element={<BranchList />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/event" element={<EventList />} />
      <Route path="/event/:id" element={<EventView />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/join" element={<Join />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
