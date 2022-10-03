import Footer from "./Footer";
import Header from "./Header";
function DefaultLayout({ children }) {
  return (
    <>
      <Header />

      <div className="content">{children}</div>

      <Footer />
    </>
  );
}

export default DefaultLayout;
