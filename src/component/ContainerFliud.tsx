

export const ContainerFliud=()=> {
    return <div>
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Who am I ?</h3>
                    <span className="line mb-5"></span>
                    <h5 className="mb-3">A Web  Developer Located In Our Lovely Earth</h5>
                    <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt
                        consequatur fugit repellendusillo voluptas?</p>
                    <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV
                    </button>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Personal Info</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Birthdate</span> : 21/07/1997</li>
                        <li><span>Email</span> : sergeianip20gmail.com</li>
                        <li><span>Phone</span> : +79871598778</li>
                        <li><span>Skype</span> : </li>
                        <li><span>Address</span> : Russia Samara.</li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-facebook"
                                                                                           aria-hidden="true"></i></a>
                        </li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-twitter"
                                                                                           aria-hidden="true"></i></a>
                        </li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-google"
                                                                                           aria-hidden="true"></i></a>
                        </li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-instagram"
                                                                                           aria-hidden="true"></i></a>
                        </li>
                        <li className="social-item"><a className="social-link" href="#"><i className="ti-github"
                                                                                           aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">My Expertise</h3>
                    <span className="line mb-5"></span>

                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Web Development</h6>
                            <p className="subtitle">Lorem ipsum dolor sit consectetur.</p>
                            <hr/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}