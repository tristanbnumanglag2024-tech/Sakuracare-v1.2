import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ArrowUpRight, Menu, X, Flower2, Phone, Mail, MapPin } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  const [talk, setTalk] = useState(false)
  const navigate = useNavigate()
  const choose = (path: string) => { setTalk(false); setOpen(false); navigate(path) }
  return <>
    <div className="announcement"><Flower2 size={13}/> Your support. Your life. Your way. <button onClick={() => choose('/contact')}>Let’s talk</button></div>
    <header className="site-header">
   
<Link to="/" className="brand">
  <img
    src="/logo.png"
    alt="Sakura Care"
    className="site-logo"
  />
</Link>

      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <NavLink to="/services" onClick={() => setOpen(false)}>Our support</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>Our people</NavLink>
        <NavLink to="/locations" onClick={() => setOpen(false)}>Our community</NavLink>
        <a href="/#good-to-know" onClick={() => setOpen(false)}>Good to know</a>
      </nav>
      
   
<div className="header-actions">
  <a className="phone-pill" href="tel:1300928928">
    <Phone size={14}/> 1300 928 928
  </a>

  <button
    className="btn btn-orange"
    onClick={() => setTalk(true)}
  >
    Let’s talk <ArrowUpRight size={16}/>
  </button>
</div>

    </header>
    {talk && <div className="modal-backdrop" onClick={() => setTalk(false)}><div className="talk-modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setTalk(false)}><X/></button><span className="eyebrow">HOW CAN WE HELP?</span><h2>Let’s talk about what you need.</h2><p>Choose the option that best describes what you would like to do.</p><button className="choice-card" onClick={() => choose('/contact')}><span><b>General enquiry</b><small>Ask a question or request more information.</small></span><ArrowUpRight/></button><button className="choice-card" onClick={() => choose('/referral')}><span><b>Make a referral</b><small>Refer a participant and request a support quote.</small></span><ArrowUpRight/></button></div></div>}
  </>
}
export function Footer() {
  return <footer className="footer" id="good-to-know">
    <div className="footer-grid">
      <div><h3>Let’s talk about<br/>what you need.
      </h3>
      <a href="tel:1300928928">1300 928 928</a>
      <a href="mailto:info@sakuracare.com.au">info@sakuracare.com.au</a>
      <small>Monday to Friday, 9am to 5pm</small>
    <img src="/ndis-badge.png"alt="Registered NDIS Provider"className="provider-badge" />
      </div>
      <div><b>Your support</b><Link to="/services">At home</Link><Link to="/services">Out in the community</Link><Link to="/services">Living independently</Link><Link to="/services">All support services</Link><Link to="/contact">Get started</Link></div>
      <div><b>Your Sakura Care</b><Link to="/about">Our people</Link><Link to="/about">Our approach</Link><Link to="/locations">Where we work</Link><Link to="/careers">Careers</Link><Link to="/contact">Contact us</Link></div>
      <div><b>Good to know</b><Link to="/about">About us</Link><Link to="/contact">Your questions</Link><Link to="/contact">Feedback & complaints</Link><Link to="/careers">Join our team</Link></div>
    </div>
    <div className="footer-wordmark">SAKURA CARE </div>
    <div className="footer-bottom"><span>© 2026 Sakura Care. All rights reserved.</span><span>Privacy Policy　|　Terms of Service　|　Accessibility</span></div>
  </footer>
}
export function ContactDetails() {
  return <div className="contact-details">
    <div className="detail-row"><span><Phone/></span><div><b>Phone</b><a href="tel:1300928928">1300 928 928</a></div></div>
    <div className="detail-row"><span><Mail/></span><div><b>Email</b><a href="mailto:info@sakuracare.com.au">info@sakuracare.com.au</a></div></div>
    <div className="detail-row"><span><MapPin/></span><div><b>Location</b><p>Endeavour House, 3E/11 Fourth Avenue, Mawson Lakes SA 5095</p></div></div>
  </div>
}