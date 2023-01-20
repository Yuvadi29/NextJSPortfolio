import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Cursor, useTypewriter } from 'react-simple-typewriter';


const Main = () => {


  const [text, count] = useTypewriter({
    words: [
      "Mern Stack Developer",
      "Content Creator 📷",
      "<LovesToMakeVideos/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>Hustle Karo Bhasad Nai </p>
          <h1 className='py-4 text-gray-700'>Myself,
            <span className='text-[#5651e5]'>Aditya</span>
          </h1>
          <h1 className='py04 text-gray-700'>
            {text}
            <Cursor cursorColor="#f7ABBB" />
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I'm a Mern Stack Developer along with a Content Creation on Youtube as well. I am a self taught developer. Currenly, I'm focused on building Mern Stack Applications while learning the Backend Technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-500 back'>
              <a href='https://www.linkedin.com/in/aditya-trivedi-b99586211/' target='_blank'>
                <FaLinkedinIn className='fill-[#0A66C2]' size={25} />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-500'>
              <a href="https://www.instagram.com/_coding_adda" target='_blank'>
                <AiFillInstagram className='fill-[#E1306C]' size={25} />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-500'>
              <a href="https://www.youtube.com/@coding_adda" target='_blank'>
                <FaYoutube className='fill-[#FF0000]' size={25} />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-500'>
              <a href="https://github.com/Yuvadi29" target='_blank'>
                <AiFillGithub className='fill-[#181717]' size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;