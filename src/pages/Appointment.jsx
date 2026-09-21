import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from './Appointment.module.css'

// ─── EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID  = 'service_gvs9sks'
const EMAILJS_TEMPLATE_ID = 'template_ezhufmd'
const EMAILJS_PUBLIC_KEY  = 'exkCjuReK59ww4swE'
// ──────────────────────────────────────────────────────────────────────────────

// ─── Replace with your actual reCAPTCHA Site Key from google.com/recaptcha/admin ──
const RECAPTCHA_SITE_KEY = '6Lc4iKotAAAAAAWyqfy4lsYFUpOy2LLm7nSCSFCS'
// ──────────────────────────────────────────────────────────────────────────────

const slots = ['Morning OPD (10 AM – 1 PM)', 'Evening OPD (5 PM – 9 PM)']
const reasons = ['General Consultation', 'Child Care', 'Vaccination', 'BP / Diabetes Follow-up', 'Minor Procedure', 'Preventive Health Check', 'Other']

function Appointment() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', slot: '', reason: '', notes: '', website: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [captchaToken, setCaptchaToken] = useState(null)
  const [captchaError, setCaptchaError] = useState(false)
  const captchaRef = useRef(null)

  const today = new Date().toISOString().split('T')[0]

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // Honeypot check: real users never fill this hidden field, bots often do.
    // Silently pretend success so bots don't learn to look for it.
    if (form.website) {
      setStatus('success')
      setForm({ name: '', phone: '', date: '', slot: '', reason: '', notes: '', website: '' })
      return
    }

    // reCAPTCHA check: block submission until the widget confirms a human.
    if (!captchaToken) {
      setCaptchaError(true)
      return
    }
    setCaptchaError(false)

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          patient_name:  form.name,
          patient_phone: form.phone,
          appt_date:     form.date,
          appt_slot:     form.slot,
          appt_reason:   form.reason,
          patient_notes: form.notes || 'None',
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', phone: '', date: '', slot: '', reason: '', notes: '', website: '' })
      captchaRef.current?.reset()
      setCaptchaToken(null)
    } catch {
      setStatus('error')
      captchaRef.current?.reset()
      setCaptchaToken(null)
    }
  }

  return (
    <div>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Book an Appointment</h1>
          <p className={styles.pageSubtitle}>
            Fill in the form below and we'll confirm your slot. You can also walk in during OPD hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>

            {/* Form */}
            <div className={styles.formCard}>
              {status === 'success' ? (
                <div className={styles.successBox}>
                  <span className={styles.successIcon}>✅</span>
                  <h2>Appointment Request Sent!</h2>
                  <p>Thank you, we'll get in touch to confirm your slot. See you at Saikrupaa Clinic!</p>
                  <button className="btn btn-primary" onClick={() => setStatus('idle')} style={{marginTop:'20px'}}>
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2 className={styles.formTitle}>Patient Details</h2>

                  {/* Honeypot field — hidden from real users via CSS, bots often fill it anyway */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex="-1"
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                  />

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Ramesh Jadhav" />
                    </div>
                    <div className={styles.field}>
                      <label>Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="e.g. 98765 43210" type="tel" />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label>Preferred Date *</label>
                      <input name="date" value={form.date} onChange={handleChange} required type="date" min={today} />
                    </div>
                    <div className={styles.field}>
                      <label>Preferred Time Slot *</label>
                      <select name="slot" value={form.slot} onChange={handleChange} required>
                        <option value="">Select a slot</option>
                        {slots.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label>Reason for Visit *</label>
                    <select name="reason" value={form.reason} onChange={handleChange} required>
                      <option value="">Select reason</option>
                      {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label>Additional Notes <span className={styles.optional}>(optional)</span></label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Any symptoms, concerns, or previous history to mention..." />
                  </div>

                  {status === 'error' && (
                    <p className={styles.errorMsg}>Something went wrong. Please try calling us directly.</p>
                  )}

                  <div style={{ margin: '16px 0' }}>
                    <ReCAPTCHA
                      ref={captchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      theme="dark"
                      onChange={(token) => { setCaptchaToken(token); setCaptchaError(false) }}
                      onExpired={() => setCaptchaToken(null)}
                    />
                    {captchaError && (
                      <p className={styles.errorMsg}>Please verify you're not a robot before submitting.</p>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary" style={{width:'100%', marginTop:'8px'}} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Request Appointment →'}
                  </button>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h3>Clinic Hours</h3>
                <div className={styles.infoRow}><span>🌅</span><div><strong>Morning OPD</strong><span>10:00 AM – 1:00 PM</span></div></div>
                <div className={styles.infoRow}><span>🌆</span><div><strong>Evening OPD</strong><span>5:00 PM – 9:00 PM</span></div></div>
                <div className={styles.infoRow}><span>📅</span><div><strong>Days Open</strong><span>Monday to Sunday</span></div></div>
              </div>

              <div className={styles.infoCard}>
                <h3>Location</h3>
                <div className={styles.infoRow}><span>📍</span><div><span>Saish Corner, Opp. Pushpanjali Hotel, Pimpalwadi Road, Shirdi</span></div></div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=19.766823499999997,74.4797272" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop:'14px', display:'block', textAlign:'center'}}>
                  Get Directions →
                </a>
              </div>

              <div className={styles.walkInNote}>
                <span>💡</span>
                <p>Walk-ins are welcome during OPD hours. No prior appointment needed for routine consultations.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointment