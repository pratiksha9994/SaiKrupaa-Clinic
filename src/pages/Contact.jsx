import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from './Contact.module.css'

// ─── EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID  = 'service_gvs9sks'
const EMAILJS_TEMPLATE_ID = 'template_djb5kdc'
const EMAILJS_PUBLIC_KEY  = 'exkCjuReK59ww4swE'
// ──────────────────────────────────────────────────────────────────────────────

// ─── Replace with your actual reCAPTCHA Site Key from google.com/recaptcha/admin ──
const RECAPTCHA_SITE_KEY = '6Lc4iKotAAAAAAWyqfy4lsYFUpOy2LLm7nSCSFCS'
// ──────────────────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '', website: '' })
  const [status, setStatus] = useState('idle')
  const [captchaToken, setCaptchaToken] = useState(null)
  const [captchaError, setCaptchaError] = useState(false)
  const captchaRef = useRef(null)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // Honeypot check: real users never fill this hidden field, bots often do.
    // Silently pretend success so bots don't learn to look for it.
    if (form.website) {
      setStatus('success')
      setForm({ name: '', phone: '', message: '', website: '' })
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
        { from_name: form.name, from_phone: form.phone, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', phone: '', message: '', website: '' })
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
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            We'd love to hear from you. Send us a message or visit us during OPD hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>

            {/* Contact Details */}
            <div className={styles.details}>
              <h2 className={styles.detailsTitle}>Get in Touch</h2>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <strong>Address</strong>
                  <p>Saish Corner, Opp. Pushpanjali Hotel,<br />Pimpalwadi Road, Shirdi, Maharashtra</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>🕐</div>
                <div>
                  <strong>Clinic Hours</strong>
                  <p>Morning: 10:00 AM – 1:00 PM<br />Evening: 5:00 PM – 9:00 PM<br />Open Monday to Sunday</p>
                </div>
              </div>


              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:9588633596" style={{color:'inherit'}}>95886 33596</a></p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:saikrupaaclinic88@gmail.com" style={{color:'inherit'}}>saikrupaaclinic88@gmail.com</a></p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📸</div>
                <div>
                  <strong>Instagram</strong>
                  <p><a href="https://instagram.com/saikrupaa.clinic" target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>@saikrupaa.clinic</a></p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>👩‍⚕️</div>
                <div>
                  <strong>Doctor</strong>
                  <p>Dr. Deepali A. Bhalerao<br />BHMS, PGDEMS, ECA (MUHS, Nashik)</p>
                </div>
              </div>

              {/* Map embed */}
              <div className={styles.mapWrap}>
                <iframe
                  title="Saikrupaa Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.7252728873495!2d74.4797272!3d19.766823499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc5be0e9f12ba9%3A0x5a8badb487d9bd19!2sSaikrupaa%20Clinic!5e0!3m2!1sen!2sin!4v1788674210166!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  style={{border:0, borderRadius:'var(--radius)'}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://share.google/ZzCNofGnFKl457IC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{display:'block', marginTop:'12px', textAlign:'center'}}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Message Form */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Send a Message</h2>
              {status === 'success' ? (
                <div className={styles.successBox}>
                  <span>✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                  <button className="btn btn-primary" onClick={() => setStatus('idle')} style={{marginTop:'16px'}}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
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

                  <div className={styles.field}>
                    <label>Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" />
                  </div>
                  <div className={styles.field}>
                    <label>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required placeholder="e.g. 98765 43210" type="tel" />
                  </div>
                  <div className={styles.field}>
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="How can we help you?" />
                  </div>
                  {status === 'error' && (
                    <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
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
                  <button type="submit" className="btn btn-primary" style={{width:'100%'}} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact