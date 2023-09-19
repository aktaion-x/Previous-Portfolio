import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Chrome-Extension Taskify Tab",
      features: "add, delete, complete Tasks, change page title, add favorite websites",
      technologiesUsed: ["React", "Typescript", "Chrome-Extension API", "Tailwind-css"],
      description:
        "replace default Chrome New tab with a beautiful minimal functional one, that let you add you'r todo list change the title and add you'r favorite websites",
      links: {
        github: "https://github.com/aktaion-x/Chrome-Extension-Taskify.git",
        install: "https://drive.google.com/drive/folders/17VVW9xM_T-QHJS6t8gQrZRoNq6KqTTh5?usp=sharing",
        live: "http://20.203.19.162:8885/"
      }
    },
    {
      name: "Philadelphia Estates",
      features:
        "signup or login to add edit and delete Estates, users can view states and contact the seller via email",
      technologiesUsed: ["ASP.NET Core", "EF Core", "SQLite", "React", "Typescript", "Tailwind-css"],
      description:
        "Philadelphia Estates is a Amman based website that let people sell and buy Real Estates. users also can search, filter and find their desired Estate",
      links: {
        github: "https://github.com/aktaion-x/Philadelphia-Estates.git",
        live: "http://20.203.19.162:8884/"
      }
    },
    {
      name: "Twitter-X Clone",
      features:
        "In this clone user can follow other users, react to their tweets by (reply, quote, like, retweet, and add to bookmark) and user can delete his own tweet (regular tweet, reply, quote). follow other users, etc...",
      technologiesUsed: ["React", "Node.js", "radius-server", "MongoDB", "ExpressJS"],
      description:
        "twitter clone build using MERN Stack (MongoDB, Express.js, React, Node.js) it's a backend-frontend clone and it does have the most of what real-twitter provide. e.g. create tweet, quote tweet, reply, like, retweet, add to bookmark, and more and more...",
      links: {
        github: "https://github.com/aktaion-x/Twitter-Clone.git",
        live: "http://20.203.19.162:8883/"
      }
    },
    {
      name: "Career Link",
      features:
        "Responsive Laravel project. that have an Authentication System, Post, Show, Update, Delete a job and archive it.",
      technologiesUsed: [
        "Laravel",
        "MySQL",
        "Foreign Keys",
        "Models",
        "Migrations",
        "Pagination",
        "Filtering",
        "CRUD controllers",
        "Blade",
        "Factories"
      ],
      description:
        "Career Link, a web application designed to connect job seekers and employers in a seamless and efficient manner. Developed with a passion for Laravel and MySQL.",
      links: {
        github: "https://github.com/aktaion-x/Laravel-CareerLink.git",
        live: "http://20.203.19.162:8881/"
      }
    },
    {
      name: "MoviesApp",
      features: "a Responsive App, whrere user can add a movie, rate it, and filter them based on genres",
      technologiesUsed: ["HTML - CSS", "Javascript", "PHP", "MySQL"],
      description:
        "MoviesApp is a Web Application designed and developed to enhance my skills in PHP and MySQL. With a focus on creating a user-friendly and intuitive experience.",
      links: {
        github: "https://github.com/aktaion-x/PHP-MySQL-MoviesApp.git",
        live: "http://20.203.19.162:8880/"
      }
    },
    {
      name: "MERN Make Friends",
      features:
        "a Responsive App that Allows users to connect with one another, add and remove friends. This project showcases my proficiency in various technologies and demonstrates my ability to build a functional and interactive web application",
      technologiesUsed: ["NodeJS", "React", "MongoDB", "MongooseJS", "ExpressJS", "Cloudinary API", "JWT"],
      description:
        "MakeFriends, a web application developed as a part of my journey to master the MERN stack (MongoDB, Express, React, Node.js). MakeFriends is the culmination of my efforts to develop a robust and functional web application using the MERN stack.",
      links: {
        github: "https://github.com/aktaion-x/PHP-MySQL-MoviesApp.git",
        live: "http://20.203.19.162:8882/"
      }
    }
  ];

  return (
    <div className="Projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="projects">
          {projects &&
            projects.map((project, index) =>
              <div key={Math.random()} className="box">
                <a target="_blank" href={project.links.live} className="media">
                  <img src={"/img/projects/" + project.name.toLowerCase().split(" ").join("-") + ".png"} alt="" />
                </a>
                <div className="content">
                  <h3>
                    <a target="_blank" href={project.links.live}>
                      {project.name}
                    </a>
                  </h3>
                  <h5 className="features">
                    Features: {project.features}
                    <span />
                  </h5>
                  <div className="technologies-used">
                    <h5>Technologies used:</h5>
                    <ul>
                      {project.technologiesUsed.map(technology =>
                        <li key={Math.random()}>
                          <a>
                            {technology}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <h5 className="description">
                    Description: <span>{project.description}</span>
                  </h5>
                  <div className="links">
                    {Object.keys(project.links).map(key =>
                      <div key={key}>
                        {key[0].toUpperCase() + key.slice(1)}:{" "}
                        <a target="_blank" href={project.links[key]}>
                          {project.links[key].length > 35
                            ? project.links[key].slice(0, 35) + "..."
                            : project.links[key].slice(0, 35)}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
