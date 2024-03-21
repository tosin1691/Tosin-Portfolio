import React from 'react'
import { Card, Container, Col, Row } from "react-bootstrap";
// import Projectsjson from "../projects";
import PasswordGenApp from "../assets/images/Screenshot-Pass-Gen-App.png"
import TeamProfileApp from "../assets/images/Team-Profile-Gen Screenshot.png"
import DrunkChefApp from "../assets/images/The-Drunk-Chef-screenshot.png"
import QuizApp from "../assets/images/Timed-coding-quiz.png"
import WeatherApp from "../assets/images/Weather-Dashboard-App.png"
import WatchlistApp from "../assets/images/watchlist-app.png"
import '../index.css'

const ProjectGallery = () => {
  return (
    <div className="pl-24 md:pl-40 pr-6 bg-gray-800 md:py-10 ">
    <Container name='projects'>
        <div>
            <span></span>
            <p className="text-4xl sm:text-6xl md:text-6xl pb-4 mb-10 max-w-[1100px] sectionHeader text-slate-50">Projects<span>.</span></p>
        </div>
        <Row>
            <Col lg={4}>
                <Card className='single-card'>
                    <Card.Img
                    src={PasswordGenApp}
                    />
                    <Card.ImgOverlay className="hover-text">
                        <Card.Title className="card-title">Random Password Generator App</Card.Title>
                        <div className='flex justify-evenly items-center w-full link-btns'>
                            <a href="https://github.com/tosin1691/Random-Password-Generator" target="_blank">
                                <button className='btn-item'>Code</button>
                            </a>
                            <a href="https://tosin1691.github.io/Random-Password-Generator/"target="_blank">
                                <button className='btn-item'>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className='single-card'>
                    <Card.Img
                    src={TeamProfileApp}
                    />
                    <Card.ImgOverlay className="hover-text">
                        <Card.Title className="card-title">Team Profile Generator (JS, Command-Line App)</Card.Title>
                        <div className='flex justify-evenly items-center w-full link-btns'>
                            <a href="https://github.com/tosin1691/Team-Profile-Generator" target="_blank">
                                <button className='btn-item'>Code</button>
                            </a>
                            <a href="">
                                <button className='btn-item'>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className='single-card'>
                    <Card.Img
                    src={DrunkChefApp}
                    />
                    <Card.ImgOverlay className="hover-text">
                        <Card.Title className="card-title">The Cocktail Recipe App</Card.Title>
                        <div className='flex justify-evenly items-center w-full link-btns'>
                            <a href="https://github.com/RedPez/The-Drunk-Chef-App" target="_blank">
                                <button className='btn-item'>Code</button>
                            </a>
                            <a href="https://redpez.github.io/The-Drunk-Chef-App/"target="_blank">
                                <button className='btn-item'>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col lg={4}>
                <Card className='single-card'>
                    <Card.Img
                    src={QuizApp}
                    />
                    <Card.ImgOverlay className="hover-text">
                        <Card.Title className="card-title">The Quiz App</Card.Title>
                        <div className='flex justify-evenly items-center w-full link-btns'>
                            <a href="https://github.com/tosin1691/Timed-Coding-Quiz" target="_blank">
                                <button className='btn-item'>Code</button>
                            </a>
                            <a href="https://tosin1691.github.io/Timed-Coding-Quiz/starter"target="_blank">
                                <button className='btn-item'>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className='single-card'>
                    <Card.Img
                    src={WeatherApp}
                    />
                    <Card.ImgOverlay className="hover-text">
                        <Card.Title className="card-title">The Weather App (API)</Card.Title>
                        <div className='flex justify-evenly items-center w-full link-btns'>
                            <a href="https://github.com/tosin1691/Weather-Dashboard-App" target="_blank">
                                <button className='btn-item'>Code</button>
                            </a>
                            <a href="https://tosin1691.github.io/Weather-Dashboard-App"target="_blank">
                                <button className='btn-item'>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className='single-card'>
                    <Card.Img
                    src={WatchlistApp}
                    />
                    <Card.ImgOverlay className="hover-text">
                        <Card.Title className="card-title">TV Show Review App (React, API)</Card.Title>
                        <div className='flex justify-evenly items-center w-full link-btns'>
                            <a href="https://github.com/RedPez/Watchlist-App/tree/main" target="_blank">
                                <button className='btn-item'>Code</button>
                            </a>
                            <a href="https://thewatchlistapp.netlify.app/"target="_blank">
                                <button className='btn-item'>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
        
    </Container>
    </div>
  )
}

export default ProjectGallery