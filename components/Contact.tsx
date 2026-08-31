'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
} from 'lucide-react'

function Contact() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            Get In Touch
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, want to collaborate, or just say hello?
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Let's Connect
              </h2>

              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new opportunities,
                freelance projects, internships, and innovative ideas.
              </p>
            </div>

          {/* Contact Cards */}
<div className="space-y-5">

  {/* Email */}
  <a
    href="mailto:sawantviraj60@gmail.com?subject=Let's%20Connect"
    className="group flex items-center justify-between gap-4 bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800 transition-all duration-300"
  >
    <div className="flex items-center gap-4">

      <Mail
        className="text-gray-400 group-hover:text-blue-400 transition"
        size={26}
      />

      <div>
        <p className="text-sm text-gray-400">
          Email
        </p>

        <p className="text-white">
          sawantviraj60@gmail.com
        </p>
      </div>

    </div>

    <ExternalLink
      size={20}
      className="text-gray-500 group-hover:text-blue-400 transition"
    />
  </a>


  {/* Phone */}
  <a
    href="tel:+918767743901"
    className="group flex items-center justify-between gap-4 bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-800 transition-all duration-300"
  >
    <div className="flex items-center gap-4">

      <Phone
        className="text-gray-400 group-hover:text-green-400 transition"
        size={26}
      />

      <div>
        <p className="text-sm text-gray-400">
          Phone
        </p>

        <p className="text-white">
          +91 8767743901
        </p>
      </div>

    </div>

    <ExternalLink
      size={20}
      className="text-gray-500 group-hover:text-green-400 transition"
    />
  </a>


  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/virajsawant2/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-between gap-4 bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800 transition-all duration-300"
  >
    <div className="flex items-center gap-4">

      <div className="w-[26px] h-[26px] flex items-center justify-center rounded-sm bg-blue-600 text-white font-bold text-sm group-hover:bg-blue-500 transition">
  in
</div>

      <div>
        <p className="text-sm text-gray-400">
          LinkedIn
        </p>

        <p className="text-white">
          Connect with me
        </p>
      </div>

    </div>

    <ExternalLink
      size={20}
      className="text-gray-500 group-hover:text-blue-500 transition"
    />
  </a>


  {/* Location */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Pune,Maharashtra,India"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-between gap-4 bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-800 transition-all duration-300"
  >
    <div className="flex items-center gap-4">

      <MapPin
        className="text-gray-400 group-hover:text-red-400 transition"
        size={26}
      />

      <div>
        <p className="text-sm text-gray-400">
          Location
        </p>

        <p className="text-white">
          Pune, Maharashtra, India
        </p>
      </div>

    </div>

    <ExternalLink
      size={20}
      className="text-gray-500 group-hover:text-red-400 transition"
    />
  </a>

</div>


            {/* Social Links */}
            {/* <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-blue-500 transition"
              >
                
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-blue-500 transition"
              >
                
              </a>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
          >
            <form className="space-y-6" action="https://formspree.io/f/xnjyjnpd" method="POST">
              <div>
                <label className="block mb-2 text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  name="fullName"
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  name="message"
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact