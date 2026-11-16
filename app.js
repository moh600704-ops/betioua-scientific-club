here/* ==========================================================================
   BÉTIOUA SCIENTIFIC CLUB — app.js
   - Scroll reveal (isolated, fails safe)
   - AR/EN language switch with localStorage persistence
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var STORAGE_KEY = 'bsc-lang';

  function qsa(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  }

  /* ---------- 1. Scroll reveal (runs first, never blocks the rest) ---------- */
  function revealAll() {
    qsa('.reveal').forEach(function (el) { el.classList.add('visible'); });
  }

  try {
    var items = qsa('.reveal');
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!items.length) {
      /* nothing to do */
    } else if (reduceMotion || !('IntersectionObserver' in window)) {
      revealAll();
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      items.forEach(function (el) { observer.observe(el); });
    }
  } catch (err) {
    revealAll();
  }

  /* ---------- 2. Translations ---------- */
  var TRANSLATIONS = {
  "ar": {
    "langToggle": "EN",
    "brandTitle": "النادي العلمي لمعهد بطيوة",
    "brandSub": "BÉTIOUA SCIENTIFIC CLUB",
    "navHome": "الرئيسية",
    "navAbout": "من نحن",
    "navInnovators": "المبتكرون",
    "navActivities": "النشاطات",
    "navContact": "تواصل معنا",
    "prepBadge": "قيد الإعداد والتوثيق",
    "ctaTitle": "هل لديك فكرة مشروع أو رغبة في التعاون العلمي؟",
    "ctaDesc": "نرحب بمبادرات المتدربين، توجيهات المكونين، وشراكات المؤسسات المهتمة بالابتكار التقني.",
    "ctaBtn": "تواصل مع النادي",
    "footerDesc": "فضاء مؤسسي للابتكار العلمي، التجريب الهندسي، وتطوير المهارات التقنية.",
    "footerLinksTitle": "أقسام الموقع",
    "footerLocationTitle": "الموقع المؤسسي",
    "footerLocationText": "معهد التكوين المهني — بطيوة، ولاية وهران، الجزائر.",
    "footerCopyright": "© 2026 النادي العلمي لمعهد بطيوة — جميع الحقوق محفوظة.",
    "titleHome": "النادي العلمي لمعهد بطيوة | BÉTIOUA SCIENTIFIC CLUB",
    "descHome": "الموقع الرسمي للنادي العلمي لمعهد التكوين المهني ببطيوة — فضاء للابتكار العلمي، الهندسة، والتجريب التطبيقي.",
    "titleAbout": "من نحن | النادي العلمي لمعهد بطيوة",
    "descAbout": "تعرّف على النادي العلمي لمعهد التكوين المهني ببطيوة: رسالته ورؤيته وقيمه.",
    "titleInnovators": "المبتكرون | النادي العلمي لمعهد بطيوة",
    "descInnovators": "فضاء عرض مشاريع المتدربين وأفكارهم التقنية بعد توثيقها — قيد الإعداد.",
    "titleActivities": "النشاطات | النادي العلمي لمعهد بطيوة",
    "descActivities": "الورشات التطبيقية واللقاءات والمعارض العلمية للنادي — البرنامج قيد الإعداد.",
    "titleContact": "تواصل معنا | النادي العلمي لمعهد بطيوة",
    "descContact": "معلومات التواصل مع النادي العلمي لمعهد التكوين المهني ببطيوة وكيفية تحضير فكرة مشروع.",
    "altHero": "محرك توربيني صناعي",
    "instBadge": "معهد التكوين المهني — بطيوة",
    "heroTitle1": "فكّر أبعد...",
    "heroTitle2": "واصنع المستقبل.",
    "heroDesc": "حيث يلتقي الفضول العلمي بالانضباط الهندسي. يمثل النادي العلمي لمعهد بطيوة فضاءً مفتوحاً للمتدربين والمكونين والمبدعين للتجريب، وتبادل الخبرات، وتحويل الأفكار الطموحة إلى حلول تقنية ونماذج تطبيقية ملموسة.",
    "btnExploreProjects": "استكشف المشاريع",
    "btnDiscoverClub": "اكتشف النادي",
    "domainsKicker": "محاور الاهتمام التقني",
    "domainsTitle": "مساحات للتجريب والابتكار التطبيقي",
    "domainsSubtitle": "نركز على ربط المعرفة النظرية بالتطبيق العملي في المجالات الهندسية والتكنولوجية.",
    "domain1Title": "الهندسة والصيانة الصناعية",
    "domain1Desc": "استكشاف الأنظمة الميكانيكية والكهربائية الصناعية، وتطوير حلول الفحص والصيانة الوقائية والذكية.",
    "domain2Title": "الأنظمة المدمجة والأتمتة",
    "domain2Desc": "تصميم دوائر التحكم الآلي، برمجة المتحكمات الدقيقة، وتوظيف المستشعرات وتقنيات الروبوتيك.",
    "domain3Title": "الابتكار وتطوير النماذج الأولية",
    "domain3Desc": "مرافقة الأفكار الهندسية منذ مرحلة التخطيط والرسم التقني وحتى بناء نماذج أولية قابلة للاختبار.",
    "domainsDisclaimer": "ملاحظة: تمثل هذه المحاور توجهات علمية وتقنية عامة قابلة للتحديث وفق البرامج المعتمدة للنادي.",
    "showcaseInnovatorsTitle": "فضاء المبتكرين والإنجازات",
    "showcaseInnovatorsDesc": "نعمل حالياً على توثيق وتجهيز الدفعة الأولى من مشاريع المتدربين والأفكار التقنية لعرضها بشكل رسمي.",
    "linkToInnovators": "انتقل إلى فضاء المبتكرين",
    "activitiesKicker": "برنامج الفعاليات",
    "showcaseActivitiesTitle": "الورشات والمعارض العلمية",
    "showcaseActivitiesDesc": "يجري إعداد جدول الورشات التطبيقية واللقاءات العلمية المقبلة داخل المعهد.",
    "linkToActivities": "استعرض صفحة النشاطات",
    "altAbout": "تروس وأنظمة هيدروليكية صناعية",
    "aboutKicker": "من نحن",
    "aboutTitle": "نادٍ علمي يربط المعرفة بالتطبيق",
    "aboutLead": "النادي العلمي لمعهد التكوين المهني ببطيوة فضاء مؤسسي مفتوح للمتدربين والمكونين للتجريب وتبادل الخبرات وتحويل الأفكار إلى نماذج تطبيقية.",
    "aboutCaption": "صورة توضيحية",
    "aboutMissionTitle": "رسالتنا",
    "aboutMissionDesc": "ترسيخ الثقافة العلمية والتقنية لدى المتدربين، وتشجيع روح المبادرة والتجريب العملي.",
    "aboutVisionTitle": "رؤيتنا",
    "aboutVisionDesc": "أن يكون النادي مرجعاً داخل المعهد في الابتكار التقني وتطوير النماذج الأولية.",
    "aboutValuesTitle": "قيمنا",
    "aboutValuesDesc": "الانضباط الهندسي، الفضول العلمي، العمل الجماعي، وتوثيق المعرفة ومشاركتها.",
    "aboutDisclaimer": "النصوص التعريفية عامة وقابلة للتحديث وفق البرامج المعتمدة للنادي.",
    "altInnovators": "ذراع لحام روبوتية صناعية",
    "innoKicker": "المبتكرون",
    "innoTitle": "فضاء المبتكرين والإنجازات",
    "innoLead": "مساحة مخصصة لعرض مشاريع المتدربين وأفكارهم التقنية بعد توثيقها.",
    "innoCaption": "صورة توضيحية",
    "innoStatusTitle": "الدفعة الأولى قيد التوثيق",
    "innoStatusDesc": "نعمل على جمع وتوثيق المشاريع الأولى. ستُنشر هنا فور اكتمال ملفاتها.",
    "innoCard1Title": "توثيق المشاريع",
    "innoCard1Desc": "إعداد ملف تعريفي لكل مشروع: الفكرة، المجال التقني، والمراحل المنجزة.",
    "innoCard2Title": "مرافقة المكونين",
    "innoCard2Desc": "توجيه الأفكار الهندسية خلال مراحل التخطيط والتجريب.",
    "innoCard3Title": "عرض الإنجازات",
    "innoCard3Desc": "عرض النماذج والمشاريع المكتملة بشكل منظم حين تكتمل ملفاتها.",
    "altActivities": "روبوت صناعي متحرك",
    "actKicker": "النشاطات",
    "actTitle": "الورشات والمعارض العلمية",
    "actLead": "فعاليات النادي من ورشات تطبيقية ولقاءات علمية ومعارض للنماذج التقنية.",
    "actCaption": "صورة توضيحية",
    "actStatusTitle": "البرنامج قيد الإعداد",
    "actStatusDesc": "لم تُحدَّد تواريخ الفعاليات بعد. سيُعلن البرنامج هنا فور اعتماده.",
    "actCard1Title": "ورشات تطبيقية",
    "actCard1Desc": "جلسات عملية للتجريب في المجالات الميكانيكية والكهربائية والأتمتة.",
    "actCard2Title": "لقاءات علمية",
    "actCard2Desc": "فضاءات لتبادل الخبرات بين المتدربين والمكونين.",
    "actCard3Title": "معارض ونماذج",
    "actCard3Desc": "عرض النماذج الأولية والمشاريع التقنية داخل المعهد.",
    "contactKicker": "تواصل معنا",
    "contactTitle": "تواصل مع النادي",
    "contactLead": "نرحب بالأفكار والمبادرات ومقترحات التعاون العلمي والتقني.",
    "contactInfoTitle": "معلومات التواصل",
    "contactLocationLabel": "الموقع",
    "contactChannelsLabel": "قنوات التواصل",
    "contactChannelsValue": "قنوات التواصل الرسمية قيد الإعداد وستُعلن هنا فور اعتمادها.",
    "contactTempNote": "إلى حين إعلان القنوات الرسمية، يمكن التوجه إلى إدارة المعهد للاستفسار.",
    "contactPrepTitle": "حضّر فكرتك",
    "contactPrepDesc": "إن كانت لديك فكرة مشروع أو رغبة في التعاون، جهّز العناصر التالية لتسهيل النقاش:",
    "contactPrep1": "عنوان الفكرة وملخصها في بضعة أسطر.",
    "contactPrep2": "المجال التقني (ميكانيك، كهرباء، أتمتة...).",
    "contactPrep3": "الموارد أو الدعم المطلوب."
  },
  "en": {
    "langToggle": "عربي",
    "brandTitle": "Bétioua Institute Scientific Club",
    "brandSub": "BÉTIOUA SCIENTIFIC CLUB",
    "navHome": "Home",
    "navAbout": "About",
    "navInnovators": "Innovators",
    "navActivities": "Activities",
    "navContact": "Contact",
    "prepBadge": "Under preparation",
    "ctaTitle": "Have a project idea or want to collaborate scientifically?",
    "ctaDesc": "We welcome trainee initiatives, instructor guidance, and partnerships with institutions interested in technical innovation.",
    "ctaBtn": "Contact the club",
    "footerDesc": "An institutional space for scientific innovation, engineering experimentation, and technical skills development.",
    "footerLinksTitle": "Site sections",
    "footerLocationTitle": "Institutional location",
    "footerLocationText": "Vocational Training Institute — Bétioua, Oran Province, Algeria.",
    "footerCopyright": "© 2026 Bétioua Institute Scientific Club — All rights reserved.",
    "titleHome": "Bétioua Institute Scientific Club | BÉTIOUA SCIENTIFIC CLUB",
    "descHome": "Official website of the scientific club of the Vocational Training Institute in Bétioua — a space for scientific innovation, engineering, and hands-on experimentation.",
    "titleAbout": "About | Bétioua Institute Scientific Club",
    "descAbout": "Learn about the scientific club of the Vocational Training Institute in Bétioua: its mission, vision, and values.",
    "titleInnovators": "Innovators | Bétioua Institute Scientific Club",
    "descInnovators": "A space to showcase trainee projects and technical ideas once documented — under preparation.",
    "titleActivities": "Activities | Bétioua Institute Scientific Club",
    "descActivities": "Hands-on workshops, meetings, and scientific exhibitions of the club — programme under preparation.",
    "titleContact": "Contact | Bétioua Institute Scientific Club",
    "descContact": "How to reach the scientific club of the Vocational Training Institute in Bétioua and how to prepare a project idea.",
    "altHero": "Industrial turbine engine",
    "instBadge": "Vocational Training Institute — Bétioua",
    "heroTitle1": "Think further...",
    "heroTitle2": "Build the future.",
    "heroDesc": "Where scientific curiosity meets engineering discipline. The Bétioua Institute Scientific Club is an open space for trainees, instructors, and creators to experiment, exchange expertise, and turn ambitious ideas into technical solutions and tangible prototypes.",
    "btnExploreProjects": "Explore projects",
    "btnDiscoverClub": "Discover the club",
    "domainsKicker": "Technical focus areas",
    "domainsTitle": "Spaces for experimentation and applied innovation",
    "domainsSubtitle": "We connect theoretical knowledge with hands-on practice in engineering and technology fields.",
    "domain1Title": "Industrial engineering and maintenance",
    "domain1Desc": "Exploring industrial mechanical and electrical systems, and developing inspection, preventive and smart maintenance solutions.",
    "domain2Title": "Embedded systems and automation",
    "domain2Desc": "Designing automatic control circuits, programming microcontrollers, and using sensors and robotics technologies.",
    "domain3Title": "Innovation and prototype development",
    "domain3Desc": "Supporting engineering ideas from planning and technical drawing through to testable prototypes.",
    "domainsDisclaimer": "Note: these areas reflect general scientific and technical directions and may be updated according to the club's approved programmes.",
    "showcaseInnovatorsTitle": "Innovators and achievements",
    "showcaseInnovatorsDesc": "We are currently documenting and preparing the first batch of trainee projects and technical ideas for official presentation.",
    "linkToInnovators": "Go to the innovators space",
    "activitiesKicker": "Events programme",
    "showcaseActivitiesTitle": "Workshops and scientific exhibitions",
    "showcaseActivitiesDesc": "The schedule of upcoming hands-on workshops and scientific meetings at the institute is being prepared.",
    "linkToActivities": "Browse the activities page",
    "altAbout": "Industrial gears and hydraulic systems",
    "aboutKicker": "About us",
    "aboutTitle": "A scientific club connecting knowledge with practice",
    "aboutLead": "The scientific club of the Vocational Training Institute in Bétioua is an open institutional space for trainees and instructors to experiment, exchange expertise, and turn ideas into practical prototypes.",
    "aboutCaption": "Illustrative image",
    "aboutMissionTitle": "Our mission",
    "aboutMissionDesc": "To strengthen scientific and technical culture among trainees and encourage initiative and hands-on experimentation.",
    "aboutVisionTitle": "Our vision",
    "aboutVisionDesc": "For the club to be a reference within the institute for technical innovation and prototype development.",
    "aboutValuesTitle": "Our values",
    "aboutValuesDesc": "Engineering discipline, scientific curiosity, teamwork, and documenting and sharing knowledge.",
    "aboutDisclaimer": "These introductory texts are general and may be updated according to the club's approved programmes.",
    "altInnovators": "Industrial robotic welding arm",
    "innoKicker": "Innovators",
    "innoTitle": "Innovators and achievements",
    "innoLead": "A space dedicated to showcasing trainee projects and technical ideas once they are documented.",
    "innoCaption": "Illustrative image",
    "innoStatusTitle": "First batch under documentation",
    "innoStatusDesc": "We are collecting and documenting the first projects. They will be published here once their files are complete.",
    "innoCard1Title": "Project documentation",
    "innoCard1Desc": "Preparing a profile for each project: the idea, technical field, and completed stages.",
    "innoCard2Title": "Instructor support",
    "innoCard2Desc": "Guiding engineering ideas through planning and experimentation stages.",
    "innoCard3Title": "Showcasing achievements",
    "innoCard3Desc": "Presenting completed prototypes and projects in an organised way once their files are complete.",
    "altActivities": "Industrial mobile robot",
    "actKicker": "Activities",
    "actTitle": "Workshops and scientific exhibitions",
    "actLead": "The club's events: hands-on workshops, scientific meetings, and exhibitions of technical prototypes.",
    "actCaption": "Illustrative image",
    "actStatusTitle": "Programme under preparation",
    "actStatusDesc": "Event dates have not been set yet. The programme will be announced here once approved.",
    "actCard1Title": "Hands-on workshops",
    "actCard1Desc": "Practical sessions for experimenting in mechanics, electrical systems, and automation.",
    "actCard2Title": "Scientific meetings",
    "actCard2Desc": "Spaces for exchanging expertise between trainees and instructors.",
    "actCard3Title": "Exhibitions and prototypes",
    "actCard3Desc": "Presenting prototypes and technical projects within the institute.",
    "contactKicker": "Contact",
    "contactTitle": "Contact the club",
    "contactLead": "We welcome ideas, initiatives, and proposals for scientific and technical collaboration.",
    "contactInfoTitle": "Contact information",
    "contactLocationLabel": "Location",
    "contactChannelsLabel": "Contact channels",
    "contactChannelsValue": "Official contact channels are being prepared and will be announced here once approved.",
    "contactTempNote": "Until official channels are announced, you can inquire through the institute administration.",
    "contactPrepTitle": "Prepare your idea",
    "contactPrepDesc": "If you have a project idea or want to collaborate, prepare the following to make the discussion easier:",
    "contactPrep1": "The idea's title and a short summary.",
    "contactPrep2": "The technical field (mechanics, electrical, automation...).",
    "contactPrep3": "The resources or support needed."
  }
};

  function readLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') return saved;
    } catch (e) { /* storage unavailable */ }
    return 'ar';
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function applyLang(lang) {
    var dict = TRANSLATIONS[lang] || TRANSLATIONS.ar;

    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    qsa('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.textContent = dict[key];
    });

    qsa('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.setAttribute('alt', dict[key]);
    });

    qsa('[data-i18n-content]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-content');
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.setAttribute('content', dict[key]);
    });

    var btn = document.getElementById('langToggleBtn');
    if (btn) {
      btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    }
  }

  try {
    applyLang(readLang());

    var toggle = document.getElementById('langToggleBtn');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = root.getAttribute('lang') === 'ar' ? 'en' : 'ar';
        saveLang(next);
        applyLang(next);
      });
    }
  } catch (err) {
    if (window.console) console.error('Language init failed:', err);
  }
})();
