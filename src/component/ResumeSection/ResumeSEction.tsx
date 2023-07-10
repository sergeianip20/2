

export const ResumeSection=()=> {
    return <div>
        <section className="section" id="resume">
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">Мое</span> Резюме</h2>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Опыт работы</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2022 - Present</h6>
                                <p>Frontend Developer</p>
                                <p className="subtitle">Разработка и поддержка действующих приложений.
                                    - Работа в большой команде,
                                    - Проверка работоспособности приложения,
                                    в рамках единичного инцидента.
                                    - Решение вопросам авторизации и регистрации по REST API
                                    - Разработка внутренного продукта для пользования
                                    сотрудниками компании, основной стек при разработке
                                    React / Redux
                                    - Архитектурные решения проекта (расслоение пользовательского
                                    интерфейса, BLL, DAL, Server);
                                    - Надлежащее управление состоянием BLL с помощью Redux, Thunk
                                    Toolkit и т. д.;
                                    - Покрытие приложений тестами;</p>
                                <hr/>
                                    <h6 className="title text-danger">2018 - 2019</h6>
                                    <p>Front-end Developer</p>
                                    <p className="subtitle">- Создание и ведение сайтов клиентов
                                        - Работа с сервером с помощью ajax (CRUD
                                        определение и обработка данных);
                                        - Работа с авторизацией и регистрацией
                                        - Архитектурные решения проекта (расслоение
                                        пользовательского
                                        интерфейса, BLL, DAL, Server);
                                        - Покрытие приложений тестами.</p>
                                    <hr/>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Образование</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2022 - Present</h6>
                                <p>IT-INCUBATOR</p>
                                <p className="subtitle">Frontend Developer</p>
                                <hr/>
                                    <h6 className="title text-danger">2017 - 2021</h6>
                                    <p>Самарский Государтсвенный  Экономический Университет </p>
                                    <p className="subtitle">Финансы и кредит</p>
                                    <hr/>
                                        <h6 className="title text-danger">2013 - 2017</h6>
                                        <p>Самарский Государтсвенный Колледж</p>
                                        <p className="subtitle">Специалист Банковского дела</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Навыки</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>HTML5  CSS3</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '97%'}}
                                        ></div>
                                </div>
                                <h6>JavaScript</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}}
                                           ></div>
                                </div>
                                <h6>React</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}}
                                         ></div>
                                </div>
                                <h6>Redux</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%'}}
                                        ></div>
                                </div>
                                <h6>Material UI</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%'}}
                                         ></div>
                                </div>
                                <h6>Tempora</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%'}}
                                         ></div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Языки</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>Англинский </h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}}
                                         ></div>
                                </div>
                                <h6>Русский</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger"  role="progressbar" style={{width: '99%'}}
                                         ></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
}
