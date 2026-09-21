import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import GoogleReviews from '../components/GoogleReviews'
import styles from './Home.module.css'

function Home() {
  const { t } = useLang()
  const s = t.services
  const d = t.doctor
  const tm = t.timings
  const h = t.hero
  const cta = t.cta

  return (
    <div>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={styles.heroBadge}>✦ {h.badge}</span>
            <h1 className={styles.heroTitle}>
              {h.title1} <span className={styles.heroAccent}>{h.title2}</span>
            </h1>
            <p className={styles.heroTagline}>{h.tagline}</p>
            <p className={styles.heroDesc}>{h.desc}</p>
            <div className={styles.heroBtns}>
              <Link to="/appointment" className="btn btn-primary">{h.btn1}</Link>
              <Link to="/services" className="btn btn-outline" style={{color:'rgba(255,255,255,0.85)', borderColor:'rgba(255,255,255,0.3)'}}>{h.btn2}</Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>BHMS</span>
                <span className={styles.statLabel}>{h.stat1}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>PGDEMS</span>
                <span className={styles.statLabel}>{h.stat2}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>7 {t.timings.days.split(' ')[0] === 'Monday' ? 'days' : 'दिन'}</span>
                <span className={styles.statLabel}>{h.stat3}</span>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardInner}>
              <div className={styles.heroCardIcon}>✚</div>
              <h2>{h.cardTitle}</h2>
              <p>{h.cardSub}</p>
              <div className={styles.heroCardRow}>
                <span>🌅</span>
                <div><strong>{h.morning}</strong><span>10:00 AM – 1:00 PM</span></div>
              </div>
              <div className={styles.heroCardRow}>
                <span>🌆</span>
                <div><strong>{h.evening}</strong><span>5:00 PM – 9:00 PM</span></div>
              </div>
              <div className={styles.heroCardRow}>
                <span>📞</span>
                <div><strong>{h.phone}</strong><span>95886 33596</span></div>
              </div>
              <div className={styles.heroCardRow}>
                <span>📍</span>
                <div><strong>{h.address}</strong><span>{h.addressVal}</span></div>
              </div>
              <a href="https://share.google/ZzCNofGnFKl457IC8" target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.heroCardBtn}`}>
                {h.directions}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{s.title}</h2>
          <p className="section-subtitle">{s.sub}</p>
          <div className={styles.servicesGrid}>
            {s.items.map((item) => (
              <div key={item.title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{item.icon}</div>
                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.servicesCta}>
            <Link to="/services" className="btn btn-outline">{s.viewAll}</Link>
          </div>
        </div>
      </section>

      {/* ── Doctor ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{d.title}</h2>
          <p className="section-subtitle">{d.sub}</p>
          <div className={styles.doctorSingle}>
            <div className={styles.doctorAvatar}>DB</div>
            <div className={styles.doctorInfo}>
              <h3 className={styles.doctorName}>{d.name}</h3>
              <p className={styles.doctorDeg}>{d.deg}</p>
              <p className={styles.doctorExp}>{d.exp}</p>
              <div className={styles.doctorTags}>
                {d.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
              </div>
              <Link to="/appointment" className="btn btn-primary" style={{marginTop:'22px', display:'inline-block'}}>
                {d.bookBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timings ── */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{tm.title}</h2>
          <p className="section-subtitle">{tm.sub}</p>
          <div className={styles.timingsGrid}>
            <div className={styles.timingCard}>
              <div className={styles.timingIcon}>🌅</div>
              <h3>{tm.morning}</h3>
              <p className={styles.timingTime}>10:00 AM – 1:00 PM</p>
              <p className={styles.timingDays}>{tm.days}</p>
            </div>
            <div className={styles.timingCard}>
              <div className={styles.timingIcon}>🌆</div>
              <h3>{tm.evening}</h3>
              <p className={styles.timingTime}>5:00 PM – 9:00 PM</p>
              <p className={styles.timingDays}>{tm.days}</p>
            </div>
            <div className={styles.timingCard}>
              <div className={styles.timingIcon}>📍</div>
              <h3>{tm.location}</h3>
              <p className={styles.timingTime}>Saish Corner</p>
              <p className={styles.timingDays}>{tm.addr}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <GoogleReviews />

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2>{cta.title}</h2>
          <p>{cta.sub}</p>
          <div style={{display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap'}}>
            <Link to="/appointment" className="btn btn-primary" style={{background:'#fff', color:'var(--teal)'}}>
              {cta.btn1}
            </Link>
            <a href="tel:9588633596" className="btn btn-outline" style={{borderColor:'rgba(255,255,255,0.5)', color:'#fff'}}>
              {cta.btn2}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home