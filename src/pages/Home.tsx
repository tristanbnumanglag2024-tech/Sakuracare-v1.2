import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, HeartHandshake, House, Users, Sparkles } from 'lucide-react'
import { image, services } from '../data'

export default function Home() {
  return <>
    <main className="home-page">
      <section className="hero-wrap">
        <div className="hero-title"><h1>Where every life<br/><em>blooms with care.</em></h1><p>Personalised support. Meaningful connections. A life lived your way.</p></div>
        <div className="hero-grid">
          <div className="hero-photo" style={{backgroundImage:`linear-gradient(90deg,rgba(30,25,30,.56),rgba(30,25,30,.05)),url(${image.hero})`}}>
            <span className="eyebrow light">SUPPORT THAT MOVES WITH YOU</span><h2>Out and about.</h2><p>Community access and support to make every day yours.</p><Link className="btn btn-white" to="/services">Explore support <ArrowUpRight size={15}/></Link>
          </div>
          <div className="hero-tile tile-blue"><span className="eyebrow">YOUR PLACE. YOUR PACE.</span><h2>A hand<br/>at home.</h2><img src={image.home}/><Link to="/services" className="round-link">In-home support <ArrowUpRight size={14}/></Link></div>
          <div className="hero-tile tile-pink"><span className="eyebrow">YOUR NEXT CHAPTER</span><h2>Your own<br/>space.</h2><img src={image.worker}/><Link to="/services" className="round-link">Independent living <ArrowUpRight size={14}/></Link></div>
          <div className="hero-photo hero-photo-wide" style={{backgroundImage:`linear-gradient(90deg,rgba(30,25,30,.58),rgba(30,25,30,.05)),url(${image.community})`}}><span className="eyebrow light">SUPPORT WORKERS. REAL RELATIONSHIPS.</span><h2>Your kind<br/>of people.</h2><p>Good support starts with a genuine connection.</p><Link className="btn btn-white" to="/about">Meet our people <ArrowUpRight size={15}/></Link></div>
          <div className="hero-story"><span className="eyebrow">ROOM TO BE YOURSELF</span><h2>Make room<br/>for what matters.</h2><p>We believe support should help you live a life that feels like yours.</p><Link to="/about" className="text-link">Our approach <ArrowRight size={15}/></Link></div>
          <div className="hero-chat"><Sparkles/><h2>Let’s find<br/>your Sakura.</h2><p>Tell us what matters to you. We’ll help you take the next step.</p><Link to="/contact" className="btn btn-white">Let’s talk <ArrowUpRight size={15}/></Link></div>
        </div>
      </section>
      <section className="intro-strip"><p>Looking for a support worker or a more independent way of living? We can talk about the right support for you, your goals and what matters most.</p><Link to="/locations">Find a location <ArrowUpRight size={14}/></Link></section>
      <section className="support-section section-pad"><div className="section-heading"><span className="eyebrow">HERE WHEN YOU NEED US</span><h2>Support that fits your life.</h2><p>Thoughtful, practical support to help you feel confident, connected and at home.</p></div><div className="service-preview">{services.slice(0,3).map((s,i)=><article className="preview-card" key={s.id}><img src={s.image}/><div><span className="eyebrow">0{i+1} / SUPPORT</span><h3>{s.title}</h3><p>{s.tagline}</p><Link to="/services" className="text-link">Explore service <ArrowUpRight size={14}/></Link></div></article>)}</div><div className="center"><Link to="/services" className="btn btn-orange">View all support <ArrowUpRight size={15}/></Link></div></section>
      <section className="values-band"><div className="section-heading"><span className="eyebrow">THE SAKURA DIFFERENCE</span><h2>Good care starts with seeing you.</h2><p>We bring kindness, respect and a little more possibility to every day.</p></div><div className="value-grid"><div><HeartHandshake/><h3>Care with heart</h3><p>People first, always. We listen and shape support around you.</p></div><div><House/><h3>Independence</h3><p>Support that builds confidence and creates room to grow.</p></div><div><Users/><h3>Belonging</h3><p>Real connections and meaningful participation in community.</p></div></div></section>
      <section className="careers-banner"><div><span className="eyebrow">MAKE A DIFFERENCE WITH US</span><h2>A career with<br/>care at its heart.</h2><p>Bring your skills, your warmth and your whole self. Help people live life their way.</p><Link className="btn btn-orange" to="/careers">Explore careers <ArrowUpRight size={15}/></Link></div><img src={image.about}/></section>
    </main>
  </>
}