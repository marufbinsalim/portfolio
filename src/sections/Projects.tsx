// @ts-nocheck
import { color } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Pokedex",
      projectLink: "https://netlify.com",
      projectDescription:
        "This is a web application that uses the PokeAPI to display information about different Pokemon, including their evolution levels and details. You can compare multiple Pokemon using a queue, and add them to your personal list using Firebase's Firestore database.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "SCSS",
        "Firebase",
        "Typescript",
        "PokeApi",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/project2.png",
      projectName: "Realtime Chat App",
      projectLink: "https://netlify.com",
      projectDescription:
        "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
      projectTech: [
        "React",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/project3.png",
      projectName: "Netflix App",
      projectLink: "https://netlify.com",
      projectDescription:
        "I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
      projectTech: [
        "React",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Express",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 0",
    padding: "0px",
    maxWidth: "min(1600px, 80vw)",
    width: "max-content",
    gap: "40px",
  };

  const cardStyle = {
    border: "1px solid var(--text)",
    borderRadius: "10px",
    overflow: "hidden",
    width: "400px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    color: "var(--text)",
    backgroundColor: "var(--background-color)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const contentStyle = {
    margin: "20px 0",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "var(--light-text)",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    marginBottom: "15px",
  };

  const techListStyle = {
    display: "flex",
    flexWrap: "wrap",
    listStyleType: "none",
    padding: 0,
  };

  const techItemStyle = {
    backgroundColor: "var(--background-color)",
    border: "1px solid var(--text)",
    padding: "5px 10px",
    borderRadius: "5px",
    margin: "5px",
    fontSize: "0.9rem",
  };

  const linkStyle = {
    color: "var(--text)",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  };

  const LinkContainerStyle = {
    display: "flex",
    color: "var(--text)",
    gap: "10px",
    marginTop: "auto",
    paddingTop: "20px",
  };

  return (
    <motion.div
      className="projects"
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div style={containerStyle}>
        {projectsData.map((project, index) => (
          <div key={index} style={cardStyle}>
            <Image
              width={300}
              height={200}
              src={project.image}
              alt={project.projectName}
              style={imageStyle}
            />
            <div style={contentStyle}>
              <h3 style={titleStyle}>{project.projectName}</h3>
              <p style={descriptionStyle}>{project.projectDescription}</p>
              <ul style={techListStyle}>
                {project.projectTech.map((tech, i) => (
                  <li key={i} style={techItemStyle}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div style={LinkContainerStyle}>
              <Link
                href={project.projectExternalLinks.github}
                style={linkStyle}
              >
                <FiGithub size={30} />
              </Link>
              <Link
                href={project.projectExternalLinks.externalLink}
                style={linkStyle}
              >
                <FiExternalLink size={30} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
