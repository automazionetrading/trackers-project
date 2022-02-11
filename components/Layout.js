import NavBar from './NavBar'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="main-container">
        {children}
        <Footer />
      </div>
      <Toaster />
    </>
  );
}