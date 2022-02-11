import Link from 'next/link';
import * as Icon from 'react-feather';

export default function Navbar() {
  return (
    <navbar className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/"><a className="nav-link"><Icon.Home className="nav-icon" /><span className="link-text">Home</span></a></Link>
        </li>
        <li className="nav-item">
          <Link href="/build"><a className="nav-link"><Icon.Tool className="nav-icon" /><span className="link-text">Build</span></a></Link>
        </li>
        <li className="nav-item">
          <Link href="/inspiration"><a className="nav-link"> <Icon.Sun className="nav-icon" /><span className="link-text">Inspiration</span></a></Link>
        </li>
        <li className="nav-item">
          <Link href="/resources"><a className="nav-link"><Icon.BookOpen className="nav-icon" /><span className="link-text">Resources</span></a></Link>
        </li>
        <li className="nav-item">
          <Link href="/about"><a className="nav-link"><Icon.AtSign className="nav-icon" /><span className="link-text">About</span></a></Link>
        </li>
        <li className="nav-item">
          <Link href="/ks"><a className="nav-link"><Icon.Moon className="nav-icon" /><span className="link-text">KS</span></a></Link>
        </li>
      </ul>
    </navbar>
  );
}