import { Container, Form, Row, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { setDimentional } from "../../Reducer/reducer";
import { setJson, getJson } from "../../service/auth";

export default function Probdesc() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");
  
  const [problem, setProblem] = useState("");
  const [situationExperience, setSituationExperience] = useState("");
  const [situationFacing, setSituationFacing] = useState("");
  const [activitydone, setActivityDone] = useState("");
  const [primaryroot, setPrimaryRootCause] = useState("");
  const [idealoutcome, setIdealOutCome] = useState("");
  const [proposedsolution, setProposedSolution] = useState("");
  const [solutionidealoutcome, setSolutionIdealOutcome] = useState("");

  const [issubmit, setSubmit] = useState(false);

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setDimentional({
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
  
    let data = {
      problem,
      situationExperience,
      situationFacing,
      activitydone,
      primaryroot,
      idealoutcome,
      proposedsolution,
      solutionidealoutcome,
    };

    setRedux(data, JSON.stringify({ dimentionalProblem: data }), evaluation_id);
    navigate("/user/customeractor");
  };
  

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.dimentionalProblem) {
        setProblem(data.dimentionalProblem.problem);
        setSituationExperience(data.dimentionalProblem.situationExperience);
        setSituationFacing(data.dimentionalProblem.situationFacing);
        setActivityDone(data.dimentionalProblem.activitydone);
        setPrimaryRootCause(data.dimentionalProblem.primaryroot);
        setIdealOutCome(data.dimentionalProblem.idealoutcome);
        setProposedSolution(data.dimentionalProblem.proposedsolution);
        setSolutionIdealOutcome(data.dimentionalProblem.solutionidealoutcome);
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
                <div className="next-back-button probl">   
                {loader}     
                  <Button
                    variant="primary button-blue"
                    onClick={(e) => submitData(e)}
                  >
                    Next
                  </Button>
                </div>
              </div> */}
              <div className="dimentional-title">
                <h2>8-Dimentional Problem Definition</h2>{loader}
                <p>
                  Use this canvas to improve your understanding of the problem
                  your initiative is attempting to solve. Also, use this canvas
                  to create consensus amongst the team member on the rationale
                  of the product.
                </p>
                <h5>
                  All data is encrypted in the database and in transit. No one
                  else can access your data. Your privacy is guaranteed.
                </h5>
              </div>
              <div className="dimentional-list">
                <div className="row">
                  <div className="col-md-4">
                    <label>Problem</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={problem}
                          onChange={(e) => setProblem(e.target.value)}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <label>Situation(s) in which the problem is experienced</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={situationExperience}
                          onChange={(e) =>
                            setSituationExperience(e.target.value)
                          }
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-4">
                  <label>Who in the situation is facing the problem?</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={situationFacing}
                          onChange={(e) => setSituationFacing(e.target.value)}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>Which activity is being done which includes the problem?</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={activitydone}
                          onChange={(e) => setActivityDone(e.target.value)}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>What are the primary root causes of the problem?</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={primaryroot}
                          onChange={(e) => setPrimaryRootCause(e.target.value)}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>What is the ideal outcome?</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={idealoutcome}
                          onChange={(e) => setIdealOutCome(e.target.value)}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>What is the proposed solution?</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={proposedsolution}
                          onChange={(e) => setProposedSolution(e.target.value)}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>How does the proposed solution cause ideal outcome?</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={solutionidealoutcome}
                          onChange={(e) =>
                            setSolutionIdealOutcome(e.target.value)
                          }
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="next-back-button">   
                    {loader}     
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
