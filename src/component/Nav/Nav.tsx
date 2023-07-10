import avatar from '../../imgs/img/avatar.jpg'
import React , {useState} from 'react'
export const Nav =()=> {
const [open, setOpen] = useState(true)
    return <div>

        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix"
             data-offset-top="510">
            {open ?
                <div className="container">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" onClick={()=>{setOpen(false)}}></span>
                    </button>
                    <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Главная</a>
                            </li>

                            <li className="nav-item">
                                <a href="#resume" className="nav-link">Резюме</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav brand">
                            <img src={avatar} alt="" className="brand-img"/>
                            <li className="brand-txt">
                                <h5 className="brand-title"></h5>
                                <div className="brand-subtitle"> Developer</div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">Портфолио</a>
                            </li>

                            <li className="nav-item last-item">
                                <a href="#contact" className="nav-link">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div> :
                <div className="grid">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon float-right " onClick={()=>{setOpen(true)}}></span>
                    </button>
                    <div className="mt-sm-20 ">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Главная</a>
                            </li>

                            <li className="nav-item">
                                <a href="#resume" className="nav-link">Резюме</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav brand">
                            <img src={avatar} alt="" className="brand-img"/>
                            <li className="brand-txt">
                                <h5 className="brand-title"></h5>
                                <div className="brand-subtitle"> Developer</div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">Портфолио</a>
                            </li>

                            <li className="nav-item last-item">
                                <a href="#contact" className="nav-link">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            }

        </nav>
    </div>
}
