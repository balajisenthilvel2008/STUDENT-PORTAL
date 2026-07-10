import React from "react";
import Navigation from "./Navigation";
import boy1 from "../img/boy1.jpg";
import girl from "../img/girl.jpg";
import dob from "../img/dob.jpg";
import cgpa from "../img/cgpa.jpg";
import credits from "../img/credits.jpg";
import attendance from "../img/attendance.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../profile.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Profile = () => {
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
  let doj1 = new Date(user.doj).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    
  });

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
        <Navigation />
        <div className="card-body main-content">
          <div className="container  subject-card mb-5" id="image-card">
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
                  <strong className="f-15">
                    {department}
                  </strong>
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
                  <strong className="mb-2" style={{'fontSize':'30px'}}>Progress Towards Graduation</strong>
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
                      >{dob1}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mt-5">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <div className="card subject-card" id='image-card' style={{ fontSize: "33.5px", fontFamily: "Lucida Bright" }}>
                      <strong className="py-4 text-center">
                        Student Overview
                      </strong>
                      <div className="row align-items-center py-1">
                        <div className="col-md-5 text-center">
                          <i className="bi bi-mortarboard-fill me-3 fs-1"></i>
                        </div>
                        <div className="col-md-7 text-start">
                          Department<br/>
                          <strong>{user.dept}</strong>
                        </div>
                      </div>
                      <hr/>
                      <div className="row align-items-center py-1">
                        <div className="col-md-5 text-center">
                          <i className="bi bi-journals me-3 me-3 fs-1"></i>
                        </div>
                        <div className="col-md-7 text-start">
                          Semester<br/>
                          <strong>3rd Semester</strong>
                        </div>
                      </div>
                      <hr/>
                      <div className="row align-items-center py-1">
                        <div className="col-md-5 text-center">
                          <i className="bi bi-people-fill me-3 fs-1"></i>
                        </div>
                        <div className="col-md-7 text-start">
                          Section<br/>
                          <strong>A</strong>
                        </div>
                      </div>
                      <hr/>
                      <div className="row align-items-center py-1">
                        <div className="col-md-5 text-center">
                          <i className="bi bi-calendar-range-fill me-3 fs-1"></i>
                        </div>
                        <div className="col-md-7 text-start">
                          Year<br/>
                          <strong>2nd Year</strong>
                        </div>
                      </div>
                      <hr/>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div
                      className="card subject-card" id='image-card'
                      style={{ fontSize: "20px", fontFamily: "Lucida Bright" }}
                    >
                      <strong className="py-4 text-center">
                        Personal Information
                      </strong>
                      <div className="row align-items-center py-1 ">
                        <div className="col-md-1 text-center">
                          <i
                            className="bi bi-person-vcard-fill ps-4"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </div>

                        <div className="col-md-5 ps-4">Register Number</div>

                        <div className="col-md-6">{user.regNo}</div>
                      </div>
                      <hr/>
                      <div className="row align-items-center py-1 ">
                        <div className="col-md-1 text-center">
                          <i
                            className="bi bi-person-fill ps-4"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </div>

                        <div className="col-md-5 ps-4">Name</div>

                        <div className="col-md-6">{user.name}</div>
                      </div>
                      <hr/>
                      <div className="row align-items-center py-1 ">
                        <div className="col-md-1 text-center">
                          <i
                            className="bi bi-envelope-fill ps-4"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </div>

                        <div className="col-md-5 ps-4">Email</div>

                        <div className="col-md-6">{user.email}</div>
                      </div>
                      <hr/>
                      <div className="row align-items-center py-1 ">
                        <div className="col-md-1 text-center">
                          <i
                            className="bi bi-telephone-fill ps-4"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </div>

                        <div className="col-md-5 ps-4">Phone Number</div>

                        <div className="col-md-6">{user.phone}</div>
                      </div>
                      <hr/>
                      <div className="row align-items-center py-1 ">
                        <div className="col-md-1 text-center">
                          <i
                            className="bi bi-droplet-fill ps-4"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </div>

                        <div className="col-md-5 ps-4">Blood Group</div>

                        <div className="col-md-6">{user.bGroup}</div>
                      </div>
                      <hr/>
                      <div className="row align-items-center py-1 ">
                        <div className="col-md-1 text-center">
                          <i
                            className="bi bi-gender-ambiguous ps-4"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </div>

                        <div className="col-md-5 ps-4">Gender</div>

                        <div className="col-md-6">{user.gender}</div>
                      </div>
                      <hr/>
                      <div className="row align-items-center py-1 mb-3 ">
                        <div className="col-md-1 text-center">
                          <i
                            className="bi bi-calendar-event-fill ps-4"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </div>

                        <div className="col-md-5 ps-4">Date of Joining</div>

                        <div className="col-md-6">{doj1}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
