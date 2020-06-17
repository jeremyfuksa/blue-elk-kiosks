import getReactWithCX from 'react-cx';
import { Link } from 'react-router-dom';
import logo from './micosay-logo-color.svg';
import styles from './Menu.module.scss';

const React = getReactWithCX(styles);

const Menu = () => (
  <div cx='main-menu'>
    <header>
      <img src={logo} alt='logo' />
      <h1>Kiosk Main Menu</h1>
    </header>
    <nav>
      <ul>
        <li>
          <Link to='/tribal-guardians'>Blue Elk Tribal Guardian Roll</Link>
        </li>
        <li>
          <Link to='/test-slides'>Test Slide Show</Link>
        </li>
      </ul>
    </nav>
    <footer>
      <p>Questions? Support? Contact the developer.<br/>Jeremy Fuksa • <Link to='mailto:hello@orangefla.me'>hello@orangefla.me</Link> • (816) 223-7565</p>
    </footer>
  </div>
);

export default Menu;