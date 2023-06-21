import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Main = () => {

  const [text, count] = useTypewriter({
    words: [
      "Mern Stack Developer",
      "Content Creator",
      "FreeLancer",
      "<LovesToMakeVideos/>",
    ],
    loop: true,
    delaySpeed: 500,
    typeSpeed: 80,
    deleteSpeed: 60,
  });

  return (
    <div id='home' className='w-full h-screen text-center no-cursor'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase text-sm tracking-widest text-gray-600 text-[16px] font-bold ">Hustle Karo Bhasad Nai </p>
          <h1 className='py-4 text-[#ffffff]'>Myself,
            <span className='bg-gradient-to-r from-[#ffffff] to-[#4ca5ff] text-transparent bg-clip-text'>Aditya</span>
          </h1>
          <h1 className='py-04 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b274f7]'>
            {text}
            <Cursor cursorColor="#4ca5ff" />
          </h1>
          <p className='py-4 text-white max-w-[70%] m-auto text-[18px]'>
            I'm a Mern Stack Developer along with a Content Creation on Youtube as well. I am a self taught developer. Currenly, I'm focused on building Mern Stack Applications while learning the Backend Technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full p-6 cursor-pointer hover:scale-115 ease-in duration-500 back'>
              <a href='https://www.linkedin.com/in/aditya-trivedi-b99586211/' target='_blank'>
                <FaLinkedinIn className='fill-[#0A66C2]' size={40} />
              </a>
            </div>
            <div className='rounded-full p-6 cursor-pointer hover:scale-115 ease-in duration-500'>
              <a href="https://www.instagram.com/_coding_adda" target='_blank'>
                <AiFillInstagram className='fill-[#E1306C]' size={40} />
              </a>
            </div>
            <div className='rounded-full p-6 cursor-pointer hover:scale-115 ease-in duration-500'>
              <a href="https://www.youtube.com/@coding_adda" target='_blank'>
                <FaYoutube className='fill-[#FF0000]' size={40} />
              </a>
            </div>
            <div className='rounded-full p-6 cursor-pointer hover:scale-115 ease-in duration-500'>
              <a href="https://github.com/Yuvadi29" target='_blank'>
                <AiFillGithub className='fill-[#ffffff]' size={40} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Main;