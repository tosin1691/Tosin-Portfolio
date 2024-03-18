import React from 'react'
import { Card, Container, Col, Row } from "react-bootstrap";
// import Projectsjson from "../projects";
import PasswordGenApp from "../assets/images/Screenshot-Pass-Gen-App.png"
import TeamProfileApp from "../assets/images/Team-Profile-Gen Screenshot.png"
import DrunkChefApp from "../assets/images/The-Drunk-Chef-screenshot.png"
import QuizApp from "../assets/images/Timed-coding-quiz.png"
import WeatherApp from "../assets/images/Weather-Dashboard-App.png"
import WatchlistApp from "../assets/images/watchlist-app.png"

const ProjectGallery = () => {
  return (
    <Container name='projects'>
        <div>
            <span></span>
            <p>Projects.</p>
        </div>
        <Row>
            <Col lg={4}>
                <Card>
                    <Card.Img
                    src={PasswordGenApp}
                    />
                    <Card.ImgOverlay>
                        <Card.Title>Random Password Generator App</Card.Title>
                        <div className='flex justify-evenly items-center w-20'>
                            <a href="https://github.com/tosin1691/Random-Password-Generator" target="_blank">
                                <button>Code</button>
                            </a>
                            <a href="https://tosin1691.github.io/Random-Password-Generator/"target="_blank">
                                <button>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={4}>
                <Card>
                    <Card.Img
                    src={TeamProfileApp}
                    />
                    <Card.ImgOverlay>
                        <Card.Title>Team Profile Generator (JS, Command-Line App)</Card.Title>
                        <div className='flex justify-evenly items-center w-full'>
                            <a href="https://github.com/tosin1691/Team-Profile-Generator" target="_blank">
                                <button>Code</button>
                            </a>
                            <a href="">
                                <button>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={4}>
                <Card>
                    <Card.Img
                    src={DrunkChefApp}
                    />
                    <Card.ImgOverlay>
                        <Card.Title>The Cocktail Recipe App</Card.Title>
                        <div className='flex justify-evenly items-center w-full'>
                            <a href="https://github.com/RedPez/The-Drunk-Chef-App" target="_blank">
                                <button>Code</button>
                            </a>
                            <a href="https://redpez.github.io/The-Drunk-Chef-App/"target="_blank">
                                <button>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col lg={4}>
                <Card>
                    <Card.Img
                    src={QuizApp}
                    />
                    <Card.ImgOverlay>
                        <Card.Title>The Quiz App</Card.Title>
                        <div className='flex justify-evenly items-center w-full'>
                            <a href="https://github.com/tosin1691/Timed-Coding-Quiz" target="_blank">
                                <button>Code</button>
                            </a>
                            <a href="https://tosin1691.github.io/Timed-Coding-Quiz/starter"target="_blank">
                                <button>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={4}>
                <Card>
                    <Card.Img
                    src={WeatherApp}
                    />
                    <Card.ImgOverlay>
                        <Card.Title>The Weather App (API)</Card.Title>
                        <div className='flex justify-evenly items-center w-full'>
                            <a href="https://github.com/tosin1691/Weather-Dashboard-App" target="_blank">
                                <button>Code</button>
                            </a>
                            <a href="https://tosin1691.github.io/Weather-Dashboard-App"target="_blank">
                                <button>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col lg={4}>
                <Card>
                    <Card.Img
                    src={WatchlistApp}
                    />
                    <Card.ImgOverlay>
                        <Card.Title>TV Show Review App (React, API)</Card.Title>
                        <div className='flex justify-evenly items-center w-full'>
                            <a href="https://github.com/RedPez/Watchlist-App/tree/main" target="_blank">
                                <button>Code</button>
                            </a>
                            <a href="https://thewatchlistapp.netlify.app/"target="_blank">
                                <button>Site</button>
                            </a>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
        
    </Container>
  )
}

export default ProjectGallery