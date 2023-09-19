import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="container">
        <div className="content">
          <h1>Contact</h1>
          <ul>
            <li>
              <i className="fa-solid fa-envelope" />
              <a target="_blank" href="mailto:3assan.karake@proton.me">
                ghassan.athamin@gmail.com
              </a>
            </li>
            <li>
              <i className="fa-solid fa-square-phone" />
              <a target="_blank" href="tel:+962780222977">
                +962780222977
              </a>
            </li>
            <li>
              <i className="fa-brands fa-github" />
              <a target="_blank" href="https://github.com/aktaion-x">
                aktaion-x
              </a>
            </li>
            <li>
              <i className="fa-brands fa-linkedin" />
              <a target="_blank" href="https://www.linkedin.com/in/ghassan-athamin-016a42222">
                Ghassan Athamin
              </a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot" />
              <a target="_blank">Jordan, Amman</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
