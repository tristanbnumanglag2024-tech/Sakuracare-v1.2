import { useState } from 'react'
import { LockKeyhole, Flower2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
export default function AdminLogin(){
 const [username,setUsername]=useState(''),[password,setPassword]=useState(''),[error,setError]=useState('')
 const navigate=useNavigate()
 const submit=(e:React.FormEvent)=>{e.preventDefault();if(username.trim()&&password.trim()){sessionStorage.setItem('sakura-admin-demo','yes');navigate('/admin/dashboard')}else setError('Enter a username and password to continue.')}
 return <main className="admin-login-page"><div className="admin-login-card"><div className="login-icon"><LockKeyhole/></div><span className="eyebrow">SAKURA CARE ADMIN</span><h1>Welcome back.</h1><p>Sign in to manage your Sakura Care website.</p><form onSubmit={submit}><label>Username<input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Enter username" autoComplete="username"/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter password" autoComplete="current-password"/></label>{error&&<p className="admin-error">{error}</p>}<button className="btn btn-pink">Sign in</button></form><small><Flower2 size={13}/> Demo mode: any non-empty username and password</small></div></main>
}