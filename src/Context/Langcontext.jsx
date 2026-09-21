import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const translations = {
  en: {
    nav: { home: 'Home', services: 'Services', doctor: 'Doctor', contact: 'Contact', book: 'Book Appointment' },
    hero: {
      badge: 'Consulting Physician & General Surgeon · Shirdi',
      title1: 'Your Health Is Our',
      title2: 'Priority',
      tagline: '"Your health is an investment, not an expense."',
      desc: 'Saikrupaa Clinic provides compassionate, affordable medical care for every member of your family. Located at Saish Corner, Pimpalwadi Road, Shirdi.',
      btn1: 'Book Appointment',
      btn2: 'Our Services',
      stat1: 'Qualified Doctor', stat2: 'Emergency Medicine', stat3: 'Open All Week',
      cardTitle: 'Saikrupaa Clinic',
      cardSub: 'Consulting Physician & General Surgeon · Shirdi',
      morning: 'Morning OPD', evening: 'Evening OPD', phone: 'Phone', address: 'Address',
      directions: 'Get Directions →',
      addressVal: 'Saish Corner, Opp. Pushpanjali Hotel, Pimpalwadi Road, Shirdi',
    },
    services: {
      title: 'Our Services',
      sub: 'Comprehensive healthcare for all ages — from routine check-ups to casualty care.',
      viewAll: 'View All Services →',
      items: [
        { icon: '🩺', title: 'General Consultation', desc: 'Expert diagnosis and treatment for fever, cold, infections, and common illnesses.' },
        { icon: '👶', title: 'Child Care', desc: 'Dedicated care for infants and children including growth monitoring and illness treatment.' },
        { icon: '💉', title: 'Vaccinations', desc: 'Complete immunisation programs for children and adults as per government schedule.' },
        { icon: '❤️', title: 'BP & Diabetes Care', desc: 'Regular monitoring and management of blood pressure, sugar levels, and lifestyle diseases.' },
        { icon: '🩸', title: 'Minor Procedures', desc: 'Wound dressing, injections, IV fluids, and minor casualty procedures handled on-site.' },
        { icon: '🏠', title: 'Preventive Health Check', desc: 'Routine check-ups, health screenings, and wellness guidance for the whole family.' },
      ],
    },
    doctor: {
      title: 'Meet Your Doctor',
      sub: 'Experienced, caring, and dedicated to your wellbeing.',
      name: 'Dr. Deepali A. Bhalerao',
      deg: 'BHMS, PGDEMS, ECA (MUHS, Nashik)',
      exp: 'Consulting Physician & General Surgeon',
      bookBtn: 'Book Appointment',
      tags: ['General Consultation','Child Care','Casualty','Vaccinations','BP & Diabetes','General Surgery'],
    },
    timings: {
      title: 'Clinic Timings',
      sub: 'We are open 7 days a week for your convenience.',
      morning: 'Morning OPD', evening: 'Evening OPD', location: 'Location',
      days: 'Monday to Sunday',
      addr: 'Opp. Pushpanjali Hotel, Pimpalwadi Road, Shirdi',
    },
    reviews: { title: 'Patient Reviews', sub: 'What our patients say about Saikrupaa Clinic on Google.' },
    gallery: { title: 'Clinic Gallery', sub: 'A peek inside Saikrupaa Clinic.' },
    cta: {
      title: 'Ready to Visit Us?',
      sub: "Book an appointment or walk in during OPD hours — we're open 7 days a week.",
      btn1: 'Book Appointment', btn2: '📞 95886 33596',
    },
    footer: {
      tagline: '"Your health is an investment, not an expense."',
      sub: 'Consulting Physician & General Surgeon · Shirdi',
      quickLinks: 'Quick Links',
      hours: 'Clinic Hours',
      morning: '🌅 Morning OPD', evening: '🌆 Evening OPD', days: '📅 Days Open',
      open: 'Mon – Sun',
      directions: 'Get Directions →',
      address: 'Saish Corner, Opp. Pushpanjali Hotel,\nPimpalwadi Road, Shirdi, Maharashtra',
      copy: 'Saikrupaa Clinic · Dr. Deepali A. Bhalerao · BHMS, PGDEMS, ECA (MUHS, Nashik)',
      links: [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/doctors', label: 'Our Doctor' },
        { path: '/appointment', label: 'Book Appointment' },
        { path: '/contact', label: 'Contact' },
      ],
    },
  },

  hi: {
    nav: { home: 'होम', services: 'सेवाएं', doctor: 'डॉक्टर', contact: 'संपर्क', book: 'अपॉइंटमेंट बुक करें' },
    hero: {
      badge: 'परामर्श चिकित्सक एवं जनरल सर्जन · शिर्डी',
      title1: 'आपका स्वास्थ्य हमारी',
      title2: 'प्राथमिकता',
      tagline: '"आपका स्वास्थ्य एक निवेश है, खर्च नहीं।"',
      desc: 'सायकृपा क्लिनिक आपके परिवार के हर सदस्य के लिए दयालु और किफायती चिकित्सा सेवा प्रदान करती है। स्थान: साईश कॉर्नर, पिंपळवाडी रोड, शिर्डी।',
      btn1: 'अपॉइंटमेंट बुक करें', btn2: 'हमारी सेवाएं',
      stat1: 'योग्य डॉक्टर', stat2: 'आपातकालीन चिकित्सा', stat3: 'सप्ताह में 7 दिन खुला',
      cardTitle: 'सायकृपा क्लिनिक',
      cardSub: 'परामर्श चिकित्सक एवं जनरल सर्जन · शिर्डी',
      morning: 'सुबह OPD', evening: 'शाम OPD', phone: 'फ़ोन', address: 'पता',
      directions: 'दिशा-निर्देश प्राप्त करें →',
      addressVal: 'साईश कॉर्नर, पुष्पांजलि होटल के सामने, पिंपळवाडी रोड, शिर्डी',
    },
    services: {
      title: 'हमारी सेवाएं',
      sub: 'हर उम्र के लिए व्यापक स्वास्थ्य सेवाएं — नियमित जांच से लेकर आपातकालीन देखभाल तक।',
      viewAll: 'सभी सेवाएं देखें →',
      items: [
        { icon: '🩺', title: 'सामान्य परामर्श', desc: 'बुखार, सर्दी, संक्रमण और सामान्य बीमारियों के लिए विशेषज्ञ निदान और उपचार।' },
        { icon: '👶', title: 'बाल देखभाल', desc: 'शिशुओं और बच्चों के लिए विशेष देखभाल जिसमें विकास निगरानी और बीमारी का उपचार शामिल है।' },
        { icon: '💉', title: 'टीकाकरण', desc: 'सरकारी कार्यक्रम के अनुसार बच्चों और वयस्कों के लिए पूर्ण टीकाकरण।' },
        { icon: '❤️', title: 'बीपी और मधुमेह देखभाल', desc: 'रक्तचाप, शुगर और जीवनशैली संबंधी बीमारियों की नियमित निगरानी।' },
        { icon: '🩸', title: 'छोटी प्रक्रियाएं', desc: 'घाव की ड्रेसिंग, इंजेक्शन, IV फ्लूइड और मामूली दुर्घटना देखभाल।' },
        { icon: '🏠', title: 'निवारक स्वास्थ्य जांच', desc: 'पूरे परिवार के लिए नियमित स्वास्थ्य जांच और कल्याण मार्गदर्शन।' },
      ],
    },
    doctor: {
      title: 'अपने डॉक्टर से मिलें',
      sub: 'अनुभवी, देखभाल करने वाले और आपकी भलाई के लिए समर्पित।',
      name: 'डॉ. दीपाली ए. भालेराव',
      deg: 'BHMS, PGDEMS, ECA (MUHS, नाशिक)',
      exp: 'परामर्श चिकित्सक एवं जनरल सर्जन',
      bookBtn: 'अपॉइंटमेंट बुक करें',
      tags: ['सामान्य परामर्श','बाल देखभाल','आपातकाल','टीकाकरण','बीपी और मधुमेह','जनरल सर्जरी'],
    },
    timings: {
      title: 'क्लिनिक समय',
      sub: 'हम आपकी सुविधा के लिए सप्ताह में 7 दिन खुले हैं।',
      morning: 'सुबह OPD', evening: 'शाम OPD', location: 'स्थान',
      days: 'सोमवार से रविवार',
      addr: 'पुष्पांजलि होटल के सामने, पिंपळवाडी रोड, शिर्डी',
    },
    reviews: { title: 'मरीजों की समीक्षाएं', sub: 'हमारे मरीज Google पर सायकृपा क्लिनिक के बारे में क्या कहते हैं।' },
    gallery: { title: 'क्लिनिक गैलरी', sub: 'सायकृपा क्लिनिक के अंदर एक झलक।' },
    cta: {
      title: 'हमसे मिलने के लिए तैयार हैं?',
      sub: 'अपॉइंटमेंट बुक करें या OPD घंटों के दौरान आएं — हम सप्ताह में 7 दिन खुले हैं।',
      btn1: 'अपॉइंटमेंट बुक करें', btn2: '📞 95886 33596',
    },
    footer: {
      tagline: '"आपका स्वास्थ्य एक निवेश है, खर्च नहीं।"',
      sub: 'परामर्श चिकित्सक एवं जनरल सर्जन · शिर्डी',
      quickLinks: 'त्वरित लिंक', hours: 'क्लिनिक समय',
      morning: '🌅 सुबह OPD', evening: '🌆 शाम OPD', days: '📅 खुले दिन',
      open: 'सोम – रवि',
      directions: 'दिशा-निर्देश →',
      address: 'साईश कॉर्नर, पुष्पांजलि होटल के सामने,\nपिंपळवाडी रोड, शिर्डी, महाराष्ट्र',
      copy: 'सायकृपा क्लिनिक · डॉ. दीपाली ए. भालेराव · BHMS, PGDEMS, ECA',
      links: [
        { path: '/', label: 'होम' },
        { path: '/services', label: 'सेवाएं' },
        { path: '/doctors', label: 'हमारे डॉक्टर' },
        { path: '/appointment', label: 'अपॉइंटमेंट बुक करें' },
        { path: '/contact', label: 'संपर्क' },
      ],
    },
  },

  mr: {
    nav: { home: 'मुखपृष्ठ', services: 'सेवा', doctor: 'डॉक्टर', contact: 'संपर्क', book: 'अपॉइंटमेंट बुक करा' },
    hero: {
      badge: 'सल्लागार चिकित्सक व जनरल सर्जन · शिर्डी',
      title1: 'तुमचे आरोग्य आमची',
      title2: 'प्राथमिकता',
      tagline: '"तुमचे आरोग्य एक गुंतवणूक आहे, खर्च नाही।"',
      desc: 'सायकृपा क्लिनिक तुमच्या कुटुंबातील प्रत्येक सदस्यासाठी दयाळू आणि परवडणारी वैद्यकीय सेवा देते. ठिकाण: साईश कॉर्नर, पिंपळवाडी रोड, शिर्डी.',
      btn1: 'अपॉइंटमेंट बुक करा', btn2: 'आमच्या सेवा',
      stat1: 'पात्र डॉक्टर', stat2: 'आपत्कालीन वैद्यकशास्त्र', stat3: 'आठवड्यातून ७ दिवस',
      cardTitle: 'सायकृपा क्लिनिक',
      cardSub: 'सल्लागार चिकित्सक व जनरल सर्जन · शिर्डी',
      morning: 'सकाळ OPD', evening: 'संध्याकाळ OPD', phone: 'फोन', address: 'पत्ता',
      directions: 'दिशानिर्देश मिळवा →',
      addressVal: 'साईश कॉर्नर, पुष्पांजली हॉटेलसमोर, पिंपळवाडी रोड, शिर्डी',
    },
    services: {
      title: 'आमच्या सेवा',
      sub: 'सर्व वयोगटांसाठी सर्वसमावेशक आरोग्यसेवा — नियमित तपासणीपासून आपत्कालीन काळजीपर्यंत।',
      viewAll: 'सर्व सेवा पाहा →',
      items: [
        { icon: '🩺', title: 'सामान्य सल्लामसलत', desc: 'ताप, सर्दी, संसर्ग आणि सामान्य आजारांसाठी तज्ज्ञ निदान व उपचार.' },
        { icon: '👶', title: 'बालसंगोपन', desc: 'शिशू व मुलांसाठी विशेष काळजी जसे वाढीचे निरीक्षण व आजारपण उपचार.' },
        { icon: '💉', title: 'लसीकरण', desc: 'सरकारी वेळापत्रकानुसार मुले व प्रौढांसाठी संपूर्ण लसीकरण कार्यक्रम.' },
        { icon: '❤️', title: 'बीपी व मधुमेह काळजी', desc: 'रक्तदाब, साखर पातळी आणि जीवनशैलीशी संबंधित आजारांचे नियमित व्यवस्थापन.' },
        { icon: '🩸', title: 'किरकोळ प्रक्रिया', desc: 'जखमेची ड्रेसिंग, इंजेक्शन, IV फ्लुइड आणि किरकोळ अपघात काळजी.' },
        { icon: '🏠', title: 'प्रतिबंधात्मक आरोग्य तपासणी', desc: 'संपूर्ण कुटुंबासाठी नियमित आरोग्य तपासणी व कल्याण मार्गदर्शन.' },
      ],
    },
    doctor: {
      title: 'तुमच्या डॉक्टरांना भेटा',
      sub: 'अनुभवी, काळजी घेणारे आणि तुमच्या आरोग्यासाठी समर्पित.',
      name: 'डॉ. दीपाली ए. भालेराव',
      deg: 'BHMS, PGDEMS, ECA (MUHS, नाशिक)',
      exp: 'सल्लागार चिकित्सक व जनरल सर्जन',
      bookBtn: 'अपॉइंटमेंट बुक करा',
      tags: ['सामान्य सल्लामसलत','बालसंगोपन','आपत्कालीन','लसीकरण','बीपी व मधुमेह','जनरल सर्जरी'],
    },
    timings: {
      title: 'क्लिनिक वेळ',
      sub: 'आम्ही आठवड्यातून ७ दिवस तुमच्या सोयीसाठी उपलब्ध आहोत.',
      morning: 'सकाळ OPD', evening: 'संध्याकाळ OPD', location: 'ठिकाण',
      days: 'सोमवार ते रविवार',
      addr: 'पुष्पांजली हॉटेलसमोर, पिंपळवाडी रोड, शिर्डी',
    },
    reviews: { title: 'रुग्णांचे अभिप्राय', sub: 'आमचे रुग्ण Google वर सायकृपा क्लिनिकबद्दल काय म्हणतात.' },
    gallery: { title: 'क्लिनिक गॅलरी', sub: 'सायकृपा क्लिनिकमध्ये एक नजर.' },
    cta: {
      title: 'आम्हाला भेट द्यायला तयार आहात?',
      sub: 'अपॉइंटमेंट बुक करा किंवा OPD वेळेत या — आम्ही आठवड्यातून ७ दिवस उपलब्ध आहोत.',
      btn1: 'अपॉइंटमेंट बुक करा', btn2: '📞 95886 33596',
    },
    footer: {
      tagline: '"तुमचे आरोग्य एक गुंतवणूक आहे, खर्च नाही।"',
      sub: 'सल्लागार चिकित्सक व जनरल सर्जन · शिर्डी',
      quickLinks: 'द्रुत दुवे', hours: 'क्लिनिक वेळ',
      morning: '🌅 सकाळ OPD', evening: '🌆 संध्याकाळ OPD', days: '📅 उघडे दिवस',
      open: 'सोम – रवि',
      directions: 'दिशानिर्देश →',
      address: 'साईश कॉर्नर, पुष्पांजली हॉटेलसमोर,\nपिंपळवाडी रोड, शिर्डी, महाराष्ट्र',
      copy: 'सायकृपा क्लिनिक · डॉ. दीपाली ए. भालेराव · BHMS, PGDEMS, ECA',
      links: [
        { path: '/', label: 'मुखपृष्ठ' },
        { path: '/services', label: 'सेवा' },
        { path: '/doctors', label: 'आमचे डॉक्टर' },
        { path: '/appointment', label: 'अपॉइंटमेंट बुक करा' },
        { path: '/contact', label: 'संपर्क' },
      ],
    },
  },
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  function setLanguage(l) {
    setLang(l)
    localStorage.setItem('lang', l)
  }

  const t = translations[lang]

  return (
    <LangContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}