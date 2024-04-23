import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
