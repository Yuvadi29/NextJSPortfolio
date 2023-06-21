import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const TextAnimation = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/Portfolio');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center h-screen bg-[#0f172a]"
            onClick={handleClick}
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white text-4xl md:text-6xl font-bold cursor-pointer text-center px-4"
            >
                <div className="content">
                    <h1 className="title">
                        Hey There!
                        <br />
                        Welcome to My Portfolio
                        <div className="aurora">
                            <div className="aurora__item"></div>
                            <div className="aurora__item"></div>
                            <div className="aurora__item"></div>
                            <div className="aurora__item"></div>
                        </div>
                    </h1>
                </div>
                <p className='text-sm font-openSans mt-5'>Click above to get Started</p>
            </motion.h1>
        </motion.div>
    );
};

export default TextAnimation;
