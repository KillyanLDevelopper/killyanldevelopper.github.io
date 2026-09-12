(function () {
  "use strict";

  var translations = {
    en: {
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.contact": "Contact",

      "hero.eyebrow": "Web developer — Front-end &amp; Back-end",
      "hero.title": 'Hi, I’m <span class="accent">Killyan Lebegue</span>',
      "hero.role": "&gt; front-end &amp;&amp; back-end developer",
      "hero.lead": "3rd-year Computer Science student (BUT, Web Development track) at IUT Reims. I build clear interfaces and reliable back-ends with JavaScript/TypeScript, PHP, Python and React.",
      "hero.cta1": "View my projects",
      "hero.cta2": "Get in touch",
      "hero.terminalStatus": '"become a game developer"',

      "about.eyebrow": "01 — About",
      "about.title": "Who I am",
      "about.p1": 'I’m a 3rd-year <mark>Computer Science student (BUT)</mark>, Web Development track, at IUT Reims-Châlons-Charleville. Passionate about web development and video games, I build personal projects on the side that reflect my <mark>autonomy</mark> and my taste for interactive interfaces.',
      "about.p2": "I put my front-end and back-end skills into practice on real projects, in a team where respect and kindness matter as much as technical achievement.",
      "about.p3": 'My long-term goal: becoming a <mark>video game developer</mark>. I’ve always been passionate about this world, and I want to one day create my own games by putting my technical skills and taste for innovation to use.',
      "about.fact1Label": "Location",
      "about.fact2Label": "Languages",
      "about.fact2Value": "French (native) · English (B2)",
      "about.fact3Label": "Interests",
      "about.fact3Value": "Video games · Sports · Music",
      "about.fact4Label": "Values",
      "about.fact4Value": "Respect · Kindness · Responsibility · Autonomy · Achievement",

      "skills.eyebrow": "02 — Skills",
      "skills.title": "What I work with",
      "skills.cat1": "Languages",
      "skills.cat2": "Frameworks &amp; libraries",
      "skills.cat3": "Tools &amp; environments",
      "skills.cat4": "Databases",
      "skills.db1": "SQL / Oracle",
      "skills.db2": "Relational modeling",

      "projects.eyebrow": "03 — Projects",
      "projects.title": "Personal projects",
      "projects.desc": "A few projects built outside of class, solo, from prototype to deployment.",
      "projects.covergle": "A web platform for streaming and gaming, to display and manage content tied to users and platforms like Twitch. Dynamic interfaces, routing, APIs and user data handling.",
      "projects.linkSite": "View site ↗",
      "projects.linkCode": "Source code ↗",
      "projects.vgwordle": "A guessing game inspired by Wordle, reimagined around video games. Built with HTML, CSS and vanilla JavaScript (ES modules), with a colored feedback system to guide each guess.",
      "projects.puissance4": "A Connect Four game playable versus another player or an AI, built on top of a provided graphical interface and made fully functional.",
      "projects.tagGame": "Game",
      "projects.whozthat": "A “Guess Who?” style game based on an Animal Crossing database: the computer picks a character and the player has to guess it by asking predefined questions.",
      "projects.tagDb": "Database",
      "projects.tagLogic": "Game logic",
      "projects.labyrinthe": "A procedurally generated maze built with a partner, with several different generation algorithms and a display of the correct path using different solving methods.",
      "projects.tagAlgo": "Algorithms",
      "projects.tagBinome": "Paired project",
      "projects.tvshow": "End-of-first-year project built with a partner in 3 days: a web app to browse and edit a TV shows database.",

      "experience.eyebrow": "04 — Background",
      "experience.title": "Experience &amp; education",
      "experience.job1Date": "April – June 2025 (8 weeks)",
      "experience.job1Title": "Web Developer Intern",
      "experience.job1a": "Built a project schedule and Gantt chart",
      "experience.job1b": "Designed and used a database",
      "experience.job1c": "Developed dynamic web pages",
      "experience.job1d": "Managed user interfaces",
      "experience.job2Title": "Waiter",
      "experience.edu1Date": "2023 — ongoing",
      "experience.edu1Track": "Web Development track",
      "experience.edu1Desc": "3rd year: Web Development track · 2nd year: C++ track",
      "experience.edu2Title": "General Baccalauréat",
      "experience.edu2Desc": "Pass with honors — Mathematics, NSI (Computer Science), SI (Engineering) majors",

      "contact.eyebrow": "05 — Contact",
      "contact.title": "Let’s work together",
      "contact.desc": "A question, a project, an idea to collaborate on? Reach out, I reply quickly.",
      "contact.emailLabel": "Email",
      "contact.cvLabel": "Resume",
      "contact.cvValue": "View preview →",

      "cvModal.title": "Resume preview",
      "cvModal.download": "Download ↗",
      "cvModal.fallback": "The preview doesn’t display on this device.",
      "cvModal.open": "Open the PDF ↗",

      "footer.made": "designed &amp; built in Reims",
      "footer.moodboard": "Moodboard",
      "footer.brandboard": "Brandboard"
    }
  };

  var root = document.documentElement;
  var STORAGE_LANG = "kl-lang";
  var STORAGE_THEME = "kl-theme";

  function applyLang(lang) {
    var isEn = lang === "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (isEn && translations.en[key] !== undefined) {
        el.innerHTML = translations.en[key];
      } else if (!isEn) {
        var original = el.getAttribute("data-fr-original");
        if (original !== null) el.innerHTML = original;
      }
    });
    root.setAttribute("lang", lang);
    document.title = isEn
      ? "Killyan Lebegue — Web Developer"
      : "Killyan Lebegue — Développeur Web";
    document.querySelectorAll("#langSwitch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) {}
  }

  function initLang() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.setAttribute("data-fr-original", el.innerHTML);
    });
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_LANG); } catch (e) {}
    applyLang(saved === "en" ? "en" : "fr");

    document.querySelectorAll("#langSwitch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function initTheme() {
    var toggle = document.getElementById("themeToggle");
    var iconMoon = document.getElementById("iconMoon");
    var iconSun = document.getElementById("iconSun");
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_THEME); } catch (e) {}
    if (saved === "light" || saved === "dark") {
      root.setAttribute("data-theme", saved);
    }
    updateThemeIcon();

    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      var next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(STORAGE_THEME, next); } catch (e) {}
      updateThemeIcon();
    });

    function updateThemeIcon() {
      var isLight = root.getAttribute("data-theme") === "light";
      iconSun.hidden = !isLight;
      iconMoon.hidden = isLight;
    }
  }

  function initNav() {
    var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");

    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });

    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    var navAnchors = links.querySelectorAll("a");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navAnchors.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }

  function initCvModal() {
    var openBtn = document.getElementById("cvPreviewBtn");
    var modal = document.getElementById("cvModal");
    var backdrop = document.getElementById("cvModalBackdrop");
    var closeBtn = document.getElementById("cvModalClose");
    var frame = document.getElementById("cvModalFrame");
    var fallback = document.getElementById("cvModalFallback");
    var CV_PATH = "assets/docs/CV-Killyan-Lebegue.pdf";
    var loaded = false;

    function open() {
      var isNarrow = window.matchMedia("(max-width: 640px)").matches;
      if (isNarrow) {
        frame.hidden = true;
        fallback.hidden = false;
      } else {
        frame.hidden = false;
        fallback.hidden = true;
        if (!loaded) {
          frame.src = CV_PATH + "#toolbar=0";
          loaded = true;
        }
      }
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function close() {
      modal.hidden = true;
      document.body.style.overflow = "";
      openBtn.focus();
    }

    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    backdrop.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) close();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
    initLang();
    initTheme();
    initNav();
    initCvModal();
  });
})();
