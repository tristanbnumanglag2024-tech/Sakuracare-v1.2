import { createContext, useContext, useState } from 'react'
import { services as initialServices, locations as initialLocations } from '../data'
export type AdminService = {id:number;title:string;tagline:string;description:string;category:string;image:string}
export type AdminLocation = {id:number;name:string;address:string;map:string}
export type AdminMessage = {id:number;name:string;email:string;phone:string;date:string;message:string;status:'Unread'|'Read'|'Replied'}
export type AdminApplication = {id:number;name:string;email:string;phone:string;role:string;date:string;status:string}
const initialMessages:AdminMessage[]=[
{id:1,name:'Shiva Ranjbar',email:'shivaranjbar19@yahoo.com.au',phone:'0452560782',date:'29 Sept 2026, 06:16 am',message:'Hi, I am interested in support services and would like to know more about the available opportunities. Thank you for considering my enquiry.',status:'Unread'},
{id:2,name:'Emma Wilson',email:'emma.wilson@example.com',phone:'0412345678',date:'02 Oct 2026, 10:24 am',message:'I would like to ask about community participation and daily living support for a family member.',status:'Read'},
{id:3,name:'Daniel Lee',email:'daniel.lee@example.com',phone:'0400123456',date:'04 Oct 2026, 02:10 pm',message:'Could someone contact me about your accommodation options?',status:'Unread'}
]
const initialApps:AdminApplication[]=[
{id:1,name:'Alex Morgan',email:'alex.morgan@example.com',phone:'0411222333',role:'Disability Support Worker',date:'06 Nov 2026',status:'New'},
{id:2,name:'Taylor Smith',email:'taylor.smith@example.com',phone:'0400111222',role:'Community Support',date:'05 Nov 2026',status:'Reviewing'}
]
type Store={services:AdminService[];setServices:(v:AdminService[])=>void;locations:AdminLocation[];setLocations:(v:AdminLocation[])=>void;messages:AdminMessage[];setMessages:(v:AdminMessage[])=>void;applications:AdminApplication[];setApplications:(v:AdminApplication[])=>void}
const Ctx=createContext<Store|null>(null)
export function AdminProvider({children}:{children:React.ReactNode}){
 const [services,setServices]=useState<AdminService[]>(initialServices.map(s=>({...s,category:'Home'})))
 const [locations,setLocations]=useState<AdminLocation[]>(initialLocations.map(l=>({...l,map:''})))
 const [messages,setMessages]=useState(initialMessages)
 const [applications,setApplications]=useState(initialApps)
 return <Ctx.Provider value={{services,setServices,locations,setLocations,messages,setMessages,applications,setApplications}}>{children}</Ctx.Provider>
}
export function useAdmin(){const c=useContext(Ctx);if(!c)throw new Error('AdminProvider missing');return c}
