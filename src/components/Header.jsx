import { useState } from 'react';
import styles from '../scss/components/header.module.scss';

import {Link} from 'react-router-dom';

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMenu,
} from 'react-icons/ai';

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  

return(
  <header>
    <div className={styles.logoContainer}>
      <p>&lt;Jussara<strong>Dev</strong>/&gt;</p>
    </div>
  <nav className={menuOpen ? styles.open: ''}>
    <ul>
      <li className={styles.navItem}><Link to='/'>Home</Link></li>
      <li className={styles.navItem}><Link to='/about'>About</Link></li>
      <li className={styles.navItem}><Link to='/skills'>Skills</Link></li>
      <li className={styles.navItem}><Link to='/projects'>Projects</Link></li>
      <li className={styles.navItem}><Link to='/contact'>Contact</Link></li>
      <span className={styles.line}></span>
      <div className={styles.redes}>
      <li><a href="https://github.com/jussaraalves" target='_blank'><AiFillGithub /></a></li>
      <li><a href="https://www.linkedin.com/in/jussaraalvesdev/" target='_blank'><AiFillLinkedin /></a></li>
      <li><a href="https://www.instagram.com/jucs.tsx/" target='_blank'><AiFillInstagram/></a></li>
      <li><a href="https://twitter.com/jucsalves_" target='_blank'><AiFillTwitterCircle/></a></li>  
      </div>
    </ul>
    </nav>
    <div className={styles.hamburger} onClick={toggleMenu}>
      <AiOutlineMenu/>
    </div>
  </header>
)
}