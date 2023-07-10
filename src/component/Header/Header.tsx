import '../../css/johndoe.css'
import '../../css/themify-icons.css'
export const Header=()=> {
    return <div>
        <a href="components.html" className="btn btn-primary btn-component" data-spy="affix" data-offset-top="600"><i
            className="ti-shift-left-alt"></i>Компоненты</a>
        <header className="header">
            <div className="container">
                <ul className="social-icons pt-3">
                    <li className="social-item"><a className="social-link text-light" href="#"><img src={''}/><i
                        className="ti-facebook" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-twitter"
                                                                                                  aria-hidden="true"></i></a>
                    </li>
                    <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-google"
                                                                                                  aria-hidden="true"></i></a>
                    </li>
                    <li className="social-item"><a className="social-link text-light" href="#"><i
                        className="ti-instagram" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link text-light" href="#"><i className="ti-github"
                                                                                                  aria-hidden="true"></i></a>
                    </li>
                </ul>
                <div className="header-content">
                    <h4 className="header-subtitle">Привет, я </h4>
                    <h1 className="header-title">Анипченко Сергей</h1>
                    <h6 className="header-mono">Frontend  Developer</h6>
                    <button className="btn btn-primary btn-rounded"><i className="ti-printer pr-2"></i> <a className={'header_link'} href={'https://hh.ru/resume/a4a84f1dff09a113d40039ed1f704572574454'}> Resume </a>
                    </button>
                </div>
            </div>
        </header>
        </div>
}
