
export interface Service {
  id: number
  title: string
  tagline: string
  description: string
  icon: string
  image: string
  features?: string[]
}

export const services: Service[] = [
  {
    id: 1,
    title: 'We Provide Accommodation (SIL)',
    tagline: 'Supporting independence through safe and comfortable supported living.',
    description: 'At Sakura Care, we provide a supportive and nurturing environment in supported independent living, where every participant is treated with dignity and respect.',
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900'
  },
  {
    id: 2,
    title: 'Community Participation',
    tagline: 'Supporting individuals to connect, participate, and thrive within their community.',
    description: 'We support meaningful community participation by creating opportunities to explore interests, build relationships and enjoy everyday activities.',
    icon: 'users',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900'
  },
  {
    id: 3,
    title: 'Travel Assistance',
    tagline: 'Helping you travel safely, comfortably, and with confidence.',
    description: 'We make your journeys easier, with dependable support every step of the way so you can travel with confidence and peace of mind.',
    icon: 'plane',
    image: 'https://images.unsplash.com/photo-1576765608866-5b51046452b4?w=900'
  },
  {
    id: 4,
    title: 'Short Term Accommodation',
    tagline: 'Providing trusted care while you take time to rest and recharge.',
    description: 'A welcoming place to relax, refresh and enjoy a change of scenery while receiving the support you need.',
    icon: 'bed',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900'
  },
  {
    id: 5,
    title: 'Daily Living Assistance',
    tagline: 'Supporting independence through compassionate everyday care.',
    description: 'Our assistance with daily living is designed to support routines, foster independence and build confidence while ensuring personalised care.',
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f21?w=900'
  },
  {
    id: 6,
    title: 'Community Nursing',
    tagline: 'Professional nursing care delivered with compassion in the comfort of your home.',
    description: 'Our community nursing care provides expert medical support in the comfort of your home, with experienced nurses who have your wellbeing and independence in mind.',
    icon: 'stethoscope',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900'
  },
  {
    id: 7,
    title: 'Innovative Community Participation',
    tagline: 'Empowering individuals to participate, grow, and belong.',
    description: 'We foster innovative community participation by creating inclusive programs that empower people to explore interests and build a sense of belonging.',
    icon: 'handheart',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900'
  },
  {
    id: 8,
    title: 'Development of Life Skills',
    tagline: 'Supporting individuals to develop skills for everyday living.',
    description: 'We help individuals build essential skills and confidence to reach their personal goals.',
    icon: 'graduationcap',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900'
  },
  {
    id: 9,
    title: 'Household Task',
    tagline: 'Making everyday household tasks easier and stress-free.',
    description: 'Practical support with household tasks, including cleaning, cooking and organising to help create a comfortable and manageable living environment.',
    icon: 'briefcase',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=900'
  }
]
export const locations = [
  { id: 1, name: '28 Musk Duck Avenue Chiton', address: 'Musk Duck Avenue, Chiton, South Australia, 5211, Australia' },
  { id: 2, name: '4 Roberts Crescent, Smithfield Plains', address: 'Roberts Crescent, Smithfield Plains, Adelaide, South Australia, 5114, Australia' },
  { id: 3, name: '7 Rosalie Terrace, Parafield Gardens', address: 'Rosalie Terrace, Parafield Gardens, South Australia, 5107, Australia' }
]
export const image = {
  hero: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1400',
  home: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
  community: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200',
  worker: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200',
  about: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200'
}