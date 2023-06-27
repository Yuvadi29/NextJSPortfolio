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

  return (
    <div id='skills' className='w-full h-full lg:h-screen p-2 no-cursor'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-56 md:mt-0'>
        {/* Skills */}
        <section className="w-full">
          <div className="font-bold text-white font-firaCode text-3xl lg:text-4xl text-center mb-4">
            ⚙ My Tech Stack
          </div>
          <div className="m-auto grid lg:grid-cols-8 gap-2 md:grid-cols-5 sm:grid-cols-1">
            {skill.Skills.map((skills, index) => (
              <motion.div
                className="w-full md:w-[50%] flex"
                initial="hidden"
                animate={inViewImage ? "visible" : "hidden"}
                variants={imageVariants}
                ref={refImage}
                key={index}
              >
                <div className="flex justify-center">
                  <Image src={skills.path} alt="myskills" width={800} height={800} className="w-full object-cover blur-sm hover:blur-none grayscale hover:grayscale-0 ml-[105px]" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
