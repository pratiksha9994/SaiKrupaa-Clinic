import { Link } from 'react-router-dom'
import styles from './Doctors.module.css'

const expertise = [
  { icon: '🩺', label: 'General Consultation' },
  { icon: '👶', label: 'Child Care' },
  { icon: '🚑', label: 'Casualty & Emergency' },
  { icon: '💉', label: 'Vaccinations' },
  { icon: '❤️', label: 'BP & Diabetes' },
  { icon: '🌿', label: 'Homoeopathy' },
]

const timeline = [
  { year: 'BHMS', label: 'Bachelor of Homoeopathic Medicine & Surgery', detail: 'Completed full 5.5-year degree including internship in Homoeopathic medicine and surgery.' },
  { year: '5–7 yrs', label: 'Casualty & General Practice', detail: 'Extensive experience in casualty management, emergency care, and outpatient general practice.' },
  { year: 'Present', label: 'Founder, Saikrupaa Clinic · Shirdi', detail: 'Running Saikrupa General & Family Clinic at Saish Corner, Pimpalwadi Road, Shirdi — serving families 7 days a week.' },
]

function Doctors() {
  return (
    <div>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Our Doctor</h1>
          <p className={styles.pageSubtitle}>
            Meet the dedicated physician behind Saikrupaa Clinic.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="section">
        <div className="container">
          <div className={styles.profile}>
            <div className={styles.profileLeft}>
              <div className={styles.avatar}>DB</div>
              <div className={styles.badge}>✚ Available 7 Days</div>
            </div>
            <div className={styles.profileRight}>
              <h2 className={styles.name}>Dr. Deepali A. Bhalerao</h2>
              <p className={styles.degree}>BHMS, PGDEMS, ECA (MUHS, Nashik)</p>
              <p className={styles.exp}>Consulting Physician &amp; General Surgeon</p>
              <p className={styles.bio}>
                Dr. Deepali A. Bhalerao is a qualified Homoeopathic physician dedicated to providing
                compassionate, patient-centred care to families in and around Shirdi. With years of
                hands-on experience in casualty settings and general OPD practice, she brings both
                clinical skill and genuine warmth to every consultation.
              </p>
              <p className={styles.bio}>
                She believes in taking the time to understand each patient's complete health picture —
                not just the presenting complaint — and explaining diagnoses and treatment plans in
                simple, clear language so patients feel informed and confident.
              </p>
              <div className={styles.expertiseTags}>
                {expertise.map(e => (
                  <span key={e.label} className={styles.tag}>
                    {e.icon} {e.label}
                  </span>
                ))}
              </div>
              <Link to="/appointment" className="btn btn-primary" style={{marginTop: '28px', display: 'inline-block'}}>
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experience &amp; Qualifications</h2>
          <p className="section-subtitle">A journey built on dedication to patient care.</p>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{t.year}</span>
                  <h3 className={styles.timelineLabel}>{t.label}</h3>
                  <p className={styles.timelineDetail}>{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings */}
      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="section-title">Consultation Hours</h2>
          <p className="section-subtitle" style={{margin: '0 auto 40px'}}>Dr. Deepali is available at Saikrupaa Clinic 7 days a week.</p>
          <div className={styles.timingsRow}>
            <div className={styles.timingBox}>
              <span className={styles.timingEmoji}>🌅</span>
              <h3>Morning OPD</h3>
              <p>10:00 AM – 1:00 PM</p>
              <span className={styles.days}>Mon – Sun</span>
            </div>
            <div className={styles.timingBox}>
              <span className={styles.timingEmoji}>🌆</span>
              <h3>Evening OPD</h3>
              <p>5:00 PM – 9:00 PM</p>
              <span className={styles.days}>Mon – Sun</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Doctors