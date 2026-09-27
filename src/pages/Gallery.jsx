import { useState } from 'react'
import { useLang } from '../Context/Langcontext'
import styles from './Gallery.module.css'

// Placeholder photos using Unsplash medical/clinic images
// Replace src values with real clinic photos when available
const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80', alt: 'Clinic reception area', caption: 'Reception & Waiting Area' },
  { id: 2, src: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=600&q=80', alt: 'Consultation room', caption: 'Consultation Room' },
  { id: 3, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80', alt: 'Medical equipment', caption: 'Medical Equipment' },
  { id: 4, src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', alt: 'Patient care', caption: 'Patient Care' },
  { id: 5, src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80', alt: 'Child care', caption: 'Child Care Services' },
  { id: 6, src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80', alt: 'Vaccination', caption: 'Vaccination Services' },
  { id: 7, src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80', alt: 'Clinic exterior', caption: 'Clinic Exterior' },
  { id: 8, src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80', alt: 'Doctor consultation', caption: 'Doctor Consultation' },
]

function Gallery() {
  const { t } = useLang()
  const [lightbox, setLightbox] = useState(null)

  function openLightbox(photo) { setLightbox(photo) }
  function closeLightbox() { setLightbox(null) }
  function prev() { setLightbox(photos[(photos.indexOf(lightbox) - 1 + photos.length) % photos.length]) }
  function next() { setLightbox(photos[(photos.indexOf(lightbox) + 1) % photos.length]) }

  return (
    <div>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>{t.gallery.title}</h1>
          <p className={styles.pageSubtitle}>{t.gallery.sub}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className={styles.placeholderNote}>
            📸 These are placeholder images. Replace them with real clinic photos by updating the <code>src</code> values in <code>src/pages/Gallery.jsx</code>.
          </p>
          <div className={styles.grid}>
            {photos.map(photo => (
              <div key={photo.id} className={styles.item} onClick={() => openLightbox(photo)}>
                <img src={photo.src} alt={photo.alt} className={styles.img} loading="lazy" />
                <div className={styles.overlay}>
                  <span className={styles.overlayIcon}>🔍</span>
                  <span className={styles.caption}>{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.lbClose} onClick={closeLightbox}>✕</button>
          <button className={styles.lbPrev} onClick={e => { e.stopPropagation(); prev() }}>‹</button>
          <div className={styles.lbContent} onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className={styles.lbImg} />
            <p className={styles.lbCaption}>{lightbox.caption}</p>
          </div>
          <button className={styles.lbNext} onClick={e => { e.stopPropagation(); next() }}>›</button>
        </div>
      )}
    </div>
  )
}

export default Gallery