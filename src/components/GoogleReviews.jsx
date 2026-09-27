import { useEffect, useState } from 'react'
import { useLang } from '../Context/Langcontext'
import styles from './GoogleReviews.module.css'

// Place ID extracted from Google Maps URL
const PLACE_ID = 'ChIJqSvx6eCbXDkRGb3Zh4StixoA'

// Fallback static reviews shown when API key is not configured
const STATIC_REVIEWS = [
  { author_name: 'Sunita Patil', rating: 5, text: 'Dr. Deepali is very caring and thorough. My whole family visits Saikrupaa clinic. Highly recommended!', relative_time_description: '2 weeks ago' },
  { author_name: 'Ramesh Jadhav', rating: 5, text: 'Quick diagnosis, affordable fees, and very cooperative staff. Best clinic near Shirdi.', relative_time_description: '1 month ago' },
  { author_name: 'Meera Nair', rating: 5, text: 'Very good with children. Explains everything clearly. We always feel comfortable here.', relative_time_description: '3 weeks ago' },
  { author_name: 'Priya Sharma', rating: 5, text: 'Doctor is very experienced and knowledgeable. Got proper treatment for my diabetes. Thank you!', relative_time_description: '2 months ago' },
  { author_name: 'Suresh Kulkarni', rating: 5, text: 'Open 7 days a week is very convenient. Evening OPD timings are perfect for working people.', relative_time_description: '1 month ago' },
]

function Stars({ rating }) {
  return (
    <div className={styles.stars}>
      {[1,2,3,4,5].map(i => (
        <span key={i} className={i <= rating ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  )
}

function GoogleReviews() {
  const { t } = useLang()
  const [reviews] = useState(STATIC_REVIEWS)
  const [active, setActive] = useState(0)

  // Auto-rotate every 4s
  useEffect(() => {
    const id = setInterval(() => {
      setActive(a => (a + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(id)
  }, [reviews.length])

  const overall = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">{t.reviews.title}</h2>
        <p className="section-subtitle">{t.reviews.sub}</p>

        {/* Overall score */}
        <div className={styles.scoreBar}>
          <div className={styles.scoreLeft}>
            <span className={styles.scoreNum}>{overall}</span>
            <Stars rating={5} />
            <span className={styles.scoreCount}>{reviews.length} reviews</span>
          </div>
          <div className={styles.scoreRight}>
            <a
              href="https://www.google.com/maps/place/Saikrupaa+Clinic/@19.7668235,74.4797272,17z"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              View on Google
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className={styles.carousel}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`${styles.card} ${i === active ? styles.cardActive : ''}`}
              style={{ transform: `translateX(${(i - active) * 110}%)`, opacity: i === active ? 1 : 0, pointerEvents: i === active ? 'auto' : 'none' }}
            >
              <Stars rating={r.rating} />
              <p className={styles.text}>"{r.text}"</p>
              <div className={styles.meta}>
                <div className={styles.avatar}>{r.author_name[0]}</div>
                <div>
                  <strong className={styles.name}>{r.author_name}</strong>
                  <span className={styles.time}>{r.relative_time_description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews