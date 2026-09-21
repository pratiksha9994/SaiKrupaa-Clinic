import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import styles from './Footer.module.css'

function Footer() {
  const { t } = useLang()
  const f = t.footer
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>✚</span>
            Saikrupaa Clinic
          </div>
          <p className={styles.tagline}>{f.tagline}</p>
          <p className={styles.sub}>{f.sub}</p>
          <div className={styles.contactList}>
            <a href="tel:9588633596" className={styles.contactLink}>📞 95886 33596</a>
            <a href="mailto:saikrupaaclinic88@gmail.com" className={styles.contactLink}>✉ saikrupaaclinic88@gmail.com</a>
            <a href="https://instagram.com/saikrupaa.clinic" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>📸 @saikrupaa.clinic</a>
          </div>
        </div>

        <div>
          <h4 className={styles.colTitle}>{f.quickLinks}</h4>
          <ul className={styles.linkList}>
            {f.links.map(l => (
              <li key={l.path}>
                <Link to={l.path} className={styles.footerLink}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.colTitle}>{f.hours}</h4>
          <div className={styles.hours}>
            <div className={styles.hourRow}><span>{f.morning}</span><span>10:00 AM – 1:00 PM</span></div>
            <div className={styles.hourRow}><span>{f.evening}</span><span>5:00 PM – 9:00 PM</span></div>
            <div className={styles.hourRow}><span>{f.days}</span><span>{f.open}</span></div>
          </div>
          <p className={styles.address}>📍 {f.address}</p>
          <a href="https://share.google/ZzCNofGnFKl457IC8" target="_blank" rel="noopener noreferrer" className={styles.dirBtn}>
            {f.directions}
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {year} {f.copy}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer