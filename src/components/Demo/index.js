import preview from "../../images/preview.webp";
import demo1 from "../../images/demo-1.webp";
import demo2 from "../../images/demo-2.webp";
import demo3 from "../../images/demo-3.webp";
import "./Demo.scss";
import DemoBoxItem from "./DemoBoxItem";
import { useContext } from "react";
import { Data } from "../../App.js";

function Demo() {
  const data = useContext(Data);
  const { setPage } = data;

  return (
    <>
      <div className="demo">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="demo__box-head">
                <h2 className="demo__title-head">Home Demo</h2>
                <img src={preview} alt="preview" />
                <h4 className="demo__subtitle">03 Awesome Light & Dark Demo</h4>
                <p className="demo__desc">Bostami build with Modern, Elegant & Beautiful trendng technology like React Nextjs template.</p>
              </div>
            </div>
            <DemoBoxItem
              page="about-tin"
              setPage={setPage}
              img={demo1}
              imgTitle="demo"
              title="Sidebar With Box"
            />
            <DemoBoxItem
              page="layout"
              setPage={setPage}
              img={demo2}
              imgTitle="demo"
              title="Regular Layout"
            />
            <DemoBoxItem
              page="about-han"
              setPage={setPage}
              img={demo3}
              imgTitle="demo"
              title="Box Layout"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Demo;