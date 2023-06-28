import './About.css';
import img from '../../assets/my-picture.png';

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <header>
          <div className="info">
            <h1>Ghassan Athamin</h1>
            <p>Hi, I'm Ghassan, a 24 years old web developer who started off as a Graphic Designer and then ventured into the exciting realm of programming. I have since developed a deep interest in web development and strive to create seamless, visually appealing online experiences.</p>
            <p>With a background in Graphic Design, I have transitioned my career path to web development, allowing me to combine my love for aesthetics with the power of coding.</p>
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
                HTML, CSS, and JavaScript
              </li>
              <li>
                <strong>Javascript Framework: </strong>
                React in specific
              </li>
              <li>
                <strong>Back-end Development: </strong>
                Node.js, PHP, ExpressJS, Laravel
              </li>
              <li>
                <strong>Database Systems: </strong>
                SQL as MySQL and NoSQL as MongoDB
              </li>
            </ul>
          </section>
          <section>
            <h3>Skills and Programming Languages</h3>
            <ul>
              <li>HTML - CSS</li>
              <li>Javascript / Node.js / ExpressJS / React / Mongoose</li>
              <li>PHP / Laravel / Artisan CLI</li>
              <li>MySQL - MongoDB</li>
              <li>Python</li>
              <li>Socket.io</li>
              <li>Git / Github</li>
            </ul>
          </section>
          <section>
            <h3 style={{ lineHeight: 1 }}>
              Knowledge <small>(These factors add an extra layer of creativity to my work)</small>
            </h3>
            <ul>
              <li>Graphic Design (PS, Ai, ID, etc..)</li>
              <li>Hostring & Domains (Familiar with namecheap solutions)</li>
              <li>Linux / Bash</li>
              <li>VMs (VMware, Virtual Box)</li>
              <li>Networking (IPv4 - IPv6, TCP/IP Model, SSH, Protocols)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
