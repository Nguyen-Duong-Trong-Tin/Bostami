import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaArrowDownLong } from "react-icons/fa6";
import img from "../../images/person-1.webp";
import "./Download.scss";

function Download() {
  return (
    <>
      <section className="download">
        <div className="container">
          <div className="download__content">
            <div className="download__inner-img">
              <img src={img} alt="Nguyễn Dương Trọng Tín" />
            </div>
            <h2 className="download__title">Nguyễn Dương Trọng Tín</h2>
            <p className="download__desc">Backend developer</p>
            <ul className="download__contact">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100015809478694">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1">
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCj7uVAjqnwPXSDqEETqy2KQ">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tin963145/">
                  <FaInstagram />
                </a>
              </li>
            </ul>
            <button className="button button--one">
              <FaArrowDownLong />
              <span>Download</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Download;