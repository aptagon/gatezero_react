import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';





export default function Home() {
  return (
    <div>
      <div className="banner">
        <Container>
          <Row>
            <div className="col-md-8">
              <div className="when-invast">
                <h2>When your<br /> digital investments must <br />produce results</h2>
                <h3>Financial gating & product formulation solution for digital investments</h3>
                <div className="banner-list">
                  <ul className="desi-1">
                    <li><img src="../img/aero.png" alt="" />Pick the right idea</li>
                    <li><img src="../img/aero.png" alt="" />Build the right product</li>
                    <li><img src="../img/aero.png" alt="" />Go laughing to the bank - Pure Joy!!</li>
                  </ul>
                  <ul className="desi-2">
                    <li><img src="../img/aero.png" alt="" />3 decades of digital expereince poured into tangible scorecards for avoiding losses and designing success 2 decades of digital expereince poured into tangible scorecards for avoiding losses and designing success </li>
                  </ul>
                </div>
                <div className="red-more-button">
                  <Button variant="info">Read More</Button>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      {/* banner end */}
      <div className="beforehand-start">
        <Container>
          <div className="row">
            <div className="col-md-6">
              <div className="beforehand-img">
                <img src="img/beforehand.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="beforehand-text">
                <h2>Know the outcome beforehand</h2>
                <h3>Evaluate your most important initiative. <span>Start here </span></h3>
                <p>The Takeoff Point is a financial gating solution for your digital investments. It creates accurate foresight into future of any proposed digital investment and helps you make the right choices. It also helps you in formulating the right products. The Takeoff Point is comprehensive, accurate and one of it kind framework, that is easy to use and provides accurate Go / No-Go decisions for your digital investments rapidly. It puts you several years ahead in your game.</p>
                <div className="red-more-button blue">
                  <Button variant="info">Read More</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opportunity-setion">
            <div className="row">
              <div className="col-md-4">
                <div className="opportunity-point">
                  <img src="img/opportunity.png" alt="" />
                  <h3>The Takeoff Point</h3>
                  <h2>Opportunity Score</h2>
                  <p>Know if the problem you are trying to solve is worth it? Will it generate revenue, when and how much? Do you have the right product rationale? Eliminate seeds of failures, know your risk and fight the right battle</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="opportunity-point">
                  <img src="img/execution.png" alt="" />
                  <h3>The Takeoff Point</h3>
                  <h2>Execution Score</h2>
                  <p>Know if you can execute on the opportunity based on your unique sitation, your resources, teams and expertise. A comprehensive evaluation, pin points areas of improvement for rapid and successful execution</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="opportunity-point">
                  <img src="img/product.png" alt="" />
                  <h3>The Takeoff Point</h3>
                  <h2>Product Formulation</h2>
                  <p>Know what exactly you need to build to please the customers and defeat the competition. Know how to pivot your product to turn around stuck initiatives. Land undefeatable products</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* beforehand-start end */}
      <div className="Get-going">
        <Container>
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Can't wait? Get going right now</h2>
              </div>
              <ul className="going-list">
                <li>
                  <img src="../img/read.gif" alt="" />
                  <h2>If you like to read</h2>
                  <p>Read the book, master the art Start online evaluation</p>
                </li>
                <li>
                  <img src="../img/youtube.gif" alt="" />
                  <h2>You are a video person</h2>
                  <p>Watch videos, master the art Start  online evaluation</p>
                </li>
                <li>
                  <img src="../img/go.gif" alt="" />
                  <h2>You are a hands on learn as you go person</h2>
                  <p>Start online evaluation Master the  art along the way</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* Get-going end */}
      <div className="handled-rich">
        <Container>
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>You want everything handled <br />for you? <span>Reach out</span></h2>
              </div>
              <ul className="rich-out">
                <li>
                  <div className="Consulting-reach">
                    <h2>Consulting</h2>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Easy engagement</p>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Quick turn around</p>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Expertise from the founder</p>
                  </div>
                </li>
                <li>
                  <div className="Consulting-reach">
                    <h2>Research and Marketing</h2>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Build or validate your research</p>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Evaluate and execute your digital marketing</p>
                  </div>
                </li>
                <li>
                  <div className="Consulting-reach">
                    <h2>Corporate Training</h2>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Infuse culture of digital prudence</p>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Customized training program for rapid adoption</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* handled-rich end */}
      <div className="testimonial-banner">
        <div className="title">
          <h2>What customers are saying...</h2>
        </div>
        <Carousel >
          <Carousel.Item>
            <Carousel.Caption>
              <p>Innovation is a tricky space, one has to be optimistic and yet have a healthy detachment from their idea(in author's words " dispassionate attitude"). Gates of go-nogo decisions are many and makes innovative product launches tricky. Without a structured framework unbridled optimism leads to millions of wasted dollars, countless hours of  wasted effort. This book addresses
                the how part very effectively.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <p>Innovation is a tricky space, one has to be optimistic and yet have a healthy detachment from their idea(in author's words " dispassionate attitude"). Gates of go-nogo decisions are many and makes innovative product launches tricky. Without a structured framework unbridled optimism leads to millions of wasted dollars, countless hours of  wasted effort. This book addresses
                the how part very effectively.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <p>Innovation is a tricky space, one has to be optimistic and yet have a healthy detachment from their idea(in author's words " dispassionate attitude"). Gates of go-nogo decisions are many and makes innovative product launches tricky. Without a structured framework unbridled optimism leads to millions of wasted dollars, countless hours of  wasted effort. This book addresses
                the how part very effectively.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* testimonial-banner end */}
      <div className="TakeoffPoint">
        <Container>
          <div className="row">
              <div className="col-md-6">
                <div className="TakeoffPoint-for">
                    <h2>The Takeoff Point Works Across all industries</h2>
                    <h3>It's for</h3>
                    <ul>
                      <li><span>Corporate leaders</span></li>
                      <li><span>Executives</span></li>
                      <li><span>Venture capitalist</span></li>
                      <li><span>Angle investors</span></li>
                      <li><span>Product Manager</span></li>
                      <li><span>Product Owners</span></li>
                      <li><span>Entrepreneurs</span></li>
                    </ul>
                    <div className="red-more-button blue">
                      <button type="button" className="btn btn-info">Read More</button>
                    </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="TakeoffPoint-img">
                    <img src="../img/take.png" alt="" />
                </div>
              </div>
          </div> 
        </Container>
      </div>
      {/* TakeoffPoint end */}
      <div className="handled-rich">
        <Container>
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>High Value Benefits</h2>
              </div>
              <ul className="rich-out">
                <li>
                  <div className="Consulting-reach">
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Avoid loss of capital</p>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Avoid loss of time</p>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Avoid loss of reputation</p>
                  </div>
                </li>
                <li>
                  <div className="Consulting-reach">
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Build right product at right time</p>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Unleash massive growth and revenue</p>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Turn existing products into game changers</p>
                  </div>
                </li>
                <li>
                  <div className="Consulting-reach">
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Build high impact roadmap with accurate priorities</p>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Avoid all bad things that comes with failures</p>
                    <p><span><img src="../img/aero-green.png" alt="" /></span>Reap all benefits that comes with Success</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* handled-rich end */}
      <div className="take-drive">
        <Container>
          <div className="row">
            <div className="col-md-12">
              <ul className="take-test">
                <li>
                  <h2>Take a Test Drive</h2>
                </li>
                <li>
                  <p>Run a known successful or failed digital initiative through the framework and see the results <span>Start here- Free</span></p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
       {/* take-drive end */}
      <div className="takefooter">
        <Container>
          <div className="row">
            <div className="col-md-12">
              <p>For passionate digital leaders, there is no bigger joy than being right about a digital <br/>investment and see it produce results</p>
              <p>When your decisions have large consequences use <br/>The Takeoff Point - <span>Start here</span></p>
            </div>
          </div>
        </Container>
      </div> 
    </div>
  )
}
