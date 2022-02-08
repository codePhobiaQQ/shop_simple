const SubscribeSection = () => {
  return (
    <section className="newsletter-area section-padding-100-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="newsletter-text mb-100">
              <h2>
                Подпишись и получи скидуку <span>5%</span>
              </h2>
              <p>
                Нет нам лорем, эгет есмод нисл. До тех пор, пока свободный моя
                статья в Интернете. К сожалению, автор иногда бывает в порядке,
                и граница массы Европы.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="newsletter-form mb-100">
              <form action="#" method="post">
                <input
                  type="email"
                  name="email"
                  className="nl-email"
                  placeholder="E-mail"
                />
                <input type="submit" value="Подписаться" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
