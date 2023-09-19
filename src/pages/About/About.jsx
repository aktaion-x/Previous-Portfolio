import "./About.css";
import img from "../../assets/my-picture.png";

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <header>
          <div className="info">
            <h1>Ghassan Athamin</h1>
            <p>
              Hi, I'm Ghassan, Full-Stack Web Developer with more than year of hands-on experience who is highly
              productive, self-motivated, and driven by an unwavering desire to create exceptional web solutions. As
              well as the in collaboration and communication, ensuring the delivery of effective web applications.
            </p>
            <p>
              With a background in Graphic Design, I have transitioned my career path to web development, allowing me to
              combine my love for aesthetics with the power of coding.
            </p>
          </div>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </header>
        <div className="content">
          <section>
            <h3>Web Development Skills</h3>
            <ul>
              <li>
                <strong>Front-end Development: </strong>
                React, Vanilla JavaScript
              </li>
              <li>
                <strong>Back-end Development: </strong>
                ASP.NET, ExpressJS, Laravel
              </li>
              <li>
                <strong>Database Systems: </strong>
                SQL as (SQLite, MySQL) and NoSQL as MongoDB
              </li>
            </ul>
          </section>
          <section>
            <h3>Skills and Programming Languages</h3>
            <ul>
              <li>Typescript / Node.js / ExpressJS / React / Mongoose</li>
              <li>C# / .NET / ASP.NET</li>
              <li>MySQL / SQLite / MongoDB</li>
              <li>Tailwind / Bootstrap</li>
              <li>PHP - Laravel (Basic)</li>
              <li>Python (Basic)</li>
              <li>Git - Github</li>
            </ul>
          </section>
          <section>
            <h3>Knowledge</h3>
            <ul>
              <li>Figma, PS, Ai</li>
              <li>Familiar with Microsoft Azure</li>
              <li>Linux / Bash</li>
              <li>VMs (VMware, Virtual Box, Azure VM)</li>
              <li>Networking (IPv4 - IPv6, TCP/IP Model, SSH)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
