import Navigation from "./Navigation";
import boy1 from "../img/boy1.jpg";
import girl from "../img/girl.jpg";
import dob from "../img/dob.jpg";
import cgpa from "../img/cgpa.jpg";
import credits from "../img/credits.jpg";
import attendance from "../img/attendance.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../profile.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import heritageOfTamil from "../img/heritageOfTamil.jpg";
import { Accordion } from "react-bootstrap";
import '../Academics.css'
import calculus from '../img/calculus.jpg'
import python from '../img/python.jpg'
import cProgramming from '../img/cProgramming.jpg'
import tamiltech from '../img/tamiltech.jpg'
import probability from '../img/probability.jpg'
import { FaTimesCircle } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Academics = () => {
  const { user } = useContext(UserContext);
    let department;
    let attendance1=0;
    attendance1+=user.one.perc.calculus+user.one.perc.tamil+user.one.perc.python;
    attendance1+=user.two.perc.proba+user.two.perc.tamilTech+user.two.perc.C;
    let attendperc=0;
    attendperc=attendance1/6;
    attendperc=Math.floor(attendperc);
    let dob1 = new Date(user.dob).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  
  });
  function grading(a:Number){
    if(a===10)
      return 'O';
    else if (a===9)
      return 'A+';
    else if(a===8)
      return 'A';
    else if(a==7)
      return 'B+';
    else if(a==6)
      return 'B';
    else if(a==5)
      return 'RA';
  }
  function marks(a:Number){
    if(a===10)
      return 95;
    else if (a===9)
      return 84;
    else if(a===8)
      return 76;
    else if(a==7)
      return 68;
    else if(a==6)
      return 55;
    else if(a==5)
      return 'Not Applicable';
  }
    switch(user.dept){
      case "IT":
        department="Information Technology";
        break;
      case "CSE":
        department="Computer Science and Engineering";
        break;
      case "CSE(Cyb)":
        department="Cyber Security";
        break;
      case "AIDS":
        department="Artificial Intelligence and Data Science";
        break;
      case "AIML":
        department="Artificial Intelligence and Machine Learning";
        break;
      case "Mech":
        department="Mechanical Engineering";
        break;
      case "Civil":
        department="Civil Engineering";
        break;
    }
    let profileimg='';
  if(user.gender==='male')
    profileimg=boy1;
  else
    profileimg=girl;
  return (
    <div className="mt-5">
      <div className="ms-5 me-5 mb-3">
        {<Navigation />}
        <div className="card-body main-content">
          <div className="container card mb-5 subject-card" id="image-card">
            <div className="card-body image-card">
              <div className="row align-items-center">
                <div id="image" className="col-md-3">
                  <img
                    className="img-fluid"
                    src={profileimg}
                    style={{ clipPath: "circle(40%)" }}
                  />
                </div>
                <div
                  className="col-md-4 ms-3"
                  style={{ fontFamily: "Lucida Bright" }}
                >
                  <strong style={{ fontSize: "30px" }}>{user.name}</strong>
                  <br />
                  <strong className="f-15">{department}</strong>
                  <br />
                  <span className="badge rounded-pill text-bg-success mb-4">
                    Active student
                  </span>
                  <br />
                  <strong className="f-15">
                    Register Number: {user.regNo}
                  </strong>
                  <br />
                  <strong className="f-15">
                    Email: {user.email}
                  </strong>
                </div>
                <div
                  className="col-md-4 mb-3"
                  style={{ fontFamily: "Lucida Bright" }}
                >
                  <strong className="mb-2" style={{ fontSize: "30px" }}>
                    Progress Towards Graduation
                  </strong>
                  <div className="progress mt-3">
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "30%" }}
                    >
                      30%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="container">
                  <div
                    className="card p-2 ms-n5 subject-card"
                    id="image-card"
                    style={{ height: "207px" }}
                  >
                    <div className="row align-items-center d-flex justify-content-center text-center">
                      <img
                        src={cgpa}
                        alt="cgpa"
                        style={{
                          width: "100px",
                          clipPath: "circle(40%)",
                        }}
                        className="mb-3"
                      />
                      <strong
                        style={{
                          fontFamily: "Lucida Bright",
                          fontSize: "25px",
                        }}
                      >
                        CGPA
                      </strong>
                      <br />
                      <strong
                        style={{
                          fontFamily: "Lucida Bright",
                          fontSize: "25px",
                        }}
                      >
                        {user.cgpa}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="container">
                  <div
                    className="card p-2 ms-n5 subject-card"
                    id="image-card"
                    style={{ height: "207px" }}
                  >
                    <div className="row align-items-center d-flex justify-content-center text-center">
                      <img
                        src={attendance}
                        alt="cgpa"
                        style={{
                          width: "100px",
                          clipPath: "circle(40%)",
                        }}
                        className="mb-3"
                      />
                      <strong
                        style={{
                          fontFamily: "Lucida Bright",
                          fontSize: "25px",
                        }}
                      >
                        ATTENDANCE
                      </strong>
                      <br />
                      <strong
                        style={{
                          fontFamily: "Lucida Bright",
                          fontSize: "25px",
                        }}
                      >
                        {attendperc}%
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="container">
                  <div className="card p-2 ms-n5 subject-card" id="image-card">
                    <div className="row align-items-center d-flex justify-content-center text-center">
                      <img
                        src={credits}
                        alt="cgpa"
                        style={{
                          width: "100px",
                          clipPath: "circle(40%)",
                        }}
                      />
                      <strong
                        style={{
                          fontFamily: "Lucida Bright",
                          fontSize: "25px",
                        }}
                      >
                        CREDITS ENROLLED
                      </strong>
                      <br />
                      <strong
                        style={{
                          fontFamily: "Lucida Bright",
                          fontSize: "25px",
                        }}
                      >
                        {user.credits}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="container">
                  <div
                    className="card p-2 ms-n5 subject-card"
                    id="image-card"
                    style={{ height: "207px" }}
                  >
                    <div className="row align-items-center d-flex justify-content-center text-center">
                      <img
                        src={dob}
                        alt="cgpa"
                        style={{
                          width: "100px",
                          clipPath: "circle(40%)",
                        }}
                        className="mb-3"
                      />
                      <strong
                        style={{
                          fontFamily: "Lucida Bright",
                          fontSize: "25px",
                        }}
                      >
                        DATE OF BIRTH
                      </strong>
                      <br />
                      <strong
                        style={{
                          fontFamily: "Lucida Bright",
                          fontSize: "25px",
                        }}
                      >
                        {dob1}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-5">
            <div className="card py-3 px-3 image-card" id='accord-body'>
                <strong style={{'fontFamily':'Lucida Bright','fontSize':'30px'}} className="text-center mb-3">Semester Results</strong>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="custom-accordion">SEMESTER 1</Accordion.Header>
                <Accordion.Body id='accord-body'>
                  <div className="container mt-3">
                    <div className="row align-items-center">
                      <div className="col-md-4 card text-center image-card subject-card">
                        <div className="d-flex justify-content-center">
                          <img
                          className="logo"
                            src={heritageOfTamil}
                            style={{
                              objectFit: "cover",
                              width: "100px",
                              clipPath: "circle(40%)",
                            }}
                          />
                        </div>
                        <strong>Heritage of Tamil</strong>
                        <hr />
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Marks: </strong>
                              <strong>{(user.one.grades.tamil===5)?"Not Applicable":marks(user.one.grades.tamil)+'/100'}</strong>
                            </div>
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Grade: </strong>
                              <strong>{grading(user.one.grades.tamil)}</strong>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div>
                          <strong>Attendance</strong><br/>
                          <div className="progress" style={{height:'30px'}}>
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-label="Example with label"
                              style={{width: `${user.one.perc.tamil}%`}}
                            >
                              {user.one.perc.tamil}%
                            </div>
                          </div>
                        </div>
                        <hr/>
                        <div className="container mb-3">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-start">
                                    <strong>Credits: 1</strong>
                                </div>
                                <div className="col-md-8 text-end">
                                    <strong>Status:{(user.one.grades.tamil===5)?<span className="text text-danger"><FaTimesCircle color="red" size={20} />Not Completed</span>:
                                    <span className="text text-success"><i className="bi bi-check-circle-fill text-success"></i>Completed</span>}</strong>
                                </div>
                            </div>
                        </div>
                      </div>

                      <div className="col-md-4 card text-center image-card subject-card">
                        <div className="d-flex justify-content-center">
                          <img
                          className="logo"
                            src={calculus}
                            style={{
                              objectFit: "cover",
                              width: "100px",
                              clipPath: "circle(40%)",
                            }}
                          />
                        </div>
                        <strong>Calculus and Matrix Algebra</strong>
                        <hr />
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Marks: </strong>
                              <strong>{(user.one.grades.calculus===5)?"Not Applicable":marks(user.one.grades.calculus)+'/100'}</strong>
                            </div>
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Grade: </strong>
                              <strong>{grading(user.one.grades.calculus)}</strong>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div>
                          <strong>Attendance</strong><br/>
                          <div className="progress" style={{height:'30px'}}>
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-label="Example with label"
                              style={{width:  `${user.one.perc.calculus}%` }}
                            >
                              {user.one.perc.calculus}%
                            </div>
                          </div>
                        </div>
                        <hr/>
                        <div className="container mb-3">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-start">
                                    <strong>Credits: 4</strong>
                                </div>
                                <div className="col-md-8 text-end">
                                    <strong>Status:{(user.one.grades.calculus===5)?<span className="text text-danger"><FaTimesCircle color="red" size={20} />Not Completed</span>:
                                    <span className="text text-success"><i className="bi bi-check-circle-fill text-success"></i>Completed</span>} </strong>
                                </div>
                            </div>
                        </div>
                      </div>

                      <div className="col-md-4 card text-center image-card subject-card">
                        <div className="d-flex justify-content-center">
                          <img
                          className="logo"
                            src={python}
                            style={{
                              objectFit: "cover",
                              width: "100px",
                              clipPath: "circle(40%)",
                            }}
                          />
                        </div>
                        <strong>Python Programming</strong>
                        <hr />
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Marks: </strong>
                              <strong>{(user.one.grades.python===5)?"Not Applicable":marks(user.one.grades.python)+'/100'}</strong>
                            </div>
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Grade:</strong>
                              <strong>{grading(user.one.grades.python)}</strong>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div>
                          <strong>Attendance</strong><br/>
                          <div className="progress" style={{height:'30px'}}>
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-label="Example with label"
                              style={{width: `${user.one.perc.python}%`}}
                            >
                              {user.one.perc.python}%
                            </div>
                          </div>
                        </div>
                        <hr/>
                        <div className="container mb-3">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-start">
                                    <strong>Credits: 3</strong>
                                </div>
                                <div className="col-md-8 text-end">
                                    <strong>Status:{(user.one.grades.python===5)?<span className="text text-danger"><FaTimesCircle color="red" size={20} />Not Completed</span>:
                                    <span className="text text-success"><i className="bi bi-check-circle-fill text-success"></i>Completed</span>}</strong>
                                </div>
                            </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="custom-accordion">SEMESTER 2</Accordion.Header>
                <Accordion.Body id='accord-body'>
                  <div className="container mt-3">
                    <div className="row align-items-center">
                      <div className="col-md-4 card text-center image-card subject-card">
                        <div className="d-flex justify-content-center">
                          <img
                          className="logo"
                            src={tamiltech}
                            style={{
                              objectFit: "cover",
                              width: "100px",
                              clipPath: "circle(40%)",
                            }}
                          />
                        </div>
                        <strong>Tamil and Technology</strong>
                        <hr />
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Marks: </strong>
                              <strong>{(user.two.grades.tamilTech===5)?"Not Applicable":marks(user.two.grades.tamilTech)+'/100'}</strong>
                            </div>
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Grade: </strong>
                              <strong>{grading(user.two.grades.tamilTech)}</strong>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div>
                          <strong>Attendance</strong><br/>
                          <div className="progress" style={{height:'30px'}}>
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-label="Example with label"
                              style={{width:`${user.two.perc.tamilTech}%` }}
                            >
                              {user.two.perc.tamilTech}%
                            </div>
                          </div>
                        </div>
                        <hr/>
                        <div className="container mb-3">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-start">
                                    <strong>Credits: 1</strong>
                                </div>
                                <div className="col-md-8 text-end">
                                    <strong>Status: {(user.two.grades.tamilTech===5)?<span className="text text-danger"><FaTimesCircle color="red" size={20} />Not Completed</span>:
                                    <span className="text text-success"><i className="bi bi-check-circle-fill text-success"></i>Completed</span>}</strong>
                                </div>
                            </div>
                        </div>
                      </div>

                      <div className="col-md-4 card text-center image-card subject-card">
                        <div className="d-flex justify-content-center">
                          <img
                          className="logo"
                            src={probability}
                            style={{
                              objectFit: "cover",
                              width: "100px",
                              clipPath: "circle(40%)",
                            }}
                          />
                        </div>
                        <strong>Probability and Queueing Models</strong>
                        <hr />
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Marks: </strong>
                              <strong>{(user.two.grades.proba===5)?"Not Applicable":marks(user.two.grades.proba)+'/100'}</strong>
                            </div>
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Grade: </strong>
                              <strong>{grading(user.two.grades.proba)}</strong>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div>
                          <strong>Attendance</strong><br/>
                          <div className="progress" style={{height:'30px'}}>
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-label="Example with label"
                              style={{width: `${user.two.perc.proba}%`}}
                            >
                              {user.two.perc.proba}%
                            </div>
                          </div>
                        </div>
                        <hr/>
                        <div className="container mb-3">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-start">
                                    <strong>Credits: 4</strong>
                                </div>
                                <div className="col-md-8 text-end">
                                    <strong>Status: {(user.two.grades.proba===5)?<span className="text text-danger"><FaTimesCircle color="red" size={20} />Not Completed</span>:
                                    <span className="text text-success"><i className="bi bi-check-circle-fill text-success"></i>Completed</span>}</strong>
                                </div>
                            </div>
                        </div>
                      </div>

                      <div className="col-md-4 card text-center image-card subject-card">
                        <div className="d-flex justify-content-center">
                          <img
                          className="logo"
                            src={cProgramming}
                            style={{
                              objectFit: "cover",
                              width: "100px",
                              clipPath: "circle(40%)",
                            }}
                          />
                        </div>
                        <strong>C Programming</strong>
                        <hr />
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Marks: </strong>
                              <strong>{(user.two.grades.C===5)?"Not Applicable":marks(user.two.grades.C)+'/100'}</strong>
                            </div>
                            <div className="col-md-6 border-dark card grade-card">
                              <strong>Grade: </strong>
                              <strong>{grading(user.two.grades.C)}</strong>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div>
                          <strong>Attendance</strong><br/>
                          <div className="progress" style={{height:'30px'}}>
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-label="Example with label"
                              style={{width: `${user.two.perc.C}%` }}
                            >
                              {user.two.perc.C}%
                            </div>
                          </div>
                        </div>
                        <hr/>
                        <div className="container mb-3">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-start">
                                    <strong>Credits: 3</strong>
                                </div>
                                <div className="col-md-8 text-end">
                                    <strong>Status: {(user.two.grades.C===5)?<span className="text text-danger"><FaTimesCircle color="red" size={20} />Not Completed</span>:
                                    <span className="text text-success"><i className="bi bi-check-circle-fill text-success"></i>Completed</span>}</strong>
                                </div>
                            </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
