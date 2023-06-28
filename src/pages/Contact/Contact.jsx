import './Contact.css';

const Contact = () => {
  return (
    <div className="Contact">
      <div className="container">
        <div className="content">
          <h1>Contact</h1>
          <ul>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a target="_blank" href="mailto:g.karake@proton.me">
                g.karake@proton.me
              </a>
            </li>
            <li>
              <i className="fa-solid fa-square-phone"></i>
              <a target="_blank" href="tel:+962780222977">
                +962780222977
              </a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <a target="_blank" href="https://goo.gl/maps/CQLyTdzJJWLY4dr48">
                Jordan, Amman, Marj-Alhamam
              </a>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
              <a target="_blank" href="#">
                Ghassan Athamin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
