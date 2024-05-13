import logo from "../../images/logo-preview.webp";
import "./HeaderLink.scss";
import { useContext } from "react";
import { Data } from "../../App.js";

function HeaderLink() {
  const data = useContext(Data);
  const { setPage } = data;

  const handleChangeTab = (e) => {
    setPage(e);
  }

  return (
    <>
      <section className="header-link">
        <div className="container">
          <div className="header-link__content">
            <div className="header-link__inner-logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="header-link__inner-list">
              <ul className="header-link__list">
                <li onClick={() => handleChangeTab("home")}>Home</li>
                <li onClick={() => handleChangeTab("about-tin")}>About Tin</li>
                <li onClick={() => handleChangeTab("layout")}>Layout</li>
                <li onClick={() => handleChangeTab("about-han")}>About Han</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeaderLink;