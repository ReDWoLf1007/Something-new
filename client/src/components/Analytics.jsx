import FlipNumbers from 'number-flip';

export const Analytics = () => {
    return (
        <>
            <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2><FlipNumbers number="50+" /></h2>
              <p>registered companies</p>
            </div>
            <div className="div1">
              <h2><FlipNumbers number="10,000+" /></h2>
              <p>Happy Clients</p>
            </div>
            <div className="div1">
              <h2><FlipNumbers number="500+" /></h2>
              <p>Well known developers</p>
            </div>
            <div className="div1">
              <h2>24/7</h2>
              <p>Services</p>
            </div>
          </div>
        </section>
        </>
    )
}