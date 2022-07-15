import Header from "../components/header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <div> {children} </div>

      <Footer />
    </>
  );
}
