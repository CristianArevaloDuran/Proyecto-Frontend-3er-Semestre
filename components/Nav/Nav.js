import './Nav.css'
import '../../generalStyles/styles.css'
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="Nav">
      <div className='gradient-background'>
        <div className='blur-background'>
          <div className='logo'>
            <Link href='/'>
              <h1>Articles.</h1>
            </Link>
          </div>
          <div className='nav-links'>
            <ul>
              <li>
                <Link href='/'>Categorias</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}