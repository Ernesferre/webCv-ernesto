import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a Frontend Developer with almost 4 years of experience specializing in building responsive and high-performance web applications using React.js and Next.js. Throughout my career, I've successfully delivered projects across various industries, consistently applying best practices in modern web development, including component-based architectures, state management, and performance optimization.

        I am proficient in agile methodologies such as Scrum, ensuring smooth collaboration and iterative delivery of projects. My main focus is to contribute to impactful projects where I can not only apply my technical skills but also continuously learn and integrate new tools and practices.

      Key Strengths:

      - Expertise in React.js, Next.js, JavaScript (ES6+), GraphQL, and CSS frameworks (Tailwind CSS, SASS).
      - Strong understanding of modern frontend technologies and tools, such as Apollo Client, Firebase, and Git.
      - Passionate about creating intuitive user interfaces and seamless user experiences.
      - Collaborative team player who values clear communication and respectful work environments, always striving to enhance productivity and team morale.

      I'm excited to be part of teams that value innovation and technical excellence, where I can contribute effectively and continue to grow as a developer.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
