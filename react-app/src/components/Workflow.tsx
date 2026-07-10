import Navigation from "./Navigation";
import '../Workflow.css'
const Workflow = () => {
  return (
    <div className="mt-5">
      <div className="me-5 ms-5 mb-3">
        {<Navigation />}
        <div className="card main-content" id='image-card'>
          <strong
            className="text-center mt-3 mb-3"
            style={{ fontFamily: "Lucida Bright",fontSize:'40px' }}
          >
            Workflows
          </strong>
          <div className="container">
            <div className="row align-items-center">

              <div className="col-md-6 card image-card subject-card">
                <strong className="text-center mt-3" style={{fontFamily:'Lucida Bright', fontSize:'30px'}}>Leave Request</strong>
                <form>
                  <div
                    className="card-body ms-5 me-5"
                    style={{ fontFamily: "Lucida Bright", fontSize: "20px" }}
                  >
                    <div className="mb-3 row-sm-5">
                      <label htmlFor="name" className="col-sm-2 col-form-label cr">
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Register Number
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="number"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        From Date
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="date"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        To Date
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="date"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Supporting Documents
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          className="form-control"
                          id="inputGroupFile02"
                        />
                        <label
                          className="input-group-text cr"
                          htmlFor="inputGroupFile02"
                        >
                          Upload
                        </label>
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Enter reason
                      </label>
                      <div className="col-sm-50">
                        <textarea
                          rows={5}
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your reason for leave"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary" id='sub' style={{'fontFamily':'Lucida Bright'}}>Apply</button>
                  </div>
                </form>
              </div>

              <div className="col-md-6 card image-card subject-card">
                <strong className="text-center mt-3" style={{fontFamily:'Lucida Bright', fontSize:'30px'}}>OD Request</strong>
                <form>
                  <div
                    className="card-body ms-5 me-5"
                    style={{ fontFamily: "Lucida Bright", fontSize: "20px" }}
                  >
                    <div className="mb-3 row-sm-5">
                      <label htmlFor="name" className="col-sm-2 col-form-label cr">
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Register Number
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="number"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        From Date
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="date"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        To Date
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="date"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Supporting Documents
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          className="form-control"
                          id="inputGroupFile02"
                        />
                        <label
                          className="input-group-text cr"
                          htmlFor="inputGroupFile02"
                        >
                          Upload
                        </label>
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Enter reason
                      </label>
                      <div className="col-sm-50">
                        <textarea
                          rows={5}
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your reason for leave"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary" id='sub' style={{'fontFamily':'Lucida Bright'}}>Apply</button>
                  </div>
                </form>
              </div>

            </div>

            <div className="row align-items-center">

              <div className="col-md-6 card image-card subject-card">
                <strong className="text-center mt-3" style={{fontFamily:'Lucida Bright', fontSize:'30px'}}>Leave Request(RP)</strong>
                <form>
                  <div
                    className="card-body ms-5 me-5"
                    style={{ fontFamily: "Lucida Bright", fontSize: "20px" }}
                  >
                    <div className="mb-3 row-sm-5">
                      <label htmlFor="name" className="col-sm-2 col-form-label cr">
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Register Number
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="number"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        From Date
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="date"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        To Date
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="date"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Supporting Documents
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          className="form-control"
                          id="inputGroupFile02"
                        />
                        <label
                          className="input-group-text cr"
                          htmlFor="inputGroupFile02"
                        >
                          Upload
                        </label>
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Enter reason
                      </label>
                      <div className="col-sm-50">
                        <textarea
                          rows={5}
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your reason for leave"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary" id='sub' style={{'fontFamily':'Lucida Bright'}}>Apply</button>
                  </div>
                </form>
              </div>

              <div className="col-md-6 card image-card subject-card">
                <strong className="text-center mt-3" style={{fontFamily:'Lucida Bright', fontSize:'30px'}}>OD Request (RP)</strong>
                <form>
                  <div
                    className="card-body ms-5 me-5"
                    style={{ fontFamily: "Lucida Bright", fontSize: "20px" }}
                  >
                    <div className="mb-3 row-sm-5">
                      <label htmlFor="name" className="col-sm-2 col-form-label cr">
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Register Number
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="number"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        From Date
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="date"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        To Date
                      </label>
                      <div className="col-sm-50">
                        <input
                          type="date"
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your Register Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Supporting Documents
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="file"
                          className="form-control"
                          id="inputGroupFile02"
                        />
                        <label
                          className="input-group-text cr"
                          htmlFor="inputGroupFile02"
                        >
                          Upload
                        </label>
                      </div>
                    </div>
                    <div className="mb-3 row-sm-5">
                      <label
                        htmlFor="regNo"
                        className="col-sm-10 col-form-label cr"
                      >
                        Enter reason
                      </label>
                      <div className="col-sm-50">
                        <textarea
                          rows={5}
                          name="regNo"
                          className="form-control"
                          placeholder="Enter your reason for leave"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary" id='sub' style={{'fontFamily':'Lucida Bright'}}>Apply</button>
                  </div>
                </form>
              </div>

            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
