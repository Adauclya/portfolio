"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiNuxtdotjs, SiPhp, SiCodeigniter, SiLaravel, SiMysql } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "As a Software Developer, I am passionate about building innovative and efficient solutions that bring ideas to life. With a strong foundation in coding and problem-solving, I specialize in creating applications that combine functionality with a seamless user experience. My journey in software development is driven by curiosity, continuous learning, and a commitment to excellence, making technology a tool to empower and transform",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Syam Firdaus",
    },
    {
      fieldName: "Age",
      fieldValue: "24 Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 896 2570 3806",
    },
    {
      fieldName: "Email",
      fieldValue: "muhammadsyam95@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesia, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Throughout my career as a Software Developer, I’ve worked on diverse projects that span across industries. My experience includes working in collaborative team environments, managing deadlines, and delivering solutions that meet client needs. Each project has enhanced my technical expertise and deepened my understanding of how to solve real-world problems through code",
  items: [
    {
      company: "Diskominfo Karawang",
      position: "Web Developer",
      duration: "2023 - Present",
    },
    {
      company: "PT Elite Prima Hutama (Pakuwon Group)",
      position: "Officer IT Development",
      duration: "2022 - 2023",
    },
    {
      company: "LPPM UNSIKA",
      position: "IT Staff",
      duration: "2020 - 2022",
    },
    {
      company: "UPT TIK UNSIKA",
      position: "IT Staff",
      duration: "2019 - 2020",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I hold a solid academic foundation that supports my career as a Software Developer. I graduated in Computer Science from Singaperbangsa Karawang University. My academic journey exposed me to foundational programming concepts, algorithms, and software engineering principles. Beyond formal education, I’ve invested in continuous learning through online courses, certifications, and hands-on projects to keep up with the evolving tech landscape.",
  items: [
    {
      institution: "Build With Angga",
      degree: "Web Development Microservice",
      duration: "2024",
    },
    {
      institution: "Build With Angga",
      degree: "CSS Tailwind Web Design",
      duration: "2023",
    },
    {
      institution: "Build With Angga",
      degree: "Flutter Mobile Developer",
      duration: "2020",
    },
    {
      institution: "Dicoding",
      degree: "Building Progressive Web Apps",
      duration: "2020",
    },
    {
      institution: "Dicoding",
      degree: "Fundamental Front-End Development",
      duration: "2020",
    },
    {
      institution: "Digitalent Kominfo",
      degree: "HTML, CSS & Javascript Training  ",
      duration: "2020",
    },
    {
      institution: "BNSP (Badan Nasional Sertifikasi Profesi)",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Singaperbangsa Karawang University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2017 - 2021",
    }
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "As a Software Developer, I bring a strong set of technical skills to the table. My expertise includes backend development with PHP (Laravel) and Node.js, as well as frontend frameworks like React and Vue.js",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap 5",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiNuxtdotjs />,
      name: "nuxt v2",
    },
    {
      icon: <SiPhp />,
      name: "PHP",
    },
    {
      icon: <SiCodeigniter />,
      name: "Codeigniter 3",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
    },
    {
      icon: <SiMysql />,
      name: "Mysql",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
