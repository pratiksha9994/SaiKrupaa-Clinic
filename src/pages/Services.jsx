import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const services = [
  {
    icon: '🩺',
    title: 'General Consultation',
    desc: 'Expert diagnosis and personalised treatment for fever, cold, infections, body pain, headaches, and all common illnesses. Dr. Deepali takes time to listen and explain your condition clearly.',
    points: ['Fever & viral infections', 'Cold, cough & throat infections', 'Headache & body pain', 'Digestive issues & acidity'],
  },
  {
    icon: '👶',
    title: 'Child Care',
    desc: 'Specialised care for infants and children from birth through adolescence. Growth monitoring, illness treatment, and nutritional guidance tailored for young patients.',
    points: ['Newborn & infant care', 'Growth & development monitoring', 'Childhood fever & infections', 'Nutritional & dietary guidance'],
  },
  {
    icon: '💉',
    title: 'Vaccinations',
    desc: 'Complete immunisation programs following the national immunisation schedule for children, and travel or adult vaccines as required. We maintain proper cold chain protocols.',
    points: ['Childhood immunisation schedule', 'Booster doses', 'Adult & travel vaccines', 'Vaccine records maintained'],
  },
  {
    icon: '❤️',
    title: 'BP & Diabetes Care',
    desc: 'Ongoing management and monitoring of hypertension, diabetes, and related lifestyle diseases. Regular follow-ups to keep your numbers in check and avoid complications.',
    points: ['Blood pressure monitoring', 'Blood sugar management', 'Lifestyle & diet counselling', 'Medication review & adjustment'],
  },
  {
    icon: '🩸',
    title: 'Minor Procedures',
    desc: 'On-site casualty and procedure services so you don\'t need to visit a hospital for minor emergencies. Handled with full care and sterilised equipment.',
    points: ['Wound dressing & sutures', 'Injections & IV fluids', 'Nebulisation', 'Minor casualty care'],
  },
  {
    icon: '🏠',
    title: 'Preventive Health Check',
    desc: 'Routine wellness check-ups for the whole family to catch problems early. We provide personalised health screening plans and lifestyle advice.',
    points: ['Full-body health screening', 'Chronic disease risk assessment', 'Lifestyle & wellness advice', 'Health record maintenance'],
  },
]

function Services() {
  return (
    <div>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Our Services</h1>
          <p className={styles.pageSubtitle}>
            Comprehensive Homoeopathic &amp; general healthcare for every member of your family — from newborns to seniors.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesList}>
            {services.map((s, i) => (
              <div key={s.title} className={`${styles.serviceRow} ${i % 2 === 1 ? styles.serviceRowAlt : ''}`}>
                <div className={styles.serviceIconWrap}>
                  <span className={styles.serviceIcon}>{s.icon}</span>
                </div>
                <div className={styles.serviceContent}>
                  <h2 className={styles.serviceTitle}>{s.title}</h2>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <ul className={styles.servicePoints}>
                    {s.points.map(p => (
                      <li key={p}><span className={styles.tick}>✓</span> {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Need a Consultation?</h2>
          <p>Walk in during OPD hours or book an appointment in advance.</p>
          <Link to="/appointment" className="btn btn-primary" style={{background:'#fff', color:'var(--primary)'}}>
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services