import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Header, Footer } from './components/Site'
import { AdminProvider } from './admin/AdminData'
import AdminLayout from './admin/AdminLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Referral from './pages/Referral'
import Locations from './pages/Locations'
import About from './pages/About'
import AdminLogin from './pages/admin/Login'
import AdminDashboard from './pages/admin/Dashboard'
import ManageServices from './pages/admin/Services'
import ManageLocations from './pages/admin/Locations'
import Enquiries from './pages/admin/Enquiries'
import { Referrals, CareersAdmin } from './pages/admin/Submissions'
function ScrollToTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null}
function ProtectedAdmin(){return sessionStorage.getItem('sakura-admin-demo')==='yes'?<AdminLayout/>:<Navigate to="/admin/login" replace/>}
function PublicLayout({children}:{children:React.ReactNode}){return <><Header/>{children}<Footer/></>}
export default function App(){return <AdminProvider><ScrollToTop/><Routes>
<Route path="/" element={<PublicLayout><Home/></PublicLayout>}/><Route path="/services" element={<PublicLayout><Services/></PublicLayout>}/><Route path="/contact" element={<PublicLayout><Contact/></PublicLayout>}/><Route path="/careers" element={<PublicLayout><Careers/></PublicLayout>}/><Route path="/referral" element={<PublicLayout><Referral/></PublicLayout>}/><Route path="/locations" element={<PublicLayout><Locations/></PublicLayout>}/><Route path="/about" element={<PublicLayout><About/></PublicLayout>}/>
<Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<ProtectedAdmin/>}><Route index element={<Navigate to="dashboard" replace/>}/><Route path="dashboard" element={<AdminDashboard/>}/><Route path="services" element={<ManageServices/>}/><Route path="locations" element={<ManageLocations/>}/><Route path="enquiries" element={<Enquiries/>}/><Route path="referrals" element={<Referrals/>}/><Route path="careers" element={<CareersAdmin/>}/></Route>
<Route path="*" element={<Navigate to="/" replace/>}/>
</Routes></AdminProvider>}