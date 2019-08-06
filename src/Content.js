import React from 'react';
import ya from './ya.jpg';
import dima from './dima.jpg';
import bohdan from './bohdan.jpg';
import mikoltsya from './mikoltsya.jpg';
import snig from './snig.jpg';
import yarik from './yarik.jpg';
import './App.css';
import video from './video.mp4';
import { 
    Row, 
    Col, 
    Container, 
} from 'reactstrap';
import Slider from './Slider';

function Content() {

    return (
        <Container fluid>
            <div className="animated fadeIn mb-3">
                <Row>
                    <Col style={{ padding: '0', marginTop: '107px' }}>
                        <video id="background-video" loop muted autoPlay>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row>
                <Row id="our-school" style={{ height: 'auto', paddingTop: '40px', paddingBottom: '40px', display: 'flex', justifyContent: 'center' }}>
                    <Col sm="10" md={{ size: 6 }} className="content-school text-center">
                        <h1 className="content-school-h1">
                            Наша школа
                        </h1>
                        <p className="content-school-p">
                            Привіт. 
                            Наша школа - це не стандартна навчальна платформа. 
                            Ми катаємося на дошках, граємо на музичних інструментах, танцюємо, жонглюємо, граємо у футбег, ходимо по слек-лайну та їздимо в подорожі по всьому світу.
                            Наша команда - це колоритні особистості з невичерпним зарядом енергії. Ми любимо світ навколо, цінуємо природу і творимо мистецтво
                        </p>
                    </Col>
                </Row>
                <Row id="services" style={{ height: 'auto', paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#f0eeea', display: 'flex', justifyContent: 'center' }}>
                    <Row style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
                        <Col sm="10" md={{ size: 6 }} className="content-school text-center">
                            <h1 className="content-school-h1">
                                Послуги
                            </h1>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                        <Col xl="8" lg="10" md="10" sm="11">
                            <Row>
                                <div className="services-card col-lg-6 col-md-12 col-sm-12">
                                    <h3>
                                        Групові заняття 
                                    </h3>
                                    <p className="content-school-p">
                                        Заняття проходять для всіх рівнів в групах 5-10 людей. Тривалість - 2 години. В кінці вас очікує чай та смачненьке
                                    </p>
                                </div>
                                <div className="services-card col-lg-6 col-md-12 col-sm-12">
                                    <h3>
                                        Індивідуальні заняття 
                                    </h3>
                                    <p className="content-school-p">
                                        Приватні заняття проходять з тренером в зручний для вас час. Тривалість заняття - від однієї години. Це можливість максимально скористатися досвідом і знаннями наших вчителів і за короткий період освоїти лонгборд
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div className="services-card col-lg-6 col-md-12 col-sm-12">
                                    <h3>
                                        Лонгборд-активності 
                                    </h3>
                                    <p className="content-school-p">
                                        Ми можемо допомогти зробити ваш вікенд з друзями, сім'єю чи колегами незвичайним, додати спортивну ноту лонгборда та слек-лайну, організувати інші активності на свіжому повітрі та забезпечити вас смачною їжею та чудовим настроєм
                                    </p>
                                </div>
                                <div className="services-card col-lg-6 col-md-12 col-sm-12">
                                    <h3>
                                        Дошки в оренду 
                                    </h3>
                                    <p className="content-school-p">
                                        Якщо у вас немає дошки, але дуже кортить покататися - ми даємо дошки в оренду, а також можемо позичити захист - шолом, рукавиці, наколінники та налокітники для безпечного катання
                                    </p>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Row>
                <Row id="team" style={{ height: 'auto', paddingTop: '40px', paddingBottom: '40px', display: 'flex', justifyContent: 'center' }}>
                    <Row style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
                        <Col sm="10" md={{ size: 6 }} className="content-school text-center">
                            <h1 className="content-school-h1">
                                Команда
                            </h1>
                        </Col>
                    </Row>
                    <Row style={{ width: '60vw', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '33%' }}>
                            <div className="member-img">
                                <img src={ya} alt="longboard teacher" className="img-responsive img-circle" />
                            </div>
                            <h2>Андрiй</h2>
                        </div>
                        <div style={{ flex: '33%' }}>
                            <div className="member-img">
                                <img src={snig} alt="longboard teacher" className="img-responsive img-circle" />
                            </div>
                            <h2>Снiгур</h2>
                        </div>
                        <div style={{ flex: '33%' }}>
                            <div className="member-img">
                                <img src={bohdan} alt="longboard teacher" className="img-responsive img-circle" />
                            </div>
                            <h2>Богдан</h2>
                        </div>
                    </Row>  
                    <Row style={{ width: '60vw', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '33%' }}>
                            <div className="member-img">
                                <img src={dima} alt="longboard teacher" className="img-responsive img-circle" />
                            </div>
                            <h2>Дiма Бонлесович</h2>
                        </div>
                        <div style={{ flex: '33%' }}>
                            <div className="member-img">
                                <img src={yarik} alt="longboard teacher" className="img-responsive img-circle" />
                            </div>
                            <h2>Ярчiк Тойсайдович</h2>
                        </div>
                        <div style={{ flex: '33%' }}>
                            <div className="member-img">
                                <img src={mikoltsya} alt="longboard teacher" className="img-responsive img-circle" />
                            </div>
                            <h2>Микольця</h2>
                        </div>
                    </Row>  
                </Row>
                <Row id="photo" style={{ height: 'auto', paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#f0eeea', display: 'flex', justifyContent: 'center' }}>
                    <Row style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
                        <Col sm="10" md={{ size: 6 }} className="content-school text-center">
                            <h1 className="content-school-h1">Фото</h1>
                        </Col>
                    </Row>
                    <Row style={{ height: 'auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Slider />
                    </Row>
                </Row>
            </div>
        </Container>
    );
}

export default Content;
