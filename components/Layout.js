import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}