import { Analytics } from "../components/Analytics";

export const Home = () => {
    return (
      <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                      <p>We are the World Best Second Hand Books Website</p>
                      <h1>Welcome to Tiwari ka Mela</h1>
                      <p>
                        Are you ready to take your business to the next level with
                        second hand books? Look no further! At Tiwari ka Mela,
                        we specialize in providing books and solutions
                        tailored to meet your unique needs.
                       </p>
                       <div className="btn btn-group">
                         <a href="/connect">
                           <button className="btn">Connect Now</button>
                         </a>
                         <a href="/services">
                           <button className="btn secondary-btn ">Learn Now</button>
                         </a>
                       </div>
                    </div>

                    {/* hero images */}

                    <div className="hero-image">
                      <img src="/images/home.png" alt="Books for Life" width={400} height={400} />
                    </div>
                </div>
            </section>
        </main>

        {/* 2nd section  */}
        <Analytics />

        {/* 3rd section  */}

        <section className="section-hero">
                <div className="container grid grid-two-cols">
                  {/* hero images */}

                  <div className="hero-image">
                      <img src="/images/design.png" alt="Books for Life" width={400} height={400} />
                    </div>
                    <div className="hero-content">
                      <p>We are the World Best Second Hand Books Website</p>
                      <h1>Get Started Today</h1>
                      <p>
                        Are you ready to take your business to the next level with
                        second hand books? Look no further! At Tiwari ka Mela,
                        we specialize in providing books and solutions
                        tailored to meet your unique needs.
                       </p>
                       <div className="btn btn-group">
                         <a href="/connect">
                           <button className="btn">Connect Now</button>
                         </a>
                         <a href="/services">
                           <button className="btn secondary-btn ">Learn Now</button>
                         </a>
                       </div>
                    </div>

                </div>
            </section>
      </>
    )
};