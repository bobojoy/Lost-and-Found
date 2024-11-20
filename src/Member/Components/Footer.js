import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div class="footerdetails">
        <a href="#" id="textlogo">
          Lost & Found
        </a>
        <p className="footer-p">
          {" "}
          &copy; Lost & Found, 2024 All Rights Reserved
        </p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            </a>
          </li>
        </ul>
        <div class="imagelogo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71KAKl0Tvwd5P2SFs1GjveEaaLIwNe-K0Vw&s"
            id="imagelogo"
          />
        </div>
      </div>
    </footer>
  );
}
