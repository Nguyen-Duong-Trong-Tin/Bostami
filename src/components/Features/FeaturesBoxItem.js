function FeaturesBoxItem(props) {
  const { img, imgTitle, title, desc } = props;
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div className="features__box">
          <div className="features__inner-logo">
            <img src={img} alt={imgTitle} />
          </div>
          <h3 className="features__title">{title}</h3>
          <p className="features__desc">{desc}</p>
        </div>
      </div>
    </>
  )
}

export default FeaturesBoxItem;