import NavBar from './NavBar'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <NavBar />
        {children}
        <Footer />
        <Toaster />
      </div>
    </>
  );
}