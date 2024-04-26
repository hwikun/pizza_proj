import { Route, Routes } from "react-router-dom";
import {
  PizzaList,
  PizzaView,
  Login,
  Join,
  ShoppingCart,
  EventList,
  BranchList,
  AdminMenu,
  AdminGroup,
  Contact,
  NotFound,
} from "./pages";
import Test from "./pages/Test";
import EventView from "./pages/EventView";

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
      <Route path="/admin" element={<AdminMenu />} />
      <Route path="/admin/menu" element={<AdminMenu />} />
      <Route path="/admin/group" element={<AdminGroup />} />
      <Route path="/join" element={<Join />} />
      <Route path="/test" element={<Test />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
