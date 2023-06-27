import Image from 'next/image';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import skill from './Skill.json';

const Skills = () => {
  const [refImage, inViewImage] = useInView({
    threshold: 0.2,
  });

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
    [0, 2], // Adjust the values based on when you want the fade effect to start and end
    [200, 0] // Adjust the values based on the desired translation distance
  );

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div id='skills' className='w-full min-h-screen p-2 no-cursor'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-56 md:mt-0'>
        {/* Skills */}
        <section className="w-full">
          <div className="font-bold text-white font-firaCode text-3xl lg:text-4xl text-center mb-4">
            ⚙ My Tech Stack
          </div>
          <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {skill.Skills.map((skills, index) => (
              <div
                className={`w-full flex justify-center ${!isMobile && 'motion'}`}
                key={index}
                ref={refImage}
              >
                {isMobile ? (
                  <div className="w-full max-w-[200px]">
                    <Image
                      src={skills.path}
                      alt="myskills"
                      layout="responsive"
                      width={200}
                      height={200}
                      className="blur-sm hover:blur-none grayscale hover:grayscale-0"
                    />
                  </div>
                ) : (
                  <motion.div
                    initial="hidden"
                    animate={inViewImage ? 'visible' : 'hidden'}
                    variants={imageVariants}
                  >
                    <div className="w-full max-w-[200px]">
                      <Image
                        src={skills.path}
                        alt="myskills"
                        layout="responsive"
                        width={200}
                        height={200}
                        className="blur-sm hover:blur-none grayscale hover:grayscale-0"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
