import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FiArrowDownRight } from "react-icons/fi";
import { TiShoppingBag } from "react-icons/ti";
import { MdOutlineAccessTime } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

import image1 from '../../assets/image-1.jpg'
import image2 from '../../assets/image-2.jpg'
import image3 from '../../assets/image-3.jpg'
import image4 from '../../assets/image-4.jpg'
import image5 from '../../assets/image-5.jpg'


function Task({ percentage }) {
  
  const radius = 120;
  const strokeWidth = 15;
  const center = radius + strokeWidth;
  const circumference = Math.PI * radius;


  const arcLength = (percentage / 100) * circumference;

  const [bar, setBar] = useState("Important")
  localStorage.setItem("bar", bar)

  return (
    <div className='flex flex-col gap-3 p-4 md:h-auto '>
        <div className='md:flex gap-3'>
          <div className='flex justify-between items-center md:w-[45vw]'>
            <h1 className='md:text-[1.2vw] text-[4vw] font-semibold'>Dashboard</h1>
            <div className='relative flex justify-end items-center'>
                <input className='md:w-[20vw] w-[40vw] border-[2px] md:text-[0.8vw] text-[2vw] font-semibold border-slate-950 focus:border-[2px] focus:outline-none focus:border-blue-700 bg-slate-700 rounded-full px-2 py-2 md:px-5 md:py-3' placeholder='Search for anything . . .' type="text" />
                <i className='absolute mr-5 md:text-[0.9vw] text-[3vw]'><FaSearch/></i>
            </div>
          </div>
          <div className='md:flex flex gap-3'>
            <div className='relative flex justify-end items-center cursor-pointer'>
               <i className='bg-slate-700 md:text-[1.2vw] md:p-3.5 p-2 rounded-full'><IoNotificationsOutline/></i>
               <span className='absolute bg-red-700 rounded-[100%] text-white font-semibold top-0 md:text-[0.6vw] text-[3vw] md:px-[0.3vw] px-[1.5vw]'>8</span>
            </div>
            <div className='md:w-[10vw] flex bg-slate-700 rounded-full justify-evenly items-center gap-4 pr-2 cursor-pointer'>
                <div className='flex gap-2'>
                <img className='md:w-[2.7vw] w-[10vw] h-[4vh] rounded-full' src={image1} alt="" />
                <div>
                    <h1 className='md:text-[0.8vw] text-[3vw] font-bold'>John Doe</h1>
                    <p className='md:text-[0.6vw] text-[2.5vw] text-gray-400 font-semibold'>Project Manager</p>
                </div>
                </div>
                <i><IoIosArrowDown/></i>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center px-2'>
          <h1 className='md:text-[1vw] text-[3.5vw] font-semibold text-gray-400'>Overview</h1>
          <div className='flex justify-center items-center gap-2 bg-slate-700 rounded-full px-4 py-1 cursor-pointer'>
            <h2 className='md:text-[0.7vw] text-[3vw] font-semibold'>Last 30 days</h2>
            <i><IoIosArrowDown/></i>
          </div>
        </div>
        <div className='md:flex md:justify-between'>
          <div className='bg-orange-200 md:mb-0 mb-3 bg-opacity-30 bg-brightness-50 md:w-[14vw] p-5 flex flex-col gap-1 rounded-[0.8vw]'>
            <div className='bg-orange-500 bg-opacity-40 bg-brightness-50 rounded-full w-14 h-14 flex justify-center items-center'><i className='md:text-[1.5vw] text-[8vw] opacity-90'><HiOutlineChartBar/></i></div>
            <p className='font-normal opacity-70'>Total revenue</p>
            <h1 className='md:text-[1.5vw] font-semibold'>$73,10989</h1>
            <div className='flex items-center gap-1 opacity-100 md:text-[0.7vw] text-[3vw] font-semibold '>
              <i className='text-green-500 md:text-[0.9vw]'><RiArrowRightUpLine/></i>
              <p>12% increase from last month</p>
            </div>
          </div>
          <div className='bg-green-200 md:mb-0 mb-3 bg-opacity-30 bg-brightness-50 md:w-[14vw] p-5 flex flex-col gap-1 rounded-[0.8vw]'>
            <div className='bg-green-500 bg-opacity-40 bg-brightness-50 rounded-full w-14 h-14 flex justify-center items-center'><i className='md:text-[1.5vw] text-[8vw] opacity-90'><TiShoppingBag/></i></div>
            <p className='font-normal opacity-70'>Projects</p>
            <div className='flex items-end gap-1'>
                <h1 className='md:text-[1.5vw] font-semibold '>89 </h1>
                <p className='md:text-[0.8vw] font-semibold mb-[0.3vw]'>/100</p>
            </div>
            <div className='flex items-center gap-1 opacity-100 md:text-[0.7vw] text-[3vw] font-semibold '>
              <i className='text-red-500 md:text-[0.9vw]'><FiArrowDownRight/></i>
              <p>10% decrease from last month</p>
            </div>
          </div>
          <div className='bg-violet-200 md:mb-0 mb-3 bg-opacity-30 bg-brightness-50 md:w-[14vw] p-5 flex flex-col gap-1 rounded-[0.8vw]'>
            <div className='bg-violet-500 bg-opacity-40 bg-brightness-50 rounded-full w-14 h-14 flex justify-center items-center'><i className='md:text-[1.5vw] text-[8vw] opacity-90'><MdOutlineAccessTime/></i></div>
            <p className='font-normal opacity-70'>Time spent</p>
            <div className='flex items-end gap-1'>
                <h1 className='md:text-[1.5vw] font-semibold '>1123</h1>
                <p className='md:text-[0.8vw] font-semibold mb-[0.3vw]'>/1200 Hrs</p>
            </div>
            <div className='flex items-center gap-1 opacity-100 md:text-[0.7vw] text-[3vw] font-semibold '>
              <i className='text-green-500 md:text-[0.9vw]'><RiArrowRightUpLine/></i>
              <p>8% increase from last month</p>
            </div>
          </div>
          <div className='bg-blue-200 md:mb-0 mb-3 bg-opacity-30 bg-brightness-50 md:w-[14vw] p-5 flex flex-col gap-1 rounded-[0.8vw]'>
            <div className='bg-blue-500 bg-opacity-40 bg-brightness-50 rounded-full w-14 h-14 flex justify-center items-center'><i className='md:text-[1.5vw] text-[8vw] opacity-90'><AiOutlineUser/></i></div>
            <p className='font-normal opacity-70'>Resources</p>
            <div className='flex items-end gap-1'>
                <h1 className='md:text-[1.5vw] font-semibold '>99</h1>
                <p className='md:text-[0.8vw] font-semibold mb-[0.3vw]'>/320</p>
            </div>
            <div className='flex items-center gap-1 opacity-100 md:text-[0.7vw] text-[3vw] font-semibold '>
              <i className='text-green-500 md:text-[0.9vw]'><RiArrowRightUpLine/></i>
              <p>2% increase from last month</p>
            </div>
          </div>
        </div>
        <div className='md:flex gap-3'>
          <div className='flex md:mb-0 mb-3 flex-col md:w-[40vw] p-4 gap-2 bg-slate-900 rounded-[0.8vw]'>
              <h1 className='md:text-[0.9vw] font-bold text-gray-300'>Tasks</h1>
            <div className='flex justify-between text-gray-300 font-semibold md:text-[0.8vw] text-[2vw]'>
              <h2 className='md:w-[15vw] md:text-[0.7vw] text-[2.5vw]'>Tittle</h2>
            <div className='flex md:w-[27vw] w-[20vw] justify-evenly md:gap-16 gap-5 items-center md:pr-24 pr-28'>
                <h2 className='md:text-[0.7vw] text-[2.5vw]'>Assigned to</h2>
                <h2 className='md:text-[0.7vw] text-[2.5vw]'>Time Spent</h2>
                <h2 className='md:text-[0.7vw] text-[2.5vw]'>Status</h2>
            </div>
            </div>
              <hr className='w-full border-[0.1vw] border-gray-700' />
            <div className='flex justify-between md:text-[0.7vw] text-[2vw] font-normal text-gray-300'>
              <div className='flex flex-col gap-3'>
                <h2 className='md:w-[15vw]'>Coffee detail page</h2>
                <h2 className='md:w-[15vw]'>Drinking bottle graphics</h2>
                <h2 className='md:w-[15vw]'>App design and development</h2>
                <h2 className='md:w-[15vw]'>Poster illustration design</h2>
                <h2 className='md:w-[15vw]'>App UI design</h2>
                <h2 className='md:w-[15vw]'>App UI design</h2>
              </div>
              <div className='flex md:w-[27vw] w-[45vw] justify-between md:pr-20 items-center '> 
              <div className='flex flex-col gap-2'>
                <img className='md:w-[1.3vw] md:h-[2.5vh] w-[5vw] h-[2vh] border rounded-full' src={image1} alt="profile" />
                <div className='flex gap-1'>
                  <img className='md:w-[1.3vw] md:h-[2.5vh] w-[5vw] h-[2vh] border rounded-full' src={image2} alt="profile" />
                  <img className='md:w-[1.3vw] md:h-[2.5vh] w-[5vw] h-[2vh] border rounded-full -ml-3' src={image3} alt="profile" />
                </div>
                <div className='flex gap-1'>
                  <img className='md:w-[1.3vw] md:h-[2.5vh] w-[5vw] h-[2vh] border rounded-full' src={image4} alt="profile" />
                  <img className='md:w-[1.3vw] md:h-[2.5vh] h-[2vh] border rounded-full -ml-3' src={image5} alt="profile" />
                  <img className='md:w-[1.3vw] md:h-[2.5vh] h-[2vh] border rounded-full -ml-3' src={image1} alt="profile" />
                </div>
                <img className='md:w-[1.3vw] md:h-[2.5vh] w-[5vw] h-[2vh] border rounded-full' src={image2} alt="profile" />
                <img className='md:w-[1.3vw] md:h-[2.5vh] w-[5vw] h-[2vh] border rounded-full' src={image4} alt="profile" />
                <img className='md:w-[1.3vw] md:h-[2.5vh] w-[5vw] h-[2vh] border rounded-full' src={image1} alt="profile" />
              </div>
              <div className='flex flex-col gap-3'>
                <p>3hr 20min</p>
                <p>3hr 20min</p>
                <p>78hr 5min</p>
                <p>26hr 58min</p>
                <p>17hr 22min</p>
                <p>11hr 27min</p>
              </div>
              <div className='flex flex-col gap-3'>
                <p className='text-blue-600'><li>In Progress</li></p>
                <p className='text-green-500'><li>Completed</li></p>
                <p className='text-purple-500'><li>Pending</li></p>
                <p className='text-yellow-500'><li>Aproved</li></p>
                <p className='text-gray-500'><li>Rejected</li></p>
                <p className='text-gray-500'><li>Rejected</li></p>
              </div>
              </div>
            </div>
          </div>
          <div className='bg-slate-900 md:w-[19vw] w-[70vw] rounded-[0.8vw] p-4'>
              <div className='flex justify-between'>
                <h2 className='font-semibold'>Overall Progress</h2>
                <div className='bg-gray-400 cursor-pointer md:text-[0.7vw] text-[3vw] font-semibold text-black px-3 py-1 flex items-center gap-2 rounded-full'>
                  <h2>All</h2>
                  <i><IoIosArrowDown/></i>
                </div>
              </div>
              <div className="flex flex-col items-center  p-6 rounded-lg">
      <svg
        width={2 * (radius + strokeWidth)}
        height={radius + strokeWidth * 2}
        viewBox={`0 0 ${2 * (radius + strokeWidth)} ${radius + strokeWidth * 2}`}
      >
        
        <path
          d={`
            M ${strokeWidth},${center}
            A ${radius},${radius} 0 0 1 ${2 * radius + strokeWidth},${center}
          `}
          stroke="#222"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />

        
        <path
          d={`
            M ${strokeWidth},${center}
            A ${radius},${radius} 0 0 1 ${2 * radius + strokeWidth},${center}
          `}
          stroke="url(#gradientStroke)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength}, ${circumference}`}
          fill="none"
          strokeLinecap="round"
        />

        
        <defs>
          <linearGradient id="gradientStroke">
            <stop offset="0%" stopColor="#2E6F40" />   {/* Green */}
            <stop offset="35%" stopColor="#9d00d4" />  {/* Purple */}
            <stop offset="72%" stopColor="#20a7db" />  {/* Blue */}
          </linearGradient>
        </defs>
      </svg>

      
      <div className="-mt-20 text-center">
        <p className="text-gray-300 text-3xl font-bold">72%</p>
        <p className="text-gray-400 text-sm">Completed</p>
      </div>
    </div>
    <div className='flex justify-between font-semibold gap-2 opacity-80'>
      <div>
        <h2 className='md:text-[1vw] text-[4vw] text-gray-100'>95</h2>
        <p className='md:text-[0.6vw] text-[2.5vw]'>Total Projects</p>
      </div>
      <div>
        <h2 className='md:text-[1vw] text-[4vw] text-green-600'>26</h2>
        <p className='md:text-[0.6vw] text-[2.5vw]'>Completed</p>
      </div>
      <div>
        <h2 className='md:text-[1vw] text-[4vw] text-purple-700'>95</h2>
        <p className='md:text-[0.6vw] text-[2.5vw]'>Delayed</p>
      </div>
      <div>
        <h2 className='md:text-[1vw] text-[4vw] text-sky-400'>95</h2>
        <p className='md:text-[0.6vw] text-[2.5vw]'>On going</p>
      </div>
    </div>
          </div>
        </div>
        <div className='md:flex gap-3 '>
        <div className='flex md:mb-0 mb-3 flex-col md:w-[40vw] w-[70vw] p-4 gap-2 bg-slate-900 rounded-[0.8vw] font-semibold '>
          <h1>Today task</h1>
          <div className='flex md:gap-12 gap-1 md:px-3 md:text-[0.7vw] text-[2.8vw]'>
            <div className='flex md:gap-2 items-center'>
              <div className='flex flex-col items-center'>
                <h2 onClick={() => setBar("All")} className='cursor-pointer'>All</h2>
                {bar === "All" && <hr className='md:w-[2vw] w-[12vw] border-[0.1vw] border-blue-600 absolute md:mt-7 mt-[6vw]' />}
              </div>
              <p className='text-blue-600 md:text-[0.7vw] bg-gray-800 px-1 rounded-full'>12</p>
            </div>
            <div className='flex flex-col items-center'>
                <h2 onClick={() => setBar("Important")} className='cursor-pointer'>Important</h2>
                {bar === "Important" && <hr className='md:w-[5vw] w-[12vw] border-[0.1vw] border-blue-600 absolute md:mt-7 mt-[6vw]' />}
            </div>
            <div className='flex gap-2 items-center'>
              <div className='flex flex-col items-center'>
                  <h2 onClick={() => setBar("Notes")} className='cursor-pointer'>Notes</h2>
                  {bar === "Notes" && <hr className='md:w-[5vw] w-[12vw] border-[0.1vw] border-blue-600 absolute md:mt-7 mt-[6vw]' />}
              </div>
              <p className='text-blue-600 md:text-[0.7vw] bg-gray-800 px-2 rounded-full'>8</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='flex flex-col items-center'>
                <h2 onClick={() => setBar("Linkes")} className='cursor-pointer'>Links</h2>
                {bar === "Linkes" && <hr className='md:w-[5vw] w-[12vw] border-[0.1vw] border-blue-600 absolute md:mt-7 mt-[6vw]' />}
              </div>
              <p className='text-blue-600 md:text-[0.7vw] bg-gray-800 px-1 rounded-full'>10</p>
            </div>
          </div>
          <hr className='w-full border-[0.1vw] border-gray-700' />
          <div className='flex justify-between md:pr-5 '>
            <div className='flex gap-2 items-center'>
              <i className='bg-custom-purple px-1 py-1 rounded-[100%] md:text-[0.6vw] text-[1vw] text-gray-400'><TiTick/></i>
              <p className='md:text-[0.7vw] text-[2vw]'>Create a user flow of social application design</p>
            </div>
            <p className='md:text-[0.7vw] text-[1.5vw] bg-green-950 flex justify-center md:w-[5vw] items-center w-[12vw] py-1 rounded-[0.2rem] text-green-600'>Approved</p>
          </div>
          <div className='flex justify-between md:pr-5 '>
            <div className='flex gap-2 items-center'>
              <i className='bg-custom-purple px-1 py-1 rounded-[100%] md:text-[0.6vw] text-[1vw] text-gray-400'><TiTick/></i>
              <p className='md:text-[0.7vw] text-[2vw]'>Create a user flow of social application design</p>
            </div>
            <p className='md:text-[0.7vw] text-[1.5vw] bg-pink-300 opacity-70 flex justify-center items-center md:w-[5vw] w-[12vw] py-1 rounded-[0.2rem] text-pink-800'>In review</p>
          </div>
          <div className='flex justify-between md:pr-5 '>
            <div className='flex gap-2 items-center'>
              <i className='bg-custom-purple px-1 py-1 rounded-[100%] md:text-[0.6vw] text-[1vw] text-gray-400'><TiTick/></i>
              <p className='md:text-[0.7vw] text-[2vw]'>Landing page design for Fintech project of singapore</p>
            </div>
            <p className='md:text-[0.7vw] text-[1.5vw] bg-pink-300 opacity-70 flex justify-center items-center md:w-[5vw] w-[12vw] py-1 rounded-[0.2rem] text-pink-800'>In review</p>
          </div>
          <div className='flex justify-between md:pr-5 '>
            <div className='flex gap-2 items-center'>
              <i className='border border-gray-400 md:px-2 md:py-2 px-1 py-1 rounded-[100%]'></i>
              <p className='md:text-[0.7vw] text-[2vw]'>Interactive prototype for app screens of deltamine project</p>
            </div>
            <p className='md:text-[0.7vw] text-[1.5vw] bg-slate-600 opacity-70 flex justify-center items-center md:w-[5vw] w-[10vw] py-1 rounded-[0.2rem] text-gray-200'>On going</p>
          </div>
          <div className='flex justify-between md:pr-5 '>
            <div className='flex gap-2 items-center'>
              <i className='bg-custom-purple px-1 py-1 rounded-[100%] md:text-[0.6vw] text-[1vw] text-gray-400'><TiTick/></i>
              <p className='md:text-[0.7vw] text-[2vw]'>Create a user flow of social application design</p>
            </div>
            <p className='md:text-[0.7vw] text-[1.5vw] bg-green-950 flex justify-center items-center md:w-[5vw] w-[12vw] py-1 rounded-[0.2rem] text-green-600'>Approved</p>
          </div>
        </div>
        <div className='bg-slate-900 font-semibold md:w-[19vw] rounded-[0.8vw] p-4 flex flex-col gap-5'>
          <h1>Activities</h1>
          <div className='flex flex-col gap-3'>
          <div className='flex gap-3 px-3 items-start'>
            <img className='md:w-[1.6vw] w-[5vw] rounded-full ' src={image1} alt="" />
            <div>
                <h2 className='md:text-[0.7vw] text-[2.5vw]'>You have a bug that needs to be fixed.</h2>
                <p className='md:text-[0.6vw] text-[2vw] text-gray-500'>Just now</p>
            </div>
          </div>
          <div className='flex gap-3 px-3 items-start'>
            <img className='md:w-[1.6vw] w-[5vw]  rounded-full ' src={image2} alt="" />
            <div>
                <h2 className='md:text-[0.7vw] text-[2.5vw]'>Released new version.</h2>
                <p className='md:text-[0.6vw] text-[2vw] text-gray-500'>50 minutes ago</p>
            </div>
          </div>
          <div className='flex gap-3 px-3 items-start'>
            <img className='md:w-[1.6vw] w-[5vw]  rounded-full ' src={image3} alt="" />
            <div>
                <h2 className='md:text-[0.7vw] text-[2.5vw]'>Submitted a bug.</h2>
                <p className='md:text-[0.6vw] text-[2vw] text-gray-500'>12 hours ago</p>
            </div>
          </div>
          <div className='flex gap-3 px-3 items-start'>
            <img className='md:w-[1.6vw] w-[5vw]  rounded-full ' src={image4} alt="" />
            <div>
                <h2 className='md:text-[0.7vw] text-[2.5vw]'>Modified a data in page X.</h2>
                <p className='md:text-[0.6vw] text-[2vw] text-gray-500'>Today, 11.58 AM</p>
            </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Task
