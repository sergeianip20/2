import s from './Portfolio.module.css'
import Web1 from '../../imgs/img/web-1.jpg'
import Web2 from '../../imgs/img/web-2.jpg'
import Web3 from '../../imgs/img/web-3.jpg'
import Web4 from '../../imgs/img/web-4.jpg'
export const MyPortfolio=()=> {
    return <section className="section bg-custom-gray" id="portfolio">
         <div className="container">
                <h1 className="mb-5"><span className="text-danger">My</span> Portfolio</h1>

                <div className="portfolio">
                    <div className="portfolio-container">
<div className={s.flex}>
                        <div className="col-md-6 col-lg-4 web new">
                            <div className="portfolio-item">
                                <img src={Web1} className="img-fluid"
                                     alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                    <div className="content-holder">
                                        <a className="img-popup" href="assets/imgs/web-1.jpg"></a>
                                        <div className="text-holder">
                                            <h6 className="title">WEB</h6>
                                            <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 web new">
                            <div className="portfolio-item">
                                <img src={Web2} className="img-fluid"
                                     alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                    <div className="content-holder">
                                        <a className="img-popup" href="assets/imgs/web-2.jpg"></a>
                                        <div className="text-holder">
                                            <h6 className="title">WEB</h6>
                                            <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 web">
                            <div className="portfolio-item">
                                <img src={Web4} className="img-fluid"
                                     alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                    <div className="content-holder">
                                        <a className="img-popup" href="assets/imgs/web-4.jpg"></a>
                                        <div className="text-holder">
                                            <h6 className="title">WEB</h6>
                                            <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                        </div>
                                    </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-4 web new">
                            <div className="portfolio-item">
                                <img src={Web3} className="img-fluid"
                                     alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
                                    <div className="content-holder">
                                        <a className="img-popup" href="assets/imgs/web-3.jpg"></a>
                                        <div className="text-holder">
                                            <h6 className="title">WEB</h6>
                                            <p className="subtitle">Expedita corporis doloremque velit in totam!</p>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                    </div>
                                </div>

            </div>
        </section>

}