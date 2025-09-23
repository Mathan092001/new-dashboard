import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { RiArrowLeftSLine, RiOrganizationChart } from "react-icons/ri";
import { IoLogoBitbucket } from "react-icons/io";
import { GrTask } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Task from '../task/task';
import Tasks from '../tasks-page/tasks';
import TimeLog from '../Time-Log/TimeLog';
import Res from '../resource-mngmt/Res';
import Users from '../users/Users';
import Project from '../project/Project';
import Pref from '../preference/Pref';


function Dashboard() {

  const [navOpen, setNavOpen] = useState(true);
  const [active, setActive] = useState("dashboard")

  return (
    <section className='md:w-[100vw] md:h-[100vh] flex justify-center items-center bg-black text-gray-300'>
        <div className='bg-slate-800 p-3 w-auto rounded-[0.8vw]'>
            <div className='flex bg-gray-950 rounded-[0.8vw]'>
                <div className={`${navOpen ? "md:w-[12vw] w-[20vw] duration-300" : "md:w-[5vw] w-[15vw] duration-300"} z-[9999] bg-slate-900 relative h-auto flex md:justify-evenly rounded-[0.8vw] px-3 py-5`} >
                    <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-10'>
                    <div className='flex flex-col justify-center items-center gap-10'>
                    <div className={`${navOpen ? "w-[10.5vw] duration-300" : "md:w-[3vw] duration-300"} overflow-hidden whitespace-nowrap transition-all duration-300 flex gap-2 items-center`}>
                       <i className='text-blue-600 md:text-[2.5vw] text-[8vw]'><IoLogoBitbucket/></i>
                       {navOpen && <h1 className='font-bold md:text-[1.2vw] '>Manage Pro</h1>}
                    </div>
                    <div className={`${navOpen ? "w-[10.5vw] duration-300" : "md:w-[3vw] duration-300"} transition-all duration-300 bg-gray-700 cursor-pointer p-2 rounded-full flex gap-2 items-center overflow-hidden`}>
                       <i className='text-gray-300 bg-blue-700 rounded-full md:p-2 p-1 text-[3vw] md:text-[1.3vw]'><FaPlus/></i>
                       {navOpen && <h1 className={`transition-all duration-300 text-[0.8vw] font-semibold whitespace-nowrap`}>Creat a new Project</h1>}
                    </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                    <div  onClick={() => setActive("dashboard")} className={ `${navOpen ? "w-[10.5vw] duration-300 " : "md:w-[3vw] duration-300"} ${active === "dashboard" && "overflow-hidden whitespace-nowrap bg-slate-950  md:text-[0.9vw] cursor-pointer font-semibold text-blue-600 md:px-4 md:py-3 px-3 py-2 rounded-lg flex justify-start gap-2 items-center"} overflow-hidden whitespace-nowrap hover:bg-slate-950 hover:text-blue-600 md:text-[0.9vw] text-[5vw] cursor-pointer font-semibold md:px-4 md:py-3 rounded-lg flex justify-start gap-2 items-center`}>
                       <i className='md:text-[1.3vw]'><RxDashboard/></i>
                       {navOpen && <h2 className='transition-transform md:duration-300 hover:translate-x-2 '>Dashboard</h2>}
                    </div>
                    <div  onClick={() => setActive("task")} className={ `${navOpen ? "w-[10.5vw]  duration-300" : "md:w-[5vw] duration-300"} ${active === "task" && "overflow-hidden whitespace-nowrap bg-slate-950  md:text-[0.9vw] cursor-pointer font-semibold text-blue-600 md:px-4 md:py-3 px-3 py-2 rounded-lg flex justify-start gap-2 items-center"} overflow-hidden whitespace-nowrap hover:bg-slate-950 hover:text-blue-600  md:text-[0.9vw] text-[5vw] cursor-pointer font-semibold md:px-4 md:py-3 rounded-lg flex justify-start gap-2 items-center`}>
                       <i className='md:text-[1.3vw]'><GrTask/></i>
                       {navOpen && <h2 className='transition-transform duration-300 hover:translate-x-2'>Tasks</h2>}
                    </div>
                    <div onClick={() => setActive("timelog")} className={ `${navOpen ? "w-[10.5vw] duration-300" : "md:w-[3vw] duration-300"} ${active === "timelog" && "overflow-hidden whitespace-nowrap bg-slate-950  md:text-[0.9vw] cursor-pointer font-semibold text-blue-600 md:px-4 md:py-3 px-3 py-2 rounded-lg flex justify-start gap-2 items-center"} overflow-hidden whitespace-nowrap hover:bg-slate-950 hover:text-blue-600  md:text-[0.9vw] text-[5vw] cursor-pointer font-semibold md:px-4 md:py-3 rounded-lg flex justify-start gap-2 items-center`}>
                       <i className='md:text-[1.3vw]'><MdOutlineAccessTime/></i>
                       {navOpen && <h2  className='transition-transform duration-300 hover:translate-x-2'>Time Log</h2>}
                    </div>
                    <div  onClick={() => setActive("resource")} className={ `${navOpen ? "w-[10.5vw] duration-300" : "md:w-[3vw] duration-300"} ${active === "resource" && "overflow-hidden whitespace-nowrap bg-slate-950  md:text-[0.9vw] cursor-pointer font-semibold text-blue-600 md:px-4 md:py-3 px-3 py-2 rounded-lg flex justify-start gap-2 items-center"} overflow-hidden whitespace-nowrap hover:bg-slate-950 hover:text-blue-600  md:text-[0.9vw] text-[5vw] cursor-pointer font-semibold md:px-4 md:py-3 rounded-lg flex justify-start gap-2 items-center`}>
                       <i className='md:text-[1.3vw]'><RiOrganizationChart/></i>
                       {navOpen && <h2 className='transition-transform duration-300 hover:translate-x-2'>Resource mgnt</h2>}
                    </div>
                    <div  onClick={() => setActive("users")} className={ `${navOpen ? "w-[10.5vw] duration-300" : "md:w-[3vw] duration-300"} ${active === "users" && "overflow-hidden whitespace-nowrap bg-slate-950  md:text-[0.9vw] cursor-pointer font-semibold text-blue-600 md:px-4 md:py-3 px-3 py-2 rounded-lg flex justify-start gap-2 items-center"} overflow-hidden whitespace-nowrap hover:bg-slate-950 hover:text-blue-600  md:text-[0.9vw] text-[5vw] cursor-pointer font-semibold md:px-4 md:py-3 rounded-lg flex justify-start gap-2 items-center`}>
                       <i className='md:text-[1.3vw]'><FaUsers/></i>
                       {navOpen && <h2 className='transition-transform duration-300 hover:translate-x-2'>Users</h2>}
                    </div>
                    <div  onClick={() => setActive("project")} className={ `${navOpen ? "w-[10.5vw] duration-300" : "md:w-[3vw] duration-300"} ${active === "project" && "overflow-hidden whitespace-nowrap bg-slate-950  md:text-[0.9vw] cursor-pointer font-semibold text-blue-600 md:px-4 md:py-3 px-3 py-2 rounded-lg flex justify-start gap-2 items-center"} overflow-hidden whitespace-nowrap hover:bg-slate-950 hover:text-blue-600  md:text-[0.9vw] text-[5vw] cursor-pointer font-semibold md:px-4 md:py-3 rounded-lg flex justify-start gap-2 items-center`}>
                       <i className='md:text-[1.3vw]'><HiOutlineSquare3Stack3D/></i>
                       {navOpen && <h2 className='transition-transform duration-300 hover:translate-x-2'>Project template</h2>}
                    </div>
                    <div onClick={() => setActive("preference")} className={ `${navOpen ? "w-[10.5vw] duration-300" : "md:w-[3vw] duration-300"} ${active === "preference" && "overflow-hidden whitespace-nowrap bg-slate-950  md:text-[0.9vw] cursor-pointer font-semibold text-blue-600 md:px-4 md:py-3 px-3 py-2 rounded-lg flex justify-start gap-2 items-center"} overflow-hidden whitespace-nowrap hover:bg-slate-950 hover:text-blue-600  md:text-[0.9vw] text-[5vw] cursor-pointer font-semibold md:px-4 md:py-3 rounded-lg flex justify-start gap-2 items-center`}>
                       <i className='md:text-[1.3vw]'><IoSettingsOutline/></i>
                       {navOpen && <h2 className='transition-transform duration-300 hover:translate-x-2'>Preference</h2>}
                    </div>
                    </div>
                    </div>
                    <div className='flex p-3 '>
                      <i className='bg-blue-600 text-[1.8vw] p-2 rounded-full'><AiOutlineQuestionCircle/></i>
                    </div>
                    </div>
                    <button onClick={() => setNavOpen(!navOpen)} className={`${!navOpen ? "rotate-180 duration-[0.5s]" : "rotate-0 duration-[0.5s]"} border border-gray-400 cursor-pointer absolute top-8 right-[-0.8rem] md:text-[1vw] bg-gray-700 p-[0.1vw] rounded-full hover:bg-gray-600 hover:text-white`}><RiArrowLeftSLine/></button>
                </div>
                <div>
                  {active === "dashboard" && <Task/>}
                  {active === "task" && <Tasks/>}
                  {active === "timelog" && <TimeLog/>}
                  {active === "resource" && <Res/>}
                  {active === "users" && <Users/>}
                  {active === "project" && <Project/>}
                  {active === "preference" && <Pref/>}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard