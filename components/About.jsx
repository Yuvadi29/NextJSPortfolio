import React from 'react';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerimg from '../public/assets/bannerimg.png';
import banersvg from '../public/assets/banersvg.svg';
import Image from 'next/image';

const About = () => {
    const [refText, inViewText] = useInView({
        threshold: 0.2,
    });

    const [refImage, inViewImage] = useInView({
        threshold: 0.2,
    });

    const textVariants = {
        hidden: {
            opacity: 0,
            translateX: -100,
        },
        visible: {
            opacity: 1,
            translateX: 0,
        },
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            translateX: 100,
        },
        visible: {
            opacity: 1,
            translateX: 0,
        },
    };

    const { scrollYProgress } = useViewportScroll();
    const fadeTransform = useTransform(
        scrollYProgress,
        [0, 0.2], // Adjust the values based on when you want the fade effect to start and end
        [100, 0] // Adjust the values based on the desired translation distance
    );

    return (
        <div id="about" className="w-full h-screen p-2 flex items-center justify-center">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row md:gap-8">
                <motion.div
                    className="w-full md:w-[50%] flex flex-col"
                    initial="hidden"
                    animate={inViewText ? "visible" : "hidden"}
                    variants={textVariants}
                    ref={refText}
                >
                    <div className="flex border-b bg-gray-700 text-[min(1.6vw, 10px)] lg:text-[min(0.8vw, 11px)] rounded-t-lg">
                        <div className="flex w-20 items-center justify-center space-x-1 px-4 py-2">
                            {/* 3 Colors like the Mac Book */}
                            <div className="w-4 h-4 rounded-full bg-[#fe6059]"></div>
                            <div className="w-4 h-4 rounded-full bg-[#fcbd2e]"></div>
                            <div className="w-4 h-4 rounded-full bg-[#28c941]"></div>
                        </div>
                        <div className="w-fit translate-y-0 text-lg bg-red px-4 py-2 text-white flex items-center">
                            <div className="text-[#61DBFB] flex items-center justify-center mr-2">
                                <FaReact size={28} />
                            </div>
                            <div>About.jsx</div>
                        </div>
                    </div>
                    {/* Numbers for the Ide */}
                    <div className="flex gap-[2.5%] font-mono text-[min(2vw,14px)] tracking-tight lg:text-[min(1vw,14px)] bg-gray-800 rounded-b-lg">
                        <div className="flex flex-col ">
                            <div className="h-full px-1.5 text-gray-400">00</div>
                            <div className="h-full px-1.5 text-gray-400">01</div>
                            <div className="h-full px-1.5 text-gray-400">02</div>
                            <div className="h-full px-1.5 text-gray-400">03</div>
                            <div className="h-full px-1.5 text-gray-400">04</div>
                            <div className="h-full px-1.5 text-gray-400">05</div>
                            <div className="h-full px-1.5 text-gray-400">06</div>
                            <div className="h-full px-1.5 text-gray-400">07</div>
                            <div className="h-full px-1.5 text-gray-400">08</div>
                            <div className="h-full px-1.5 text-gray-400">09</div>
                            <div className="h-full px-1.5 text-gray-400">10</div>
                        </div>
                        {/* My Description */}
                        <div className="font-FiraCode ">
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
                                <p className="mt-4 text-gray-300 font-bold text-base ">
                                    Always Hungry for Knowledge. My passion for creativity and technology has allowed me to be active in both of these areas, and I am always eager to take on new challenges that allow me to showcase my skills.These passions have given me a unique perspective on the world and have taught me the importance of adaptability, creativity, and perseverance. Thank you for taking the time to visit my profile, and I look forward to connecting with you!
                                </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="w-full md:w-[50%] flex items-center justify-center p-6 ml-8"
                    initial="hidden"
                    animate={inViewImage ? "visible" : "hidden"}
                    variants={imageVariants}
                    ref={refImage}
                >
                    <Image
                        src={bannerimg}
                        alt="/"
                        width={500}
                        height={500}
                        className="h-auto w-full max-h-[500px]"
                        style={{ opacity: fadeTransform }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
