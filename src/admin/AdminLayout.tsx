import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LayoutDashboard, BriefcaseBusiness, MapPin, Mail, Users, FileText, LogOut, Menu, X, Flower2 } from 'lucide-react'

const links = [
  {to:'/admin/dashboard', label:'Dashboard', icon:LayoutDashboard},
  {to:'/admin/services', label:'Services', icon:BriefcaseBusiness},
  {to:'/admin/locations', label:'Locations', icon:MapPin},
  {to:'/admin/enquiries', label:'Enquiries', icon:Mail},
  {to:'/admin/referrals', label:'Referrals', icon:FileText},
  {to:'/admin/careers', label:'Career applications', icon:Users},
]
export default function AdminLayout(){
  const [mobileOpen,setMobileOpen]=useState(false)
  const navigate=useNavigate()
  const logout=()=>{sessionStorage.removeItem('sakura-admin-demo');navigate('/admin/login')}
  return <div className="admin-shell">
    <aside className={`admin-sidebar ${mobileOpen?'show':''}`}>
      <div className="admin-brand"><span className="brand-mark">S</span><span>SAKURA CARE</span><button className="admin-mobile-close" onClick={()=>setMobileOpen(false)}><X/></button></div>
      <nav>{links.map(({to,label,icon:Icon})=><NavLink key={to} to={to} onClick={()=>setMobileOpen(false)} className={({isActive})=>isActive?'admin-nav active':'admin-nav'}><Icon size={18}/>{label}</NavLink>)}</nav>
      <div className="admin-sidebar-bottom"><button onClick={logout}><LogOut size={18}/> Logout</button><small>Sakura Care Admin · Demo</small></div>
    </aside>
    <main className="admin-main">
      <header className="admin-topbar"><button className="admin-mobile-menu" onClick={()=>setMobileOpen(true)}><Menu/></button><div><span className="eyebrow">SAKURA CARE / ADMIN</span><b>Administration</b></div><div className="admin-top-actions"><span className="admin-user"><span>SC</span> Admin</span><button className="admin-logout-top" onClick={logout}>Logout</button></div></header>
      <div className="admin-content"><Outlet/></div>
    </main>
  </div>
}