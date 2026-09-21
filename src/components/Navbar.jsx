import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import styles from './Navbar.module.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { dark, toggle } = useTheme()
  const { lang, setLanguage, t } = useLang()

  const links = [
    { path: '/',            label: t.nav.home },
    { path: '/services',   label: t.nav.services },
    { path: '/doctors',    label: t.nav.doctor },
    { path: '/gallery',    label: lang === 'en' ? 'Gallery' : lang === 'hi' ? 'गैलरी' : 'गॅलरी' },
    { path: '/contact',    label: t.nav.contact },
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>✚</span>
          Saikrupaa Clinic
        </Link>

        <ul className={styles.links}>
          {links.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${styles.link} ${location.pathname === link.path ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Language switcher */}
          <div className={styles.langSwitcher}>
            {['en','hi','mr'].map(l => (
              <button
                key={l}
                className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
                onClick={() => setLanguage(l)}
              >
                {l === 'en' ? 'EN' : l === 'hi' ? 'हि' : 'म'}
              </button>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button className={styles.themeBtn} onClick={toggle} title="Toggle dark mode">
            {dark ? '☀️' : '🌙'}
          </button>

          <Link to="/appointment" className={styles.bookBtn}>
            {t.nav.book}
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barTop : styles.bar}></span>
          <span className={menuOpen ? styles.barMid : styles.bar}></span>
          <span className={menuOpen ? styles.barBot : styles.bar}></span>
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.mobileLink} ${location.pathname === link.path ? styles.activeMobile : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileControls}>
            <div className={styles.langSwitcher}>
              {['en','hi','mr'].map(l => (
                <button
                  key={l}
                  className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
                  onClick={() => { setLanguage(l); setMenuOpen(false) }}
                >
                  {l === 'en' ? 'EN' : l === 'hi' ? 'हि' : 'म'}
                </button>
              ))}
            </div>
            <button className={styles.themeBtn} onClick={() => { toggle(); setMenuOpen(false) }}>
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
          <Link to="/appointment" className={styles.mobileBook} onClick={() => setMenuOpen(false)}>
            {t.nav.book}
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar