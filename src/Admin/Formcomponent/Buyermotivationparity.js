import { Container, Form, Row, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { setBuyermotivation } from "../../Reducer/reducer";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";


export default function Buyermotivation() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");

  const form4 = useSelector((state) => state.initiative.form4value);
  const [issubmit, setSubmit] = useState(false);
  const [validated, setValidated] = useState(false);
  const [score, setScore] = useState(form4.score);

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setBuyermotivation({
        data,
        json,
        evaluation_id,
      })
    );
    setJson(json, evaluation_id);
  };

  const submitData = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isNaN(score) === false && score) {
      var num = [-1, 0, 1, 2, 3, 4, 5, 6, -10, -4];
      if (num.includes(score)) {
      
        let data ={ score }
        setRedux(data, JSON.stringify({ "buyermotivation": data }), evaluation_id);
        navigate("/user/problemscorecard");

      } else {
        setValidated(false);
        $('.noalert').show();
        window.scrollTo(0, 0);
      }
    } else {
      setValidated(true);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.buyermotivation) {
        setScore(data.buyermotivation.score);
      }
      setSubmit(false);
    });
  }, []);

  if (issubmit) {
    loader = <ReactLoading type="bubbles" color="#162c5d" width={100} />;
  }

  return (
    <div>
      <Header2 />
      <div className="page-wraper">
        <div className="Probdesc-page">
        <Initiativeheader eid={evaluation_id}/>
          <Container>
            <Row>
              {/* <div className="col-md-12">
              <div className="next-back-button">{loader}
                      <Button
                        variant="primary button-green"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </Button>
                      <Button
                        variant="primary button-blue"
                        onClick={(e) => submitData(e)}
                      >
                        Next
                      </Button>
                    </div>
              </div> */}
              <div className="dimentional-title">
                <h2>Buyer Motivation Parity Score</h2>{loader}
                <p>
                  Buyer motivation parity informs how likely a target customer
                  is to pay for the services you intend to provide. How
                  important and urgent is it for the customer to solve the
                  problem for which you are providing a solution? And what are
                  your customer's current options to solve the problem? Refer to
                  the chart. Pick a quadrant and then pick a sub-category. Enter
                  the score in the box below.
                </p>
                <h3>Enter the chosen score below</h3>
                <Form noValidate validated={validated}>
                  <Form.Group className="below-form" controlId="formBasictext">
                    <Form.Control
                      type="number"
                      placeholder="Score"
                      required 
                      defaultValue={score}
                      onChange={(e) => setScore(parseInt(e.target.value))}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <span className="text-danger noalert" style={{display:'none'}}>Select number from below chart</span>
                  </Form.Group>
                </Form>
              </div>
              <div className="buyer-motivation ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="line-chart">
                      <img src="../img/line-chart.png" alt="" />
                    </div>
                    <div className="what-video">
                      <h3>Watch the video</h3>
                      <img src="../img/what-video.png" alt="" />
                    </div>
                    <div className="next-back-button">{loader}
                      <Button
                        variant="primary button-green"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </Button>
                      <Button
                        variant="primary button-blue"
                        onClick={(e) => submitData(e)}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
