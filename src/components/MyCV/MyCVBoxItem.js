function MyCVBoxItem(props) {
  const { name, img, title, desc } = props;

  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-12">
        <div className={`myCV__box myCV__box--${name}`}>
          <div className="row">
            <div className="col-2">
              <div className="myCV__inner-logo">
                <img src={img} alt={title} />
              </div>
            </div>
            <div className="col-10">
              <h3 className="myCV__title">{title}</h3>
              <p className="myCV__desc">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCVBoxItem;