import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About Me</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>

                        I am Aditya Trivedi.An Explorer ,problem solver and a developer. I am currently purusing my IT Engineering from Vidyavardhinis College of Engineering and technology. My main interests lie in web and application developement. Throught out the years i have worked, and explored various technolgies including javascript Frameworks like ReactJs,NextsJs,etc and backend Frameworks like Express working on NodeJs and Django with Python.

                    </p>

                    <p className='py-2 text-gray-600'>
                        I have Also Participated in various competitive coding Contests and Hackathons. Along with application developement i am aslo interested in content creation and Youtube. My other hobbies include travelling ,vlogging and podcasting.
                    </p>

                    <p className='py-6 text-gray-600 underline cursor-pointer text-xl'>
                        <Link href='/#projects'>
                            Checkout my projects
                        </Link>
                    </p>
                </div>
                <div className='w-full h-auto m-auto flex items-center justify-center p-6 hover:scale'>
                    <Image src="/../public/assets/adi.png" alt="/" width='250' height='10' />
                </div>
            </div>
        </div>
    )
}

export default About;