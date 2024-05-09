import logo from "../../images/logo-preview.webp";
import { IoMdCodeDownload } from "react-icons/io";
import "./Header.scss";

function Header() {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="header__title">Modern,Trending & Creative Portfolio</h1>
            <h2 className="header__subtitle">React NextJS Template</h2>
            <div className="header__button">
              <button className="button button--one button--view">
                View Demo
                <IoMdCodeDownload />
              </button>
              <button className="button button--one button--purchase">Purchase Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header;