"use client"
import { useState } from 'react';
import { IoIosContact } from 'react-icons/io';
import { MdCategory, MdEmail, MdOutlineArrowOutward } from 'react-icons/md';
import { FaRupeeSign } from 'react-icons/fa';
import { RiMessage2Fill } from 'react-icons/ri';
import { z } from 'zod';

function ContactUsPage() {
  const [formData, setFormData] = useState({});

  const formSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    budget: z.string(),
    categories: z.string().min(1).max(80),
    description: z.string().min(1).max(1000),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = formSchema.parse(formData);
      console.log(validatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="my-16 flex flex-col gap-6 border border-black p-6 rounded-2xl md:gap-8 md:m-20 md:lg:py-12  md:my-16  lg:gap-8 lg:p-8  lg:my-32">
      <h1 className="text-3xl my-4 font-medium text-center uppercase md:text-3xl lg:text-4xl">Let's Connect</h1>

      <form className="flex flex-col gap-8 px-8" onSubmit={handleSubmit}>
        <div className="flex items-center gap-3 p-3 border border-slate-600 rounded-3xl hover:border-blue-400">
          <IoIosContact className="h-8 w-8" />
          <input
            name="name"
            id="name"
            placeholder="Enter your name"
            type="text"
            onChange={handleChange}
            className="w-full rounded-2xl text-xl lg:py-1 px-3 outline-none focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-3 p-3 border border-slate-600 rounded-3xl hover:border-blue-400">
          <MdEmail className="h-8 w-8" />
          <input
            name="email"
            id="email"
            placeholder="Enter your email"
            type="email"
            onChange={handleChange}
            className="w-full rounded-2xl text-xl lg:py-1 px-3 outline-none focus:outline-none"
            required
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 ">
          <div className="flex items-center gap-3 p-3 border border-slate-600 rounded-3xl hover:border-blue-400">
            <FaRupeeSign className="h-6 w-6" />
            <input
              id="budget"
              placeholder="Enter your budget"
              type="number"
              onChange={handleChange}
              className="w-full rounded-2xl text-xl lg:py-1 px-3 outline-none focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-3 p-3 border border-slate-600 rounded-3xl hover:border-blue-400">
            <MdCategory className="h-8 w-8" />
            <input
              id="categories"
              placeholder="Enter category"
              type="text"
              onChange={handleChange}
              className="w-full rounded-2xl text-xl lg:py-1 px-3 outline-none focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 border border-slate-600 rounded-3xl hover:border-blue-400">
          <RiMessage2Fill className="h-8 w-8" />
          <textarea
            id="description"
            placeholder="Enter your message"
            onChange={handleChange}
            className="w-full h-52 rounded-2xl text-xl lg:py-1 px-3 outline-none focus:outline-none"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-black flex gap-3 text-xl items-center rounded-3xl uppercase py-1 pl-6 pr-1 text-white"
          >
            Contact Us
            <span className="bg-white p-2 rounded-full">
              <MdOutlineArrowOutward className="text-black w-6 h-6" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsPage;
