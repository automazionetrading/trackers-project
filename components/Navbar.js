import Link from 'next/link';

export default function Navbar() {
  return (
    <navbar className="navbar">
      <ul>
        <li>
          <Link href="/"><a className="btn">Home</a></Link>
        </li>
        <li>
          <Link href="/build"><a className="btn">Build</a></Link>
        </li>
        <li>
          <Link href="/about"><a className="btn">About</a></Link>
        </li>
        <li>
          <Link href="/contact"><a className="btn">Contact</a></Link>
        </li>
        <li>
          <Link href="/ks"><a className="btn">STYLE KITCHEN SIKN</a></Link>
        </li>
      </ul>
    </navbar>
  );
}