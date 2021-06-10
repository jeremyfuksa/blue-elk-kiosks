import getReactWithCX from 'react-cx';
import { Link } from 'react-router-dom';
import logo from './micosay-logo-color.svg';
import styles from './Menu.module.scss';

const React = getReactWithCX(styles);

const Menu = () => (
  <div cx='main-menu'>
    <header>
      <img src={logo} alt='logo' />
      <h1>TV Main Menu</h1>
    </header>
    <nav>
      <ul>
        <li>
          <Link to='/tribal-guardians'>Blue Elk Tribal Guardian Roll</Link>
        </li>
        <li>
          <Link to='/lonebear-guardians'>Lone Bear Guardian Roll</Link>
        </li>
        <li>
          <Link to='/sheshebe-guardians'>She-She-Be Guardian Roll</Link>
        </li>
        <li>
          <Link to='/lifetime-guardians'>Lifetime Guardian Roll</Link>
        </li>
        <li>
          <Link to='/elevations'>Session Elevations Roll</Link>
        </li>
        {/* <li>
          <Link to='/photo-slide-show'>Photo Slide Show</Link>
        </li> */}
      </ul>
    </nav>
    {/* <footer>
      <p>Questions? Support? Contact the developer.<br/>Jeremy Fuksa • <Link to='mailto:advisor@scouting247.org'>advisor@scouting247.org</Link> • (816) 223-7565</p>
    </footer> */}
  </div>
);

export default Menu;