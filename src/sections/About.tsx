import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hola! My name is Maruf, and I am passionate about creating digital
            content for the web. My interest in web development was sparked in
            2018 when I started my undergraduate studies in Computer Science at
            North South University.
          </p>
          <p className="about-grid-info-text">
            After working as a freelance web developer for 2 years, I started
            working as a full-time software engineer at{" "}
            <Link
              href="https://www.youtube.com/channel/UCqkh6vbMkhFbCJmQ_42KWew"
              className="link"
              target="_blank"
            >
              Kiuub Studio
            </Link>
            , where I developed and maintained web applications for clients.
          </p>

          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight clients and exceed their
            expectations as a full-stack developer at fiverr.
          </p>

          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Clerk</li>
            <li className="about-grid-info-list-item">Deno</li>
            <li className="about-grid-info-list-item">CSS, tailwindcss</li>
            <li className="about-grid-info-list-item">
              Supabase, Firebase, postgreSQL
            </li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/profile.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
