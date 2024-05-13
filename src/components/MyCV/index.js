import MyCVBoxItem from "./MyCVBoxItem";
import "./MyCV.scss";
import { useContext } from "react";
import { Data } from "../../App";

function MyCV() {
  const data = useContext(Data);
  const { img, name, descOne, descTwo, skill } = data;

  return (
    <>
      <section className="myCV">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="myCV__box-head">
                <h2 className="myCV__title-head">My CV</h2>
                <div className="myCV__inner-info">
                  <div className="myCV__inner-avt">
                    <img src={img} alt="avt" />
                  </div>
                  <div className="myCV__name">{name}</div>
                </div>
                <p className="myCV__desc-head">{descOne}</p>
                <p className="myCV__desc-head">{descTwo}</p>
              </div>
            </div>
            <div className="col-12">
              <h2 className="myCV__title-box">What I Do!</h2>
            </div>
            {skill.map((item, idx) => (
              <MyCVBoxItem key={idx} name={idx % 3 ? "five" : "four"} img={item.img} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MyCV;