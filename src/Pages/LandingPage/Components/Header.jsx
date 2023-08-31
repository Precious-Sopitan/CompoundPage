import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../../Components/Button'
import Discord from '../../../Assets/Images/Discord.svg'
import Getstarted from '../../../Assets/Images/Getstarted.svg'
import OpenAI from '../../../Assets/Images/OpenAI.svg'
import Relog from '../../../Assets/Images/Relog.svg'
import Slack from '../../../Assets/Images/Slack.svg'
import Stripe from '../../../Assets/Images/Stripe.svg'




const Header = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <header className='h-[100svh]'>
        <nav className='flex items-center justify-between px-20 h-[7%]'>
            <div className='font-[neuton-800]'>compound</div>
            <ul className='flex items-center gap-12'>
              <NavLink to="#">Membership</NavLink>
              <NavLink to="#">Resources</NavLink>
              <NavLink to="#">Company</NavLink>
           </ul>
            <div className='flex items-center gap-5'>
              sign in
                <Button type='primary'>
                     Get started   
                </Button>

                {/* 'bg-black items-center gap-3 px-6 rounded-3xl text-white py-1 flex ' */}
            </div>
        </nav >
        <section className='h-[49%] p-36'>
          <h1 
          className={`text-black text-[3.5rem] ${isHovered ? "blur-sm"
           : "blur-0"} hover:transition-all`}
          onMouseOver={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(false)}>
          We focus on your finances</h1>

          
          <h1 className={`text- black text-[3.5rem] ${!isHovered ?  "blur-sm" : "blur-0 font-Neuton text-[4rem]"}
          hover:transition-all`}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(true)}>you focus on what matters most</h1>
        </section>

        <div className='flex items-center gap-8 px-20'>
          <Button type='primary'>Get Started</Button>
          <button className='text-black border  border- py-3 px-6 rounded-3xl flex  gap-3 '>Learn more</button>
        </div>

        <div className='flex items-center gap-5 p-20'>
          <div>
            <p className='w-[15rem]'>Wealth Management for people from leading tech companies</p>
          </div>
          <div className='flex gap-10'>
            <img src={Discord} alt="" />
            <img src={Getstarted} alt="" />
            <img src={OpenAI} alt="" />
            <img src={Relog} alt="" />
            <img src={Slack} alt="" />
            <img src={Stripe} alt="" />
          </div>
        </div>
    </header>
  )
}

export default Header