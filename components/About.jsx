// import Image from 'next/image';
// import React from 'react';
// import Link from 'next/link';
// import adi from '../public/assets/adi.png'

// const About = () => {
//     return (
//         <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
//             {/* <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
//                 <div className='col-span-2'>
//                     <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About Me</p>
//                     <h2 className='py-4'>Who I Am</h2>
//                     <p className='py-2 text-gray-600 text-[18px]'>

//                         I am Aditya Trivedi. An Explorer ,problem solver and a developer. I am currently purusing my IT Engineering from Vidyavardhinis College of Engineering and technology. My main interests lie in web and application developement. Throught out the years i have worked, and explored various technolgies including javascript Frameworks like ReactJs,NextsJs,etc and backend Frameworks like Express working on NodeJs and Django with Python.

//                     </p>

//                     <p className='py-2 text-gray-600 '>
//                         I have Also Participated in various competitive coding Contests and Hackathons. Along with application developement i am aslo interested in content creation and Youtube. My other hobbies include travelling ,vlogging and podcasting.
//                     </p>

//                     <p className='py-6 text-gray-600 underline cursor-pointer text-xl'>
//                         <Link href='/#projects'>
//                             Checkout my projects
//                         </Link>
//                     </p>
//                 </div>
//                 <div className='w-full h-auto m-auto flex items-center justify-center p-6 hover:scale'>
//                     <Image src={adi} alt="/" width='300' height='20' />
//                 </div>
//             </div> */}

//             {/* Code editor for MySelf */}
//             <div className="flex flex-col flex-[60%]  h-full w-full overflow-hidden rounded-md">
//                 <div className="flex border-b bg-white text-[min(1.6vw, 10px)] lg:text-[min(0.8vw, 11px)]">
//                     <div className="flex w-20 items-center justify-center space-x-1 px-4 py-2">
//                         {/* 3 Colors like the Mac Book */}
//                         <div className="w-4 h-4 rounded-full bg-[#fe6059]"></div>
//                         <div className="w-4 h-4 rounded-full bg-[#fcbd2e]"></div>
//                         <div className="w-4 h-4 rounded-full bg-[#28c941]"></div>
//                     </div>

//                     <div className="w-fit translate-y-0 text-lg bg-red px-4 py-2 text-black">About.jsx</div>
//                 </div>


//                 {/* Numbers for the Ide */}
//                 <div className="flex gap-[2.5%] font-mono text-[min(2vw,14px)] tracking-tight lg:text-[min(1vw,14px)]">
//                     <div className="flex flex-col">
//                         <div className='h-full px-1.5 text-gray-400'>01</div>
//                         <div className='h-full px-1.5 text-gray-400'>02</div>
//                         <div className='h-full px-1.5 text-gray-400'>03</div>
//                         <div className='h-full px-1.5 text-gray-400'>04</div>
//                         <div className='h-full px-1.5 text-gray-400'>05</div>
//                         <div className='h-full px-1.5 text-gray-400'>06</div>
//                         <div className='h-full px-1.5 text-gray-400'>07</div>
//                         <div className='h-full px-1.5 text-gray-400'>08</div>
//                         <div className='h-full px-1.5 text-gray-400'>09</div>
//                         <div className='h-full px-1.5 text-gray-400'>10</div>
//                     </div>

//                     {/* My Description */}
//                     <code>
//                         I am Aditya Trivedi. An Explorer ,problem solver and a developer. I am currently purusing my IT Engineering from Vidyavardhinis College of Engineering and technology. My main interests lie in web and application developement. Throught out the years i have worked, and explored various technolgies including javascript Frameworks like ReactJs,NextsJs,etc and backend Frameworks like Express working on NodeJs and Django with Python.

//                         I have Also Participated in various competitive coding Contests and Hackathons. Along with application developement i am aslo interested in content creation and Youtube. My other hobbies include travelling ,vlogging and podcasting.
//                     </code>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default About;
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import adi from '../public/assets/adi.png';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';


const About = () => {
    return (
        <div id='about' className='w-full h-screen p-2 flex items-center justify-center'>
            <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row md:gap-8'>
                <div className='w-full md:w-[60%] flex flex-col'>
                    <div className='flex border-b bg-gray-700 text-[min(1.6vw, 10px)] lg:text-[min(0.8vw, 11px)]'>
                        <div className='flex w-20 items-center justify-center space-x-1 px-4 py-2'>
                            {/* 3 Colors like the Mac Book */}
                            <div className='w-4 h-4 rounded-full bg-[#fe6059]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#fcbd2e]'></div>
                            <div className='w-4 h-4 rounded-full bg-[#28c941]'></div>
                        </div>
                        <div className='w-fit translate-y-0 text-lg bg-red px-4 py-2 text-white flex items-center'>
                            <div className="text-[#61DBFB] flex items-center justify-center mr-2"><FaReact size={28} /></div>
                            <div>About.jsx</div>
                        </div>
                    </div>
                    {/* Numbers for the Ide */}
                    <div className='flex gap-[2.5%] font-mono text-[min(2vw,14px)] tracking-tight lg:text-[min(1vw,14px)] bg-gray-800'>
                        <div className='flex flex-col'>
                            <div className='h-full px-1.5 text-gray-400'>00</div>
                            <div className='h-full px-1.5 text-gray-400'>01</div>
                            <div className='h-full px-1.5 text-gray-400'>02</div>
                            <div className='h-full px-1.5 text-gray-400'>03</div>
                            <div className='h-full px-1.5 text-gray-400'>04</div>
                            <div className='h-full px-1.5 text-gray-400'>05</div>
                            <div className='h-full px-1.5 text-gray-400'>06</div>
                            <div className='h-full px-1.5 text-gray-400'>07</div>
                            <div className='h-full px-1.5 text-gray-400'>08</div>
                            <div className='h-full px-1.5 text-gray-400'>09</div>
                            <div className='h-full px-1.5 text-gray-400'>10</div>
                        </div>
                        {/* My Description */}
                        <div className='font-FiraCode'>
                            <div className="text-white p-5 rounded-lg">
                                <div className="text-base">
                                    <div className="text-blue-500">const name = 'Aditya Trivedi';</div>
                                    <div className="text-green-500">const education = 'IT Engineering';</div>
                                    <div className="text-yellow-500">const interests = ['Web Development', 'Flutter Development', 'Content Creation'];</div>
                                    <div className="text-purple-500">const technologies = ['ReactJs', 'NextsJs', 'Express', 'NodeJs', 'Django', 'BootStrap', 'Github', 'MongoDb', 'Java'];</div>
                                    <div className="text-indigo-500">const codingContests = ['Hackathons'];</div>
                                    <div className="text-pink-500">const hobbies = ['Travelling', 'Vlogging', 'Podcasting', 'Teaching'];</div>
                                    <div className="text-blue-500"><br />export default AboutMe();</div>
                                </div>

                                {/* Small Paragraph */}
                                <p className="mt-4 text-gray-300">
                                    Always Hungry for Knowledge. My passion for creativity and technology has allowed me to be active in both of these areas, and I am always eager to take on new challenges that allow me to showcase my skills.These passions have given me a unique perspective on the world and have taught me the importance of adaptability, creativity, and perseverance. Thank you for taking the time to visit my profile, and I look forward to connecting with you!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[40%] flex items-center justify-center p-6 hover:scale'>
                    <Image src={adi} alt="/" width={300} height={20} />
                </div>
            </div>
        </div>
    );
}

export default About;

