import getReactWithCX from 'react-cx';
import { Link } from 'react-router-dom';
import packageJson from '../../../package.json';
import logo from '../../micosay-logo-color.svg';
import styles from './Menu.module.scss';

const React = getReactWithCX(styles);

const Menu = () => (
  <div cx='main-menu'>
    <header>
      <img src={logo} alt='logo' />
      <div cx='title'>
        <h1>TV Main Menu</h1>
        <p>Version {packageJson.version} | Developed by Honorary Warrior Jesting Drummer Fox</p>
      </div>
    </header>
    <nav>
      <div cx='nav-group'>
        <h2>Guardian Rolls</h2>
        <ul>
          <li>
            <Link to='/founder-guardians'>Founder Guardian Roll</Link>
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
        </ul>
      </div>
      <div cx='nav-group'>
        <h2>Special Displays</h2>
        <ul>
          <li>
            <Link to='/book-of-memories'>Book of Memories</Link>
          </li>
          <li>
            <Link to='/elevations'>Elevation Roll for Current Session</Link>
          </li>
          {/* <li>
            <Link to='/photo-slide-show'>Photo Slide Show</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  </div>
);

export default Menu;