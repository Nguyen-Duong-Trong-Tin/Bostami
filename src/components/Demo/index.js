import preview from "../../images/preview.webp";
import demo1 from "../../images/demo-1.webp";
import demo2 from "../../images/demo-2.webp";
import demo3 from "../../images/demo-3.webp";

import "./Demo.scss";

function Demo() {
  return (
    <>
      <div className="demo">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="demo__box-head">
                <h2 className="demo__title">Home Demo</h2>
                <img src={preview} alt="preview" />
                <h4 className="demo__subtitle">03 Awesome Light & Dark Demo</h4>
                <p className="demo__desc">Bostami build with Modern, Elegant & Beautiful trendng technology like React Nextjs template.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="demo__box demo__box--one">
                <div className="demo__inner-img">
                  <img src={demo1} alt="demo" />
                </div>
                <h3 className="demo__box-title">Sidebar With Box</h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="demo__box demo__box--two">
                <div className="demo__inner-img">
                  <img src={demo2} alt="demo" />
                </div>
                <h3 className="demo__box-title">Regular Layout</h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="demo__box demo__box--three">
                <div className="demo__inner-img">
                  <img src={demo3} alt="demo" />
                </div>
                <h3 className="demo__box-title">Box Layout</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Demo;