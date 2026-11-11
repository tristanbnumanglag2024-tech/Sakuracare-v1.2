
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Home,
  Briefcase,
  Heart,
  Users,
  GraduationCap,
  HandHeart,
  Plane,
  BedDouble,
  Stethoscope,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'
import { services } from '../data'

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  briefcase: Briefcase,
  heart: Heart,
  users: Users,
  graduationcap: GraduationCap,
  handheart: HandHeart,
  plane: Plane,
  bed: BedDouble,
  stethoscope: Stethoscope,
}

export default function Services() {
  return (
    <main className="inner-page services-page">

      {/* HERO */}
      <section className="page-hero">
        <span className="eyebrow">OUR SUPPORT</span>

        <h1>
          Support for your<br />
          <em>kind of life.</em>
        </h1>

        <p>
          Explore our services and find the support that feels right for you.
        </p>
      </section>

      {/* SERVICES */}
      <section className="service-list">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon?.toLowerCase()] || Home

          return (
            <article
  className={`service-row ${i % 2 ? 'reverse' : ''}`}
  key={s.id}
>

              {/* IMAGE LEFT */}
              <div className="service-image">
                <img
                  src={s.image || '/background.png'}
                  alt={s.title}
                  loading={i > 1 ? 'lazy' : 'eager'}
                />

                <div className="service-icon">
                  <Icon size={30} strokeWidth={1.8} />
                </div>
              </div>

              {/* CONTENT RIGHT */}
              <div className="service-content">
                <span className="eyebrow">
                  {String(i + 1).padStart(2, '0')} / SAKURA CARE SUPPORT
                </span>

                <h2>{s.title}</h2>

                <h3>{s.tagline}</h3>

                <p>{s.description}</p>

                {s.features && s.features.length > 0 && (
                  <ul className="service-features">
                    {s.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                )}

                <Link className="text-link" to="/contact">
                  Talk to our team
                  <ArrowUpRight size={15} />
                </Link>
              </div>

            </article>
          )
        })}
      </section>

    </main>
  )
}
