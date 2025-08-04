import React, { useEffect, useState } from 'react'
import BannerImage from '../../assets/banner.jpg'

const Banner = () => {

    const initialTime = 5 * 60 * 60;
    const [timeLeft, setTimeLeft] =useState(()=>{
        const storeTime = localStorage.getItem('remainingTime');
        return storeTime && parseInt(storeTime, 10) > 0 ? 
        parseInt(storeTime, 10) : initialTime
    });

    const formatTime = (time)=>{

        useEffect(()=>{
            if(timeLeft <= 0) return

            const timer = setInterval(()=>{
                setTimeLeft(prev=>{
                    if(prev <= 1){
                    clearInterval(timer);
                    localStorage.setItem('remainingTime', 0)
                    return 0;
                }
                    const remainingTime = prev - 1
                    localStorage.setItem('remainingTime', remainingTime)
                    return remainingTime;
                })

            }, 1000);

            return ()=> clearInterval(timer);

        }, [timeLeft])

        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) /60);
        const seconds = Math.floor(time % 60);

        return{ 
            hours: String(hours).padStart(2, '0'), 
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0')
        }
        //padStart (2, '0') means , it'll set two numbers, and if the number is not set , it'll set it to '0'
    }   
    const {hours, minutes, seconds} = formatTime(timeLeft);

  return (
    <section className='h-[60vh] mt-[14vh] bg-cover bg-top'
     style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='max-w-[1300px] mx-auto px-12 h-100  flex-col justify-center gap-3'>
            <h1 className='text-red-600 text-9xl uppercase font-bold tracking-tight'>
                Big Sale!
            </h1>
            <h2 className='text-zinc-800 text-3xl'>
                Up to 50% Off - Limited Time Only!
            </h2>
            <div className='text-6xl font-bold text-zinc-800 flex gap-x-3 mt-5 '>
                <span className='text-white bg-zinc-800 p-3'>{hours}</span>:
                <span className='text-white bg-zinc-800 p-3'>{minutes}</span>:
                <span className='text-white bg-zinc-800 p-3'>{seconds}</span>
            </div>
        </div>
    </section>
  )
}

export default Banner
