"use client";

import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <motion.div
      key="contacto"
      style={{ position: "relative" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="w-full px-[20px] md:px-[40px] py-[60px] md:py-[100px]"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h1
          className="text-[48px] md:text-[72px] uppercase mb-8 md:mb-12 text-[#3b3b3b]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Contacto
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[80px] mb-[60px] md:mb-[80px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="font-['TWK_Everett:Regular',sans-serif] text-[18px] md:text-[24px] text-[#3b3b3b] leading-relaxed mb-6 md:mb-8">
              ¿Tienes un proyecto en mente? Hablemos y creemos algo increíble
              juntos.
            </p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="group"
              >
                <h3 className="text-[16px] md:text-[18px] uppercase mb-2 text-[#3b3b3b]">
                  Email
                </h3>
                <a
                  href="mailto:hola@fibradesign.com"
                  className="font-['TWK_Everett:Regular',sans-serif] text-[18px] md:text-[20px] text-[#3b3b3b] hover:opacity-70 transition-opacity break-all"
                >
                  hola@fibradesign.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h3 className="text-[16px] md:text-[18px] uppercase mb-2 text-[#3b3b3b]">
                  Teléfono
                </h3>
                <a
                  href="tel:+51987654321"
                  className="font-['TWK_Everett:Regular',sans-serif] text-[18px] md:text-[20px] text-[#3b3b3b] hover:opacity-70 transition-opacity"
                >
                  +51 987 654 321
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="text-[16px] md:text-[18px] uppercase mb-2 text-[#3b3b3b]">
                  Ubicación
                </h3>
                <p className="font-['TWK_Everett:Regular',sans-serif] text-[18px] md:text-[20px] text-[#3b3b3b]">
                  Lima, Perú
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-4 md:gap-6 pt-4"
              >
                {["Instagram", "Behance", "LinkedIn"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="font-['TWK_Everett:Regular',sans-serif] text-[14px] md:text-[16px] uppercase text-[#3b3b3b] hover:opacity-70 transition-opacity"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form className="space-y-[30px] md:space-y-[40px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <label
                  htmlFor="name"
                  className="block font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] text-[#3b3b3b] mb-3"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-0 border-b-2 border-[#3b3b3b]/30 focus:border-[#3b3b3b] outline-none py-3 font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] text-[#3b3b3b] transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] text-[#3b3b3b] mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-0 border-b-2 border-[#3b3b3b]/30 focus:border-[#3b3b3b] outline-none py-3 font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] text-[#3b3b3b] transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <label
                  htmlFor="budget"
                  className="block font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] text-[#3b3b3b] mb-3"
                >
                  Budget
                </label>
                <select
                  id="budget"
                  className="w-full bg-transparent border-2 border-[#3b3b3b]/30 focus:border-[#3b3b3b] outline-none py-3 px-4 rounded-lg font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] text-[#3b3b3b]/60 transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%233b3b3b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="">Select...</option>
                  <option value="under-3500">Under $3,500</option>
                  <option value="3600-7500">$3,600 - $7,500</option>
                  <option value="7600-12000">$7,600 - $12,000</option>
                  <option value="over-12000">Over $12,000</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <label
                  htmlFor="project"
                  className="block font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] text-[#3b3b3b] mb-3"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="project"
                  rows={6}
                  className="w-full bg-transparent border-0 border-b-2 border-[#3b3b3b]/30 focus:border-[#3b3b3b] outline-none py-3 font-['TWK_Everett:Regular',sans-serif] text-[16px] md:text-[18px] text-[#3b3b3b] transition-colors resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-[#3b3b3b] text-[#faf9f3] py-4 px-8 text-[16px] md:text-[18px] uppercase tracking-wider hover:bg-[#3b3b3b]/90 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send
              </motion.button>

              <motion.p
                className="font-mono text-[14px] md:text-[16px] tracking-wider text-[#3b3b3b] pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Latin design
                <br />
                with heart
              </motion.p>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            {
              img: "https://images.unsplash.com/photo-1660018322139-0e58555df00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY1NTY2OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
            },
            {
              img: "https://images.unsplash.com/photo-1616418534243-ab757ff8ce3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzY1NTUyMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
            },
            {
              img: "https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcnRpc3RpYyUyMGdhbGxlcnl8ZW58MXx8fHwxNzY1NTc3Nzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.img
                src={item.img}
                alt={`Proyecto destacado ${index + 1}`}
                className="w-full h-[350px] object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
