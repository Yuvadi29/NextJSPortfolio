import Image from 'next/image';
import Link from 'next/link';
import contact from '../public/assets/contact.png';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleSubmit = () => {
        alert('Message Sent Successfully');
        window.location.reload();
    }

    return (

        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Contact Me
                </p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full '>
                            <div>
                                <Image
                                    className='rounded-xl hover:scale-105 ease-in duration-300'
                                    src={contact}
                                    alt='/'
                                />
                            </div>
                            <div>
                                <h2 className='py-2'>Aditya Trivedi</h2>
                                <p>Mern Stack | Content Creator</p>
                                <p className='py-4'>
                                    I am available for freelance or full-time positions. Contact
                                    me and let&apos;s talk.
                                </p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaLinkedinIn className='fill-[#0A66C2]' size={25} />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiFillInstagram className='fill-[#E1306C]' size={25} />

                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaYoutube className='fill-[#FF0000]' size={25} />

                                    </div>

                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiFillGithub className='fill-[#181717]' size={25} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='name'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>
                                            Phone Number
                                        </label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='phone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        name='email'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300'
                                        rows='10'
                                        name='message'
                                    ></textarea>
                                </div>
                                <button type='submit' onClick={handleSubmit} className='w-full p-4 text-gray-100 mt-4'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={20} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;