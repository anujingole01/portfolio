import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/profile";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Fallback simple mailto submission instead of emailjs
    window.location.href = `mailto:${profile.email}?subject=Message from ${formData.from_name}&body=${formData.message} (%0A%0AFrom: ${formData.from_email})`;
    
    setFormData({
      from_name: "",
      from_email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative h-[100svh] w-full px-6 md:px-12 flex flex-col justify-center bg-transparent overflow-hidden snap-start"
    >
      <div className="max-w-7xl mx-auto relative w-full pt-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{
             duration: 0.8,
           }}
           className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 p-6 sm:p-8 md:p-12 bg-white dark:bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[32px] md:rounded-[48px] border border-slate-200 dark:border-white/10 shadow-2xl items-center"
        >
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900 dark:text-white tracking-tight leading-tight">
              Get In <br /> <span className="text-rose-500">Touch</span>
            </h2>

            <p className="text-slate-500 dark:text-gray-400 text-sm md:text-base font-medium leading-relaxed mb-8 max-w-sm hidden sm:block">
              Please reach out for professional inquiries, collaborations, or project proposals. I am actively available for new opportunities.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4 text-slate-600 dark:text-gray-300 font-bold group">
                <div className="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 group-hover:bg-rose-500/10 transition-colors shrink-0">
                  <HiOutlineMail className="text-xl group-hover:text-rose-500 transition-colors" />
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-rose-500 transition-colors text-sm sm:text-base break-words line-clamp-1"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-8 md:mt-10">
              {[
                { icon: <FaGithub />, link: profile.social.github },
                { icon: <FaLinkedin />, link: profile.social.linkedin }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-slate-100 dark:bg-[#111111] rounded-2xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-rose-500 dark:hover:bg-rose-500 transition-all font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form onSubmit={sendEmail} className="space-y-4 md:space-y-5">
            <div>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full h-12 md:h-14 bg-slate-50 dark:bg-[#111111]/80 border border-slate-200 dark:border-white/10 focus:border-rose-500 dark:focus:border-rose-500 focus:bg-white dark:focus:bg-[#0a0a0a] rounded-2xl px-4 md:px-5 text-slate-900 dark:text-white focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500 text-sm md:text-base font-bold"
              />
            </div>

            <div>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full h-12 md:h-14 bg-slate-50 dark:bg-[#111111]/80 border border-slate-200 dark:border-white/10 focus:border-rose-500 dark:focus:border-rose-500 focus:bg-white dark:focus:bg-[#0a0a0a] rounded-2xl px-4 md:px-5 text-slate-900 dark:text-white focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500 text-sm md:text-base font-bold"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message Details"
                required
                className="w-full bg-slate-50 dark:bg-[#111111]/80 border border-slate-200 dark:border-white/10 focus:border-rose-500 dark:focus:border-rose-500 focus:bg-white dark:focus:bg-[#0a0a0a] rounded-2xl p-4 md:p-5 text-slate-900 dark:text-white focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500 text-sm md:text-base resize-none font-bold"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full h-12 md:h-14 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl text-[12px] md:text-[14px] font-black tracking-widest uppercase hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white transition-all shadow-xl"
            >
              Send Communication
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
