import s from './Portfolio.module.css'

export const MyPortfolio=()=> {
    return <section className="section bg-custom-gray" id="portfolio">
         <div className="container">
                <h1 className="mb-5"><span className="text-danger">Мое</span> Портфолио</h1>

                <div className="portfolio">
                    <div className="portfolio-container">
<div className={s.flex}>
                        <div className="col-md-6 col-lg-4 web new">
                            <div className="portfolio-item">
                                
                                <iframe  className={s.iframe}  src={"https://final-social.vercel.app/"}></iframe>
                                    <div className="content-holder">
                                        <a className="img-popup" href="https://final-social.vercel.app/">
                                        <div className="text-holder">
                                            <h6 className="title">WEB</h6>
                                            <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                        </div>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 web new">
                            <div className="portfolio-item">
                                <iframe className={s.iframe}  style={{border:'none'}}  src={"https://final-card.vercel.app/#/auth/login"}></iframe>

                                    <div className="content-holder">
                                        <a className="img-popup" href="https://final-card.vercel.app/#/auth/login">
                                        <div className="text-holder">
                                            <h6 className="title">WEB</h6>
                                            <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                        </div>
                                        </a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 web">
                            <div className="portfolio-item">

                                <iframe className={s.iframe}   src={"https://finak-todolist.vercel.app/login"}> </iframe>
                                    <div className="content-holder">
                                        <a className="img-popup" href="https://finak-todolist.vercel.app/login">
                                        <div className="text-holder">
                                            <h6 className="title">WEB</h6>
                                            <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                        </div>
                                        </a>
                                    </div>
                            </div>
                        </div>



                    </div>
                    </div>
                                </div>

            </div>
        </section>

}
