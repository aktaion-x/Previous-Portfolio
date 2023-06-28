import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Career Link',
      features: 'Responsive Laravel project. that have an Authentication System, Post, Show, Update, Delete a job and archive it.',
      technologiesUsed: ['Laravel', 'MySQL', 'Foreign Keys', 'Models', 'Migrations', 'Pagination', 'Filtering', 'CRUD controllers', 'Blade', 'Factories'],
      description: 'Career Link, a web application designed to connect job seekers and employers in a seamless and efficient manner. Developed with a passion for Laravel and MySQL.',
      links: {
        github: 'http://github.com',
        live: 'http://live.com',
      },
    },
    {
      name: 'MERN Workout',
      features: 'Create Custom Workouts, Track Progress, Personalized Dashboard, Secure User Authentication and a Responsive App',
      technologiesUsed: ['React', 'Node.js', 'MongoDB', 'MongooseJS', 'ExpressJS', 'JWT'],
      description: 'WorkoutApp is a full-stack web application designed to help users create and manage their workout routines effectively. WorkoutApp provides a user-friendly interface for fitness enthusiasts to track their workouts with ease.',
      links: {
        github: 'http://github.com',
        live: 'http://live.com',
      },
    },
    {
      name: 'MoviesApp',
      features: 'a Responsive App, whrere user can add a movie, rate it, and filter them based on genres',
      technologiesUsed: ['HTML - CSS', 'Javascript', 'PHP', 'MySQL'],
      description: 'MoviesApp is a Web Application designed and developed to enhance my skills in PHP and MySQL. With a focus on creating a user-friendly and intuitive experience.',
      links: {
        github: 'http://github.com',
        live: 'http://live.com',
      },
    },
    {
      name: 'MERN Make Friends',
      features: 'a Responsive App that Allows users to connect with one another, add and remove friends. This project showcases my proficiency in various technologies and demonstrates my ability to build a functional and interactive web application',
      technologiesUsed: ['NodeJS', 'React', 'MongoDB', 'MongooseJS', 'ExpressJS', 'Cloudinary API', 'JWT'],
      description: 'MakeFriends, a web application developed as a part of my journey to master the MERN stack (MongoDB, Express, React, Node.js). MakeFriends is the culmination of my efforts to develop a robust and functional web application using the MERN stack.',
      links: {
        github: 'http://github.com',
        live: 'http://live.com',
      },
    },
    {
      name: 'Real-Time Chat App',
      features: 'Real-Time Communication, Secure Authentication and a Responsive Design.',
      technologiesUsed: ['Socket.io', 'React', 'NodeJS', 'MongoDB', 'MongooseJS', 'ExpressJS', 'Vite'],
      description: 'ChatApp, a real-time chat application built using the MERN stack and Socket.io. This project showcases my expertise in web development and demonstrates my ability to create dynamic, interactive, and secure applications.',
      links: {
        github: 'http://github.com',
        live: 'http://live.com',
      },
    },
  ]);

  return (
    <div className="Projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="projects">
          {projects &&
            projects.map((project, index) => (
              <div key={Math.random()} className="box">
                <a target="_blank" href="#" className="media">
                  <img src={'/img/projects/' + project.name.toLowerCase().split(' ').join('-') + '.png'} alt="" />
                </a>
                <div className="content">
                  <h3>{project.name}</h3>
                  <h5 className="features">
                    Features: {project.features}
                    <span></span>
                  </h5>
                  <div className="technologies-used">
                    <h5>Technologies used:</h5>
                    <ul>
                      {project.technologiesUsed.map((technology) => (
                        <li key={Math.random()}>
                          <a>{technology}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h5 className="description">
                    Description: <span>{project.description}</span>
                  </h5>
                  <div className="links">
                    <div>
                      Live:{' '}
                      <a target="_blank" href={project.links.live}>
                        {project.links.live}
                      </a>
                    </div>
                    <div>
                      Github:{' '}
                      <a target="_blank" href={project.links.github}>
                        {project.links.github}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
