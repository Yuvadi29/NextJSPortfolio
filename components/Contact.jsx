// import Image from 'next/image';
// import Link from 'next/link';
// import contact from '../public/assets/contact.png';
// import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
// import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
// import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
// import React, { useRef } from 'react';
// import emailjs from "@emailjs/browser";


// const Contact = () => {

//    
//     return (

//         <div id='contact' className='w-full lg:h-screen no-cursor'>
//             <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
//                 <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
//                     Contact Me
//                 </p>
//                 <h2 className='py-4'>Get In Touch</h2>
//                 <div className='grid lg:grid-cols-5 gap-8'>
//                     {/* left */}
//                     <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
//                         <div className='lg:p-4 h-full '>
//                             <div>
//                                 <Image
//                                     className='rounded-xl hover:scale-105 ease-in duration-300'
//                                     src={contact}
//                                     alt='/'
//                                 />
//                             </div>
//                             <div>
//                                 <h2 className='py-2'>Aditya Trivedi</h2>
//                                 <p className='text-[18px]'>Mern Stack | Content Creator</p>
//                                 <p className='py-4 text-[18px]'>
//                                     I am available for freelance or full-time positions. Contact
//                                     me and let&apos;s talk.
//                                 </p>
//                             </div>
//                             <div>
//                                 <p className='uppercase pt-4'>Connect With Me</p>
//                                 <div className='flex items-center justify-between py-4'>
//                                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                         <a href='https://www.linkedin.com/in/aditya-trivedi-b99586211/' target='_blank'>
//                                             <FaLinkedinIn className='fill-[#0A66C2]' size={20} />
//                                         </a>
//                                     </div>
//                                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                         <a href="https://www.instagram.com/_coding_adda" target='_blank'>
//                                             <AiFillInstagram className='fill-[#E1306C]' size={20} />
//                                         </a>

//                                     </div>
//                                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                         <a href="https://www.youtube.com/@coding_adda" target='_blank'>
//                                             <FaYoutube className='fill-[#FF0000]' size={20} />
//                                         </a>

//                                     </div>

//                                     <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                                         <a href="https://github.com/Yuvadi29" target='_blank'>
//                                             <AiFillGithub className='fill-[#181717]' size={20} />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* right */}
//                     <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
//                         <div className='p-4'>
//                             <form ref={form} onSubmit={sendEmail}>
//                                 <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
//                                     <div className='flex flex-col'>
//                                         <label className='uppercase text-md font-bold py-2'>Name</label>
//                                         <input
//                                             className='border-2 rounded-lg p-3 flex border-gray-300'
//                                             type='text'
//                                             name='name'
//                                         />
//                                     </div>
//                                     <div className='flex flex-col'>
//                                         <label className='uppercase text-md font-bold py-2'>
//                                             Phone Number
//                                         </label>
//                                         <input
//                                             className='border-2 rounded-lg p-3 flex border-gray-300'
//                                             type='text'
//                                             name='phone'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className='flex flex-col py-2'>
//                                     <label className='uppercase text-md font-bold py-2'>Email</label>
//                                     <input
//                                         className='border-2 rounded-lg p-3 flex border-gray-300'
//                                         type='email'
//                                         name='email'
//                                     />
//                                 </div>
//                                 <div className='flex flex-col py-2'>
//                                     <label className='uppercase text-md font-bold py-2'>Subject</label>
//                                     <input
//                                         className='border-2 rounded-lg p-3 flex border-gray-300'
//                                         type='text'
//                                         name='subject'
//                                     />
//                                 </div>
//                                 <div className='flex flex-col py-2'>
//                                     <label className='uppercase text-md font-bold py-2'>Message</label>
//                                     <textarea
//                                         className='border-2 rounded-lg p-3 border-gray-300'
//                                         rows='10'
//                                         name='message'
//                                     ></textarea>
//                                 </div>
//                                 <input type='submit' value='Send Message' className='w-full p-4 text-md font-bold text-gray-500 mt-4 bg-black/10' onClick={handleSubmit}/>
//                                     {/* Send Message */}
//                                 {/* </input> */}
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex justify-center py-12'>
//                     <Link href='/'>
//                         <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
//                             <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={20} />
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact;
import Image from 'next/image';
import Link from 'next/link';
import contact from '../public/assets/contact.png';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_w18xgyp",
                "template_tgqerpc",
                form.current,
                "hpVPfQVpaWKVjMk2D"
            )
            .then(
                (result) => {
                    alert(result.text);
                },
                (error) => {
                    alert(error.text);
                }
            )
    };

    const handleSubmit = () => {
        alert('Message Sent Successfully');
        window.location.reload();
    }

    return (
        <div className='no-cursor'>
            <section className="text-gray-400 bg-gray-900 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Let's Connect</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You can contact me through Social Media or just fill out the form, I will reach you as soon as possible</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="message" className="leading-7 text-sm text-gray-400">Subject</label>
                                        <input id="message" type='text' name="subject" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></input>
                                        <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <input className="flex mx-auto items-center justify-center text-white bg-[#3e5382] hover:bg-[#2d447a] border-0 py-2 px-8 focus:outline-none  rounded text-lg" value='Submit' type='submit' onClick={handleSubmit}/>
                                    {/* <input type='submit' value='Send Message' className='w-full p-4 text-md font-bold text-gray-500 mt-4 bg-black/10' onClick={handleSubmit}/> */}
                                </div>
                                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                    <a href='mailto:letstalkaditya@gmail.com' target='_blank' className="text-indigo-400" >letstalkaditya@gmail.com</a>
                                    <p className="leading-normal my-5">Virar
                                        <br />Mumbai , 401303.
                                    </p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-4 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact