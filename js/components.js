// ─── SHARED COMPONENTS ───

const LOGO_IMG = (prefix='..') => `<img src="${prefix}/WE.png" alt="WastElimna Logo" style="height:68px;width:auto;display:block"/>`;

const NAV_HTML = `
<nav class="navbar">
  <a href="../index.html" class="nav-logo">${LOGO_IMG('..')}</a>
  <ul class="nav-links">
    <li><a href="../index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="business.html">Business Waste</a></li>
    <li><a href="recycling.html">Recycling</a></li>
    <li><a href="charity.html">Charity</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <a href="contact.html" class="nav-cta">Schedule Service</a>
  <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
    <span class="ham-bar"></span>
    <span class="ham-bar"></span>
    <span class="ham-bar"></span>
  </button>
</nav>
<!-- Mobile drawer -->
<div class="mobile-drawer" id="mobileDrawer">
  <div class="mobile-drawer-inner">
    <div class="mobile-drawer-logo">${LOGO_IMG('..')}</div>
    <ul class="mobile-nav-links">
      <li><a href="../index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="business.html">Business Waste</a></li>
      <li><a href="recycling.html">Recycling</a></li>
      <li><a href="charity.html">Charity</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="contact.html" class="mobile-cta">Schedule Service →</a>
    <div class="mobile-drawer-contact">
      <a href="tel:+17047755053">📞 +1 (704) 775-5053</a>
      <a href="mailto:info@wastelimna.com">✉️ info@wastelimna.com</a>
    </div>
  </div>
</div>
<div class="mobile-overlay" id="mobileOverlay"></div>`;

const NAV_HOME_HTML = `
<nav class="navbar">
  <a href="index.html" class="nav-logo">${LOGO_IMG('.')}</a>
  <ul class="nav-links">
    <li><a href="index.html" class="active">Home</a></li>
    <li><a href="pages/about.html">About</a></li>
    <li><a href="pages/services.html">Services</a></li>
    <li><a href="pages/business.html">Business Waste</a></li>
    <li><a href="pages/recycling.html">Recycling</a></li>
    <li><a href="pages/charity.html">Charity</a></li>
    <li><a href="pages/contact.html">Contact</a></li>
  </ul>
  <a href="pages/contact.html" class="nav-cta">Schedule Service</a>
  <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
    <span class="ham-bar"></span>
    <span class="ham-bar"></span>
    <span class="ham-bar"></span>
  </button>
</nav>
<!-- Mobile drawer -->
<div class="mobile-drawer" id="mobileDrawer">
  <div class="mobile-drawer-inner">
    <div class="mobile-drawer-logo">${LOGO_IMG('.')}</div>
    <ul class="mobile-nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="pages/about.html">About</a></li>
      <li><a href="pages/services.html">Services</a></li>
      <li><a href="pages/business.html">Business Waste</a></li>
      <li><a href="pages/recycling.html">Recycling</a></li>
      <li><a href="pages/charity.html">Charity</a></li>
      <li><a href="pages/contact.html">Contact</a></li>
    </ul>
    <a href="pages/contact.html" class="mobile-cta">Schedule Service →</a>
    <div class="mobile-drawer-contact">
      <a href="tel:+17047755053">📞 +1 (704) 775-5053</a>
      <a href="mailto:info@wastelimna.com">✉️ info@wastelimna.com</a>
    </div>
  </div>
</div>
<div class="mobile-overlay" id="mobileOverlay"></div>`;

const FOOTER_HTML = (prefix='..') => `
<div class="cta-strip">
  <div class="cta-strip-inner">
    <div>
      <h3>Need service today?</h3>
      <p>Get in touch or schedule a collection. We're here to help.</p>
    </div>
    <a href="${prefix}/pages/contact.html" class="btn btn-dark" style="white-space:nowrap">Schedule Service →</a>
  </div>
</div>
<footer class="footer">
  <div class="footer-main">
    <div class="footer-brand">
      <a href="${prefix}/index.html" class="nav-logo" style="text-decoration:none">
        <img src="${prefix}/WE-white.png" alt="WastElimna Logo" style="height:68px;width:auto;display:block"/>
      </a>
      <p>Delivering innovative waste management solutions that protect the environment, support communities, and build a cleaner future.</p>
      <div class="footer-social" style="margin-top:20px">
        <a href="#" aria-label="Facebook">f</a>
        <a href="#" aria-label="Twitter">t</a>
        <a href="#" aria-label="Instagram">in</a>
        <a href="#" aria-label="LinkedIn">li</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Pages</h4>
      <ul>
        <li><a href="${prefix}/index.html">Home</a></li>
        <li><a href="${prefix}/pages/about.html">About Us</a></li>
        <li><a href="${prefix}/pages/services.html">Services</a></li>
        <li><a href="${prefix}/pages/business.html">Business Waste</a></li>
        <li><a href="${prefix}/pages/recycling.html">Recycling</a></li>
        <li><a href="${prefix}/pages/charity.html">Charity</a></li>
        <li><a href="${prefix}/pages/contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="#">Residential Waste</a></li>
        <li><a href="#">Commercial Waste</a></li>
        <li><a href="#">Recycling</a></li>
        <li><a href="#">Hazardous Waste</a></li>
        <li><a href="#">Skip Hire</a></li>
        <li><a href="#">Bulk Collections</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:info@wastelimna.com">info@wastelimna.com</a></li>
        <li><a href="tel:+17047755053">+1 (704) 775-5053</a></li>
        <li><a href="#">138 Abercorne Way Unit. D, Mooresville, NC 28115</a></li>
        <li><a href="${prefix}/pages/contact.html">Get a Quote</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 WastElimna. All rights reserved.</span>
    <span>Smart Waste Management</span>
  </div>
</footer>`;

// ─── INJECT NAV & FOOTER ───
document.addEventListener('DOMContentLoaded', () => {
  const isHome = !location.pathname.includes('/pages/');
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = isHome ? NAV_HOME_HTML : NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML(isHome ? '.' : '..');
});
