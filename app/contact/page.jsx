"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 896 2570 3806",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "muhammadsyam95@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Purwakarta",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent form submission
    
    // Ambil nilai input dari form
    const firstname = document.querySelector('input[placeholder="Firstname"]').value;
    const lastname = document.querySelector('input[placeholder="Lastname"]').value;
    const email = document.querySelector('input[placeholder="Email address"]').value;
    const phone = document.querySelector('input[placeholder="Phone number"]').value;
    const serviceElement = document.querySelector('.select-trigger span');
    const service = serviceElement ? serviceElement.textContent : "Not selected";
    const message = document.querySelector('textarea[placeholder="Type your message here."]').value;

    // Validasi sederhana
    if (!email || !message) {
      alert("Please fill in the required fields (Email and Message).");
      return;
    }

    // Format mailto
    const subject = `Contact Request from ${firstname} ${lastname}`;
    const body = `Name: ${firstname} ${lastname}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0A%0A${message}`;
    const mailtoLink = `mailto:muhammadsyam95@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Buka mailto link
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSendMessage}
            >
              <h3 className="text-4xl text-accent">Lets work together</h3>
              <p className="text-white/60">
                Have an exciting project? Fill out the form, and let’s discuss!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="text" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
