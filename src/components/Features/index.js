import preview from "../../images/preview.webp";
import nextJS from "../../images/features-1.webp";
import framer from "../../images/features-2.webp";
import bootstrap from "../../images/features-3.webp";
import awesome from "../../images/features-4.webp";
import json from "../../images/features-5.webp";
import form from "../../images/features-6.webp";
import FeaturesBoxItem from "./FeaturesBoxItem";
import "./Features.scss";

function Features() {
  return (
    <>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="features__box-head">
                <h2 className="features__title-head">Salient Features</h2>
                <div className="features__inner-img">
                  <img src={preview} alt="preview"></img>
                </div>
              </div>
            </div>
            <FeaturesBoxItem
              img={nextJS} 
              imgTitle="Next JS" 
              title="Next JS 14+" 
              desc="We used latest react Nextjs vertion ^14+. Max Components are Reusable for you. It's a awesome design made by React NextJS." 
            />
            <FeaturesBoxItem 
              img={framer} 
              imgTitle="Framer" 
              title="Framer Motion" 
              desc="The Framer Motion Filtering Layout is a visually engaging and interactive user interface design that incorporates Framer Motion, a popular animation library for React applications." 
            />
            <FeaturesBoxItem 
              img={bootstrap} 
              imgTitle="Bootstrap" 
              title="Bootstrap5+" 
              desc="Bootstrap 5, the popular front-end framework, simplifies responsive web design with its extensive library of pre-built components, grid system, and CSS utilities, allowing developers to create modern and mobile-friendly websites quickly." 
            />
            <FeaturesBoxItem 
              img={awesome} 
              imgTitle="Awesome" 
              title="Font Awesome Icon" 
              desc="Font Awesome is a widely used icon library that provides a vast collection of scalable vector icons that can be easily customized and integrated into web applications." 
            />
            <FeaturesBoxItem 
              img={json} 
              imgTitle="JSON" 
              title="JSON Ready Code" 
              desc="We made all the code with Array of Object based. so you can prepare for your api whenever you want for it." 
            />
            <FeaturesBoxItem 
              img={form} 
              imgTitle="Form" 
              title="Working Contact Form" 
              desc="Now user can input, validates data, and sends messages, enhancing user engagement and facilitating effective communication." 
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Features;