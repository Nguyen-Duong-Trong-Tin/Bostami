function DemoBoxItem(props) {
  const { setPage, page, img, imgTitle, title } = props;

  const handleChangeTab = () => {
    setPage(page);
  }

  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="demo__box demo__box--one" onClick={handleChangeTab}>
          <div className="demo__inner-img">
            <img src={img} alt={imgTitle} />
          </div>
          <h3 className="demo__title">{title}</h3>
        </div>
      </div>
    </>
  )
}

export default DemoBoxItem;