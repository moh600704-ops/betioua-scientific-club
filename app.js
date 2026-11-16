/* ==========================================================================
   BETIOUA SCIENTIFIC CLUB
   Bilingual Engine & Interaction Controller
   Default: Arabic (RTL)
   English: LTR
   ========================================================================== */

"use strict";

/* 1. TRANSLATIONS
   ========================================================================== */

const TRANSLATIONS = {
  ar: {
    brandTitle: "النادي العلمي لمعهد بطيوة",
    brandSub: "BÉTIOUA SCIENTIFIC CLUB",
    langToggle: "EN",

    // Navigation
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navInnovators: "المبتكرون",
    navActivities: "النشاطات",
    navContact: "تواصل معنا",

    // Hero
    instBadge: "معهد التكوين المهني — بطيوة",
    heroTitle1: "فكّر أبعد...",
    heroTitle2: "واصنع المستقبل.",
    heroDesc: "حيث يلتقي الفضول العلمي بالانضباط الهندسي. يمثل النادي العلمي لمعهد بطيوة فضاءً مفتوحاً للمتدربين والمكونين والمبدعين للتجريب، وتبادل الخبرات، وتحويل الأفكار الطموحة إلى حلول تقنية ونماذج تطبيقية ملموسة.",
    btnExploreProjects: "استكشف المشاريع",
    btnDiscoverClub: "اكتشف النادي",

    // Domains
    domainsKicker: "محاور الاهتمام التقني",
    domainsTitle: "مساحات للتجريب والابتكار التطبيقي",
    domainsSubtitle: "نركز على ربط المعرفة النظرية بالتطبيق العملي في المجالات الهندسية والتكنولوجية.",

    domain1Title: "الهندسة والصيانة الصناعية",
    domain1Desc: "استكشاف الأنظمة الميكانيكية والكهربائية الصناعية، وتطوير حلول الفحص والصيانة الوقائية والذكية.",

    domain2Title: "الأنظمة المدمجة والأتمتة",
    domain2Desc: "تصميم دوائر التحكم الآلي، برمجة المتحكمات الدقيقة، وتوظيف المستشعرات وتقنيات الروبوتيك.",

    domain3Title: "الابتكار وتطوير النماذج الأولية",
    domain3Desc: "مرافقة الأفكار الهندسية منذ مرحلة التخطيط والرسم التقني وحتى بناء نماذج أولية قابلة للاختبار.",

    domainsDisclaimer: "ملاحظة: تمثل هذه المحاور توجهات علمية وتقنية عامة قابلة للتحديث وفق البرامج المعتمدة للنادي.",

    // Home Showcase
    prepBadge: "قيد الإعداد والتوثيق",
    showcaseInnovatorsTitle: "فضاء المبتكرين والإنجازات",
    showcaseInnovatorsDesc: "نعمل حالياً على توثيق وتجهيز الدفعة الأولى من مشاريع المتدربين والأفكار التقنية لعرضها بشكل رسمي.",
    linkToInnovators: "انتقل إلى فضاء المبتكرين",

    activitiesKicker: "برنامج الفعاليات",
    showcaseActivitiesTitle: "الورشات والمعارض العلمية",
    showcaseActivitiesDesc: "يجري إعداد جدول الورشات التطبيقية واللقاءات العلمية المقبلة داخل المعهد.",
    linkToActivities: "استعرض صفحة النشاطات",

    // CTA
    ctaTitle: "هل لديك فكرة مشروع أو رغبة في التعاون العلمي؟",
    ctaDesc: "نرحب بمبادرات المتدربين، توجيهات المكونين، وشراكات المؤسسات المهتمة بالابتكار التقني.",
    ctaBtn: "تواصل مع النادي",

    // About
    aboutKicker: "الهوية المؤسسية والرؤية",
    aboutTitle: "عن النادي العلمي لمعهد بطيوة",
    aboutBannerCaption: "تصور بصري تعبيري لبيئة البحث والتطوير التقني التي يطمح النادي لترسيخها.",
    aboutWhoTitle: "من نحن",
    aboutWhoDesc: "مبادرة علمية وتقنية مرتبطة بمعهد التكوين المهني ببطيوة، تهدف إلى توفير بيئة محفزة تجمع بين الإبداع الفكري والمهارة التطبيقية للمتدربين.",
    aboutMissionTitle: "رسالتنا",
    aboutMissionDesc: "ترسيخ ثقافة التجريب العلمي، والعمل الجماعي، والإتقان الهندسي، وتحويل المعارف التكوينية إلى مشاريع عملية ذات قيمة.",
    aboutVisionTitle: "رؤيتنا",
    aboutVisionDesc: "أن يشكل النادي فضاءً لتنمية الطاقات التقنية الشابة وربط إبداعات المتدربين باحتياجات المحيط الصناعي والتكنولوجي.",

    valuesTitle: "القيم التي نعمل بها",
    val1Title: "الفضول والتجريب",
    val1Desc: "تشجيع روح الاكتشاف والتعلم القائم على الممارسة الفعلية وحل المشكلات.",
    val2Title: "الدقة الهندسية",
    val2Desc: "الالتزام بالمنهجية العلمية المنظمة والجودة في التخطيط والتنفيذ.",
    val3Title: "العمل التشاركي",
    val3Desc: "تكامل التخصصات وتبادل الخبرات بين المتدربين والأساتذة.",

    // Innovators
    innovatorsKicker: "معرض الإبداع التقني",
    innovatorsTitle: "المبتكرون والإنجازات",
    innovatorsEmptyTitle: "قريباً... مساحة جديدة للاكتشاف والابتكار",
    innovatorsEmptyDesc: "نستعد لعرض عقول مبدعة ومشاريع تستحق أن تُرى. يجري حالياً توثيق مشاريع المتدربين واعتماد بياناتها الرسمية لنشرها في هذه الصفحة.",
    previewCardLabel: "نموذج بطاقة مشروع — قيد التجهيز",
    previewProjectName: "عنوان المشروع التقني — سيُضاف لاحقاً",
    previewProjectMeta: "التخصص التقني • اسم المبتكر بعد الموافقة",

    // Activities
    activitiesPageKicker: "الفعاليات والتظاهرات",
    activitiesPageTitle: "نشاطات النادي العلمي",
    activitiesEmptyTitle: "برنامج الورشات والمعارض قيد التحضير",
    activitiesEmptyDesc: "سيتم في هذا القسم توثيق الورشات التطبيقية، الأيام الدراسية، والمعارض العلمية والتقنية للنادي فور انطلاقها وتوفر صورها الرسمية.",

    // Contact
    contactKicker: "قنوات الاتصال",
    contactTitle: "تواصل معنا",
    contactSubtitle: "نسعد باستقبال استفسارات المتدربين، مقترحات الأساتذة، وطلبات التعاون من المؤسسات.",
    contactInfoTitle: "الانتماء والموقع",
    contactInstLabel: "المؤسسة:",
    contactInstValue: "معهد التكوين المهني — بطيوة، وهران، الجزائر",
    contactEmailLabel: "البريد الإلكتروني الرسمي:",
    contactEmailValue: "سيتم إدراج البريد الرسمي للنادي فور اعتماده",
    contactSocialLabel: "المنصات الرسمية:",
    contactSocialValue: "سيتم ربط الصفحات الرسمية للنادي قريباً",

    formTitle: "أرسل رسالة",
    formName: "الاسم الكامل",
    formNamePlaceholder: "أدخل اسمك",
    formRole: "الصفة",
    formRoleTrainee: "متدرب بالمعهد",
    formRoleTrainer: "أستاذ / مكون",
    formRoleVisitor: "زائر مهتم",
    formRoleOrg: "مؤسسة / شركة",
    formMessage: "موضوع الرسالة أو فكرة المشروع",
    formMessagePlaceholder: "اكتب رسالتك هنا باختصار...",
    formSubmit: "إرسال الرسالة",
    formNotice: "النموذج تجريبي حالياً ولم يتم إرسال رسالتك. سيتم تفعيل الإرسال بعد ربطه بخدمة تواصل رسمية.",

    // Footer
    footerDesc: "فضاء مؤسسي للابتكار العلمي، التجريب الهندسي، وتطوير المهارات التقنية.",
    footerLinksTitle: "أقسام الموقع",
    footerLocationTitle: "الموقع المؤسسي",
    footerLocationText: "معهد التكوين المهني — بطيوة، ولاية وهران، الجزائر.",
    footerCopyright: "© 2026 النادي العلمي لمعهد بطيوة — جميع الحقوق محفوظة."
  },

  en: {
    brandTitle: "BÉTIOUA SCIENTIFIC CLUB",
    brandSub: "Scientific & Technical Innovation",
    langToggle: "عربي",

    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navInnovators: "Innovators",
    navActivities: "Activities",
    navContact: "Contact",

    // Hero
    instBadge: "BÉTIOUA VOCATIONAL TRAINING INSTITUTE",
    heroTitle1: "THINK BEYOND.",
    heroTitle2: "BUILD THE FUTURE.",
    heroDesc: "Where scientific curiosity meets disciplined engineering. BÉTIOUA Scientific Club is a space for trainees, instructors, and creators to experiment, collaborate, and transform ideas into practical technical solutions and prototypes.",
    btnExploreProjects: "Explore Projects",
    btnDiscoverClub: "Discover the Club",

    // Domains
    domainsKicker: "TECHNICAL FOCUS AREAS",
    domainsTitle: "Spaces for Experimentation & Applied Innovation",
    domainsSubtitle: "Connecting theoretical knowledge with practical engineering and modern technology.",

    domain1Title: "Industrial Engineering & Maintenance",
    domain1Desc: "Exploring mechanical and industrial electrical systems, diagnostics, and smart preventive maintenance solutions.",

    domain2Title: "Embedded Systems & Automation",
    domain2Desc: "Designing automated control circuits, programming microcontrollers, and applying sensors and robotics.",

    domain3Title: "Applied Innovation & Prototyping",
    domain3Desc: "Developing engineering ideas from technical planning and schematics to testable prototypes.",

    domainsDisclaimer: "Note: These domains represent general technical directions and may be updated according to the club's confirmed programs.",

    // Home Showcase
    prepBadge: "IN PREPARATION",
    showcaseInnovatorsTitle: "Innovators & Achievements",
    showcaseInnovatorsDesc: "We are preparing and documenting the first collection of trainee projects and technical ideas for an official showcase.",
    linkToInnovators: "Visit Innovators Space",

    activitiesKicker: "EVENTS & WORKSHOPS",
    showcaseActivitiesTitle: "Workshops & Scientific Exhibitions",
    showcaseActivitiesDesc: "The schedule of upcoming practical workshops and scientific gatherings is being prepared.",
    linkToActivities: "Explore Activities",

    // CTA
    ctaTitle: "Have a project idea or an interest in scientific collaboration?",
    ctaDesc: "We welcome trainee initiatives, instructor guidance, and partnerships with organizations interested in technical innovation.",
    ctaBtn: "Contact the Club",

    // About
    aboutKicker: "INSTITUTIONAL IDENTITY & VISION",
    aboutTitle: "About BÉTIOUA Scientific Club",
    aboutBannerCaption: "A conceptual visual representing the technical research and development environment the club aspires to promote.",
    aboutWhoTitle: "Who We Are",
    aboutWhoDesc: "A scientific and technical initiative connected with the vocational training institute in BÉTIOUA, aiming to create an environment that combines creative thinking with practical skills.",
    aboutMissionTitle: "Our Mission",
    aboutMissionDesc: "To encourage scientific experimentation, teamwork, and engineering precision, transforming vocational knowledge into practical projects.",
    aboutVisionTitle: "Our Vision",
    aboutVisionDesc: "To provide a space for developing young technical talent and connecting trainee creativity with industrial and technological needs.",

    valuesTitle: "Our Core Values",
    val1Title: "Curiosity & Experimentation",
    val1Desc: "Encouraging discovery and learning through hands-on practice and problem-solving.",
    val2Title: "Engineering Precision",
    val2Desc: "Following structured methods and maintaining quality in planning and execution.",
    val3Title: "Collaborative Spirit",
    val3Desc: "Bringing disciplines together and sharing experience between trainees and instructors.",

    // Innovators
    innovatorsKicker: "TECHNICAL SHOWCASE",
    innovatorsTitle: "Innovators & Achievements",
    innovatorsEmptyTitle: "Coming Soon... A Space for Discovery & Innovation",
    innovatorsEmptyDesc: "We are preparing to showcase creative minds and projects worth seeing. Trainee projects and their official details are being documented before publication.",
    previewCardLabel: "Project Card Template — In Preparation",
    previewProjectName: "Technical Project Title — To Be Added",
    previewProjectMeta: "Technical Field • Innovator Name Upon Approval",

    // Activities
    activitiesPageKicker: "EVENTS & GATHERINGS",
    activitiesPageTitle: "Scientific Club Activities",
    activitiesEmptyTitle: "Workshops & Exhibitions Program in Preparation",
    activitiesEmptyDesc: "This section will document practical workshops, study days, and scientific and technical exhibitions once they take place and official images are available.",

    // Contact
    contactKicker: "COMMUNICATION CHANNELS",
    contactTitle: "Contact Us",
    contactSubtitle: "We welcome inquiries from trainees, proposals from instructors, and collaboration requests from organizations.",
    contactInfoTitle: "Affiliation & Location",
    contactInstLabel: "Institution:",
    contactInstValue: "Vocational Training Institute — BÉTIOUA, Oran, Algeria",
    contactEmailLabel: "Official Email:",
    contactEmailValue: "The club's official email will be listed once confirmed",
    contactSocialLabel: "Official Channels:",
    contactSocialValue: "Official club social links will be added once confirmed",

    formTitle: "Send a Message",
    formName: "Full Name",
    formNamePlaceholder: "Enter your name",
    formRole: "Role",
    formRoleTrainee: "Institute Trainee",
    formRoleTrainer: "Instructor / Trainer",
    formRoleVisitor: "Interested Visitor",
    formRoleOrg: "Organization / Company",
    formMessage: "Message Subject or Project Idea",
    formMessagePlaceholder: "Write your message briefly here...",
    formSubmit: "Send Message",
    formNotice: "This form is currently a preview and your message has not been sent. Sending will be enabled after connecting an official contact service.",

    // Footer
    footerDesc: "A space for scientific innovation, engineering experimentation, and technical skill development.",
    footerLinksTitle: "Navigation",
    footerLocationTitle: "Institutional Location",
    footerLocationText: "Vocational Training Institute — BÉTIOUA, Oran Province, Algeria.",
    footerCopyright: "© 2026 BÉTIOUA Scientific Club — All Rights Reserved."
  }
};

/* 2. LANGUAGE STORAGE
   ========================================================================== */

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("bsc_lang");
    return saved === "en" ? "en" : "ar";
  } catch (error) {
    return "ar";
  }
}

let currentLang = getSavedLanguage();

/* 3. TRANSLATION HELPERS
   ========================================================================== */

function updateTranslatedText(element, value) {
  // Recommended HTML structure:
  // <button><span data-i18n="langToggle"></span><svg>...</svg></button>

  const textTarget = element.querySelector("[data-i18n-text]");

  if (textTarget) {
    textTarget.textContent = value;
    return;
  }

  if (element.children.length === 0) {
    element.textContent = value;
    return;
  }

  // Preserve existing icons and child elements.
  const directTextNode = Array.from(element.childNodes).find(
    node =>
      node.nodeType === Node.TEXT_NODE &&
      node.textContent.trim().length > 0
  );

  if (directTextNode) {
    directTextNode.textContent = value;
  } else {
    element.insertBefore(
      document.createTextNode(value),
      element.firstChild
    );
  }
}

/* 4. APPLY LANGUAGE
   ========================================================================== */

function applyLanguage(lang) {
  if (!Object.prototype.hasOwnProperty.call(TRANSLATIONS, lang)) {
    lang = "ar";
  }

  currentLang = lang;

  try {
    localStorage.setItem("bsc_lang", lang);
  } catch (error) {
    // Language still works for the current page session.
  }

  const htmlEl = document.documentElement;
  const dict = TRANSLATIONS[lang];

  htmlEl.setAttribute("lang", lang);
  htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Translate text
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");

    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      updateTranslatedText(element, dict[key]);
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      element.setAttribute("placeholder", dict[key]);
    }
  });

  // Translate accessibility labels
  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    const key = element.getAttribute("data-i18n-aria-label");

    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      element.setAttribute("aria-label", dict[key]);
    }
  });

  // Translate title attributes
  document.querySelectorAll("[data-i18n-title]").forEach(element => {
    const key = element.getAttribute("data-i18n-title");

    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      element.setAttribute("title", dict[key]);
    }
  });
}

/* 5. LANGUAGE SWITCHER
   ========================================================================== */

function toggleLanguage() {
  const nextLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(nextLang);
}

/* 6. ACTIVE NAVIGATION
   ========================================================================== */

function setActiveNav() {
  const currentPath =
    window.location.pathname.split("/").filter(Boolean).pop() ||
    "index.html";

  document.querySelectorAll("[data-nav]").forEach(link => {
    const target = link.getAttribute("data-nav");
    const targetPath = target.split("/").filter(Boolean).pop();

    const isActive = targetPath === currentPath;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

/* 7. SCROLL REVEAL
   ========================================================================== */

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!elements.length) return;

  // Fallback for browsers without IntersectionObserver.
  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => {
      element.classList.add("visible");
    });
    return;
  }

  try {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    // Enable CSS reveal only when the observer is ready.
    document.documentElement.classList.add("js-enabled");

    elements.forEach(element => {
      observer.observe(element);
    });

  } catch (error) {
    // Never leave page content hidden after an animation error.
    document.documentElement.classList.remove("js-enabled");

    elements.forEach(element => {
      element.classList.add("visible");
    });
  }
}

/* 8. CONTACT FORM PREVIEW
   ========================================================================== */

function initContactForm() {
  const form = document.getElementById("clubContactForm");
  const notice = document.getElementById("formNoticeBox");

  if (!form || !notice) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    // This is a preview only. No message is sent.
    const dict = TRANSLATIONS[currentLang];

    notice.textContent = dict.formNotice;
    notice.hidden = false;
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-live", "polite");

    // Do not clear the user's message because no submission occurred.
  });
}

/* 9. INITIALIZATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);

  setActiveNav();

  initScrollReveal();

  initContactForm();

  const langBtn = document.getElementById("langToggleBtn");

  if (langBtn) {
    langBtn.addEventListener("click", toggleLanguage);
  }
});
