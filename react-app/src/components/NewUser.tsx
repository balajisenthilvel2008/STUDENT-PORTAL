import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import newuserbg from '../img/newuserbg.jpg'
import '../App.css';
import '../Newuser.css'
const NewUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    regNo:'',
    name: "",
    dept:'',
    doj:'',
    bGroup:'',
    email: "",
    password: "",
    credits:'',
    cgpa:'',
    dob:'',
    phone: "",
    gender: "",
    one:{
      grades:{
        calculus:'',
        tamil:'',
        python:''
      },
      perc:{
        calculus:'',
        tamil:'',
        python:''
      }
    },
    two:{
      grades:{
        proba:'',
        tamilTech:'',
        C:''
      },
      perc:{
        proba:'',
        tamilTech:'',
        C:''
      }
    }
  });
  const resetVal = ()=>{
    setFormData({
      regNo:'',
    name: "",
    dept:'',
    doj:'',
    bGroup:'',
    email: "",
    credits:'',
    cgpa:'',
    dob:'',
    password: "",
    phone: "",
    gender: "",
    one:{
      grades:{
        calculus:'',
        tamil:'',
        python:''
      },
      perc:{
        calculus:'',
        tamil:'',
        python:''
      }
    },
    two:{
      grades:{
        proba:'',
        tamilTech:'',
        C:''
      },
      perc:{
        proba:'',
        tamilTech:'',
        C:''
      }
    }
    });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleInnerChange=(e)=>{
    const {name,value} = e.target;
    if (name.includes('.')) {
    // Splits "one.grades.calculus" into ["one", "grades", "calculus"]
    const [semester, section, subject] = name.split('.'); 

    setFormData((prevData) => ({
      ...prevData,
      [semester]: {
        ...prevData[semester],                     // Copy 'one' or 'two'
        [section]: {
          ...prevData[semester][section],          // Copy 'grades' or 'perc'
          [subject]: value                        // Assign new value to subject
        }
      }
    }));
  }
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          regNo: formData.regNo,
          name: formData.name,
          dept: formData.dept,
          doj: formData.doj,
          bGroup: formData.bGroup,
          email: formData.email,
          credits:formData.credits,
          cgpa:formData.cgpa,
          dob:formData.dob,
          password: formData.password,
          phone: formData.phone,
          gender: formData.gender,
          one:{
            grades:{
              calculus: formData.one.grades.calculus,
              tamil: formData.one.grades.tamil,
              python: formData.one.grades.python
            },
            perc:{
              calculus: formData.one.perc.calculus,
              tamil: formData.one.perc.tamil,
              python: formData.one.perc.python
            }
          },
          two:{
            grades:{
              proba: formData.two.grades.proba,
              tamilTech: formData.two.grades.tamilTech,
              C: formData.two.grades.C
            },
            perc:{
              proba: formData.two.perc.proba,
              tamilTech: formData.two.perc.tamilTech,
              C: formData.two.perc.C
            }
          }

        }),
      });
      if (response.ok) {
        alert("Data successfully saved");
        navigate('/');
        setFormData({
          regNo:'',
    name: "",
    dept:'',
    doj:'',
    bGroup:'',
    email: "",
    password: "",
    phone: "",
    gender: "",
    dob:'',
    cgpa:'',
    credits:'',
    one:{
      grades:{
        calculus:'',
        tamil:'',
        python:''
      },
      perc:{
        calculus:'',
        tamil:'',
        python:''
      }
    },
    two:{
      grades:{
        proba:'',
        tamilTech:'',
        C:''
      },
      perc:{
        proba:'',
        tamilTech:'',
        C:''
      }
    }
        });
      } else {
        alert("Server Error occurred");
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-1">
      <div className="card mt-5 me-5 ms-5 mb-5 "
      style={{
      backgroundImage: `url(${newuserbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minWidth:'1000px',
      borderRadius:'30px'
    }}>
        <div
          className="card-title d-flex justify-content-center align-items-center mt-5"
          style={{ fontFamily: "Lucida Bright", fontSize: "30px" }}
        >
          Enter your details
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className="card-body ms-5 me-5"
            style={{ fontFamily: "Lucida Bright",fontSize:'20px' }}
          >
            <div className="mb-3 row-sm-5">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row-sm-5">
              <label htmlFor="regNo" className="col-sm-10 col-form-label">
                Register Number
              </label>
              <div className="col-sm-50">
                <input
                  type="number"
                  name="regNo"
                  className="form-control"
                  placeholder="Enter your Register Number"
                  value={formData.regNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row-sm-10">
              <label htmlFor="course" className="col-sm-50 col-form-label">
                Select Your department
              </label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  name="dept"
                  aria-label="Default select example"
                  value={formData.dept}
                  onChange={handleChange}
                >
                  <option selected>Select Course</option>
                  <option value="IT">IT</option>
                  <option value="AIDS">AIDS</option>
                  <option value="AIML">AIML</option>
                  <option value="CSE">CSE</option>
                  <option value="CSE(Cyb)">CSE(Cyb)</option>
                  <option value="Mech">Mech</option>
                  <option value="Civil">Civil</option>
                </select>
              </div>
            </div>
            <div className="mb-3 row-sm-5">
              <label htmlFor="doj" className="col-sm-10 col-form-label">
                Enter the Date of Joining
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  name="doj"
                  className="form-control"
                  placeholder="Select the Date of Joining"
                  value={formData.doj}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row-sm-5">
              <label htmlFor="doj" className="col-sm-10 col-form-label">
                Enter your Blood Group
              </label>
              <div className="col-sm-10">
                <input
                  type="name"
                  name="bGroup"
                  className="form-control"
                  placeholder="Blood Group"
                  value={formData.bGroup}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row-sm-5">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row-sm-5">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row-sm-5">
              <label
                htmlFor="cgpa"
                className="col-sm-10 col-form-label"
              >
                Enter Your Current CGPA:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  placeholder="CGPA"
                  required
                />
              </div>
            </div>
            
             <div className="mb-3 row-sm-5">
              <label
                htmlFor="creditsEnrolled"
                className="col-sm-10 col-form-label"
              >
                Enter your Date of birth
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  placeholder="date of birth"
                  required
                />
              </div>
            </div>

             <div className="mb-3 row-sm-5">
              <label
                htmlFor="creditsEnrolled"
                className="col-sm-10 col-form-label"
              >
                Total Credits Enrolled So far
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  min='29'
                  max='100'
                  name="credits"
                  value={formData.credits}
                  onChange={handleChange}
                  placeholder="Credits Enrolled"
                  required
                />
              </div>
            </div>

            <div className="mb-3 row-lg-5">
              <label htmlFor="phone" className="col-sm-10 col-form-label">
                Phone Number
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="phone"
                  pattern="[6-9]{1}[0-9]{9}"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  minLength={10}
                  maxLength={10}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row-sm-10">
              <label htmlFor="gender" className="col-sm-2 col-form-label">
                Gender
              </label>
              <div className="col-sm-10 gap-3">
                  <p><input type="radio" value="male" name='gender' checked={formData.gender==='male'} onClick={handleChange} />Male</p>
                  <p><input type='radio' value='female' name='gender' checked={formData.gender==='female'} onClick={handleChange}/>Female</p>
              </div>
            </div>
            <div className="mb-3 row-lg-5">
              <p className="col-sm-50 col-form-label mb-3">
                Select your grades and enter your attendance percentage in the
                first semester:
              </p>
              <div className="list-group">
                <li className="list-group-item mb-3 form-control">
                  Calculus and Matrix Algebra
                  <div className="mt-3 mb-3">
                    <input
                      type="number"
                      className="form-control mb-3"
                      name='one.grades.calculus'
                      min="5"
                      max="10"
                      placeholder="Enter your grade point"
                      onChange={handleInnerChange}
                      value={formData.one.grades.calculus}
                    />
                    <input
                      type="number"
                      name='one.perc.calculus'
                      className="form-control mb-3"
                      min="70"
                      max="100"
                      onChange={handleInnerChange}
                      placeholder="Enter your attendance percentage"
                      value={formData.one.perc.calculus}
                    />
                  </div>
                </li>
              </div>
              <div className="list-group">
                <li className="list-group-item mb-3 form-control">
                  Heritage of Tamil
                  <div className="mt-3 mb-3">
                    <input
                      type="number"
                      className="form-control mb-3"
                      min="5"
                      max="10"
                      placeholder="Enter your grade point"
                      name='one.grades.tamil'
                      onChange={handleInnerChange}
                      value={formData.one.grades.tamil}
                    />
                    <input
                      type="number"
                      className="form-control mb-3"
                      min="70"
                      max="100"
                      placeholder="Enter your attendance percentage"
                      name='one.perc.tamil'
                      onChange={handleInnerChange}
                      value={formData.one.perc.tamil}
                    />
                  </div>
                </li>
              </div>
              <div className="list-group">
                <li className="list-group-item mb-3 form-control">
                  Python programming
                  <div className="mt-3 mb-3">
                    <input
                      type="number"
                      className="form-control mb-3"
                      min="5"
                      max="10"
                      placeholder="Enter your grade point"
                      name='one.grades.python'
                      onChange={handleInnerChange}
                      value={formData.one.grades.python}
                    />
                    <input
                      type="number"
                      className="form-control mb-3"
                      min="70"
                      max="100"
                      placeholder="Enter your attendance percentage"
                      name='one.perc.python'
                      onChange={handleInnerChange}
                      value={formData.one.perc.python}
                    />
                  </div>
                </li>
              </div>
            </div>
            <div className="mb-3 row-lg-5 hover-cyan">
              <p className="col-sm-50 col-form-label mb-3">
                Select your grades and enter your attendance percentage in the
                Second semester:
              </p>
              <div className="list-group">
                <li className="list-group-item mb-3 form-control">
                  Probability and Queuing Model
                  <div className="mt-3 mb-3">
                    <input
                      type="number"
                      className="form-control mb-3"
                      min="5"
                      max="10"
                      placeholder="Enter your grade point"
                      name='two.grades.proba'
                      onChange={handleInnerChange}
                      value={formData.two.grades.proba}
                    />
                    <input
                      type="number"
                      className="form-control mb-3"
                      min="70"
                      max="100"
                      placeholder="Enter your attendance percentage"
                      name='two.perc.proba'
                      onChange={handleInnerChange}
                      value={formData.two.perc.proba}
                    />
                  </div>
                </li>
              </div>
              <div className="list-group">
                <li className="list-group-item mb-3 form-control">
                  Tamil and Technology
                  <div className="mt-3 mb-3">
                    <input
                      type="number"
                      className="form-control mb-3"
                      min="5"
                      max="10"
                      placeholder="Enter your grade point"
                      name='two.grades.tamilTech'
                      onChange={handleInnerChange}
                      value={formData.two.grades.tamilTech}
                    />
                    <input
                      type="number"
                      className="form-control mb-3"
                      min="70"
                      max="100"
                      placeholder="Enter your attendance percentage"
                      name='two.perc.tamilTech'
                      onChange={handleInnerChange}
                      value={formData.two.perc.tamilTech}
                    />
                  </div>
                </li>
              </div>
              <div className="list-group">
                <li className="list-group-item mb-3 form-control">
                  Introduction to C programming
                  <div className="mt-3 mb-3">
                    <input
                      type="number"
                      className="form-control mb-3"
                      min="5"
                      max="10"
                      placeholder="Enter your grade point"
                      name='two.grades.C'
                      onChange={handleInnerChange}
                      value={formData.two.grades.C}
                    />
                    <input
                      type="number"
                      className="form-control mb-3"
                      min="70"
                      max="100"
                      placeholder="Enter your attendance percentage"
                      name='two.perc.C'
                      onChange={handleInnerChange}
                      value={formData.two.perc.C}
                    />
                  </div>
                </li>
              </div>
            </div>
            <div className="mt-4  d-flex justify-content-center align-items-center">
              <button type="submit" id='sub' className="btn btn-primary">
                Create User
              </button>
              &emsp;&emsp;
              <button type="reset" id='clear'onClick={resetVal} className="btn btn-danger">
                Clear values
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
