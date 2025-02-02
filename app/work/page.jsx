"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Sorabi",
    description:
      "Aplikasi SORABI (Sistem Optimalisasi Arsip dan Administrasi Berbasis Informasi) merupakan hasil kolaborasi antara beberapa dinas di Kabupaten Karawang, meliputi Bappeda, Dinas Sosial, Dinas Komunikasi dan Informatika, serta didukung oleh Dinas Kependudukan dan Catatan Sipil, Dinas Kesehatan, Dinas Pendidikan, Pemuda dan Olahraga, Bagian Kesra Setda, dan DPMD.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "PHP" }, { name: "Laravel" }],
    image: "/assets/work/sorabi.png",
    live: "https://sorabi.karawangkab.go.id/",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Edukcapil",
    description:
      "Edukcapil Karawang adalah aplikasi layanan kependudukan dan catatan sipil elektronik yang disediakan oleh Dinas Kependudukan dan Pencatatan Sipil Kabupaten Karawang. Aplikasi ini memudahkan warga Karawang untuk mengurus berbagai dokumen kependudukan secara online, seperti e-KTP, Kartu Keluarga, Akta Kelahiran, dan Akta Kematian.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "PHP" }, { name: "Codeigniter 3" }],
    image: "/assets/work/edukcapil.png",
    live: "https://edukcapil.karawangkab.go.id/",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Infoloker",
    description:
      "Infoloker Karawang adalah platform informasi lowongan kerja yang ditujukan bagi pencari kerja di wilayah Karawang dan sekitarnya. Platform ini menyediakan berbagai peluang pekerjaan dari berbagai sektor industri, mulai dari manufaktur, jasa, hingga pemerintahan",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "PHP" }, { name: "Codeigniter 3" }],
    image: "/assets/work/infoloker.png",
    live: "https://infoloker.karawangkab.go.id/",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "SiapKanda",
    description:
      "SIAP-KANDA (Sistem Informasi Administrasi Penyelesaian Kerugian Daerah) adalah platform yang dirancang untuk membantu instansi pemerintah dalam mengelola, melacak, dan menyelesaikan kasus-kasus kerugian daerah secara efisien dan transparan. Aplikasi ini memfasilitasi pencatatan kerugian, pengajuan laporan, hingga proses verifikasi dan penyelesaian, serta memberikan pelaporan yang akurat untuk mendukung pengambilan keputusan dan pertanggungjawaban keuangan daerah.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "PHP" }, { name: "Laravel" }],
    image: "/assets/work/siapkanda.png",
    live: "https://deer.baleprasutisingaperbangsa.com/login",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Portal Pelayanan",
    description:
      "PAK HAJI adalah singkatan dari Pelayanan Whatsapp Karawang Handal dan Teruji, sebuah aplikasi berbasis WA Chat Bot yang memudahkan warga Karawang untuk mengakses berbagai layanan publik melalui WhatsApp dengan cepat dan praktis.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Node JS" }, { name: "Nuxt.js" }],
    image: "/assets/work/pakhaji.png",
    live: "https://egret.baleprasutisingaperbangsa.com/",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "VMS",
    description:
      "Vendor Management System (VMS) dari Pakuwon Group adalah platform digital yang dirancang untuk mengelola hubungan antara perusahaan dan vendor secara efisien. Sistem ini memungkinkan proses pendaftaran, evaluasi, serta pemantauan kinerja vendor dalam satu sistem terintegrasi",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "PHP" }, { name: "Codeigniter 3" }],
    image: "/assets/work/vms.png",
    live: "https://vms.pakuwon.com/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num} {project.title}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60 text-justify">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
