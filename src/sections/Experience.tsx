import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Kiuub",
      role: "Full Stack Developer, externe (remote)",
      url: "https://www.youtube.com/channel/UCqkh6vbMkhFbCJmQ_42KWew",
      start: "January 2022",
      end: "March 2023",
      shortDescription: [
        "Worked alongside a team of developers, designers, and project managers to create and maintain web applications for clients.",
        "Core tech stack was weweb, vue and nextjs, with postgresql as the database.",
        "Implement Authentication & Stripe Integration for client projects",
        "Develop postgresql queries and views",
      ],
    },
    {
      name: "Fiverr",
      role: "Freelance Web Developer",
      url: "https://www.fiverr.com/xxxxx",
      start: "March 2021",
      end: "Present",
      shortDescription: [
        "Developed and maintained web applications for clients.",
        "Handled client communication, project management, and development.",
        "Core tech stack was react, node, nextjs, with a variety of database and cloud services / api.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
