import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { RiUploadCloud2Line } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/all";
import { TiTick } from "react-icons/ti";
import { toast } from "material-react-toastify";
import { isAuthenticated } from "../auth/helper/index";
import { getEvent, updateEvent } from "./adminapicalls";

const UpdateEvent = ({ match }) => {
  const eventId = useParams();

  const { admin, token } = isAuthenticated();
  const [values, setValues] = useState({
    name: "",
    info: "",
    startDate: "",
    endDate: "",
    image: "",
    linkedinURL: "",
    instagramURL: "",
    loading: false,
    error: "",
    formData: "",
  });

  const {
    name,
    info,
    startDate,
    endDate,
    image,
    linkedinURL,
    instagramURL,
    formData,
  } = values;

  const preload = eventId => {
    getEvent(eventId).then(data => {
      console.log(data.date);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        console.log(data);
        let START_DATE = moment(data.date.startDate).format("YYYY-MM-DD");
        let END_DATE = moment(data.date.endDate).format("YYYY-MM-DD");
        setValues({
          ...values,
          info: data.info,
          startDate: START_DATE,
          endDate: END_DATE,
          linkedinURL: data.linkedinURL,
          instagramURL: data.instagramURL,
          name: data.name,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    preload(eventId);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    setValues({ ...values, error: "", loading: true });
    updateEvent(match.params.eventId, admin._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        toast.error("error", data.error);
      } else {
        toast.success("success", "Event Updated Successfully!");
        setValues({
          ...values,
          name: "",
          info: "",
          startDate: "",
          endDate: "",
          image: "",
          linkedinURL: "",
          instagramURL: "",
        });
      }
    });
  };

  const handleChange = name => event => {
    const value = name === "image" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const updateEventForm = () => (
    <form className="form-container">
      <div className="mini-container">
        <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
          <h1 className="admin-home-btn">
            <IoArrowBackCircle />
          </h1>
        </Link>
      </div>
      <div className="mini-container">
        <div className="form-group " style={{ marginTop: "15px" }}>
          <input
            type="text"
            onChange={handleChange("name")}
            name="name"
            className="form-control"
            placeholder="Event name"
            value={name}
          />
        </div>
        <div className="form-group ">
          <textarea
            style={{ margin: "0px 0px 15px", width: "248px", height: "248px" }}
            onChange={handleChange("info")}
            type="text"
            className="form-control"
            placeholder="Event info"
            value={info}
          />
        </div>
      </div>
      <div className="centered-container">
        <span
          className="lead"
          style={{
            fontSize: "1.4rem",
            padding: "30px",
            margin: "35px",
            textAlign: "center",
          }}
        >
          Upload photo
          <div className="form-group">
            <label className="upload-file-input">
              <input
                style={{
                  visibility: "hidden",
                  width: "0px",
                }}
                onChange={handleChange("image")}
                type="file"
                name="image"
                accept="image"
              />
              {image ? (
                <>
                  <span style={{ fontSize: "0.75rem" }}>
                    `{image.name} --image uploaded!`
                  </span>
                  <TiTick
                    className="upload-icon"
                    style={{ marginBottom: "-8px", color: "#1ccf1c" }}
                  />
                </>
              ) : (
                <span>
                  <RiUploadCloud2Line className="upload-icon" />
                </span>
              )}
            </label>
          </div>
        </span>
        <div className="mini-container">
          <h4>Start Date</h4>
          <div className="form-group">
            <input
              className="form-control"
              onChange={handleChange("startDate")}
              type="date"
              required={true}
              value={startDate}
            />
          </div>
          <h4>End Date</h4>
          <div className="form-group">
            <input
              className="form-control"
              onChange={handleChange("endDate")}
              type="date"
              required={true}
              value={endDate}
            />
          </div>
        </div>
      </div>
      <div className="mini-container">
        <div className="form-group ">
          <input
            onChange={handleChange("linkedinURL")}
            type="text"
            className="form-control"
            placeholder="Event LinkedIn URL"
            value={linkedinURL}
          />
        </div>
        <div className="form-group ">
          <input
            onChange={handleChange("instagramURL")}
            type="text"
            className="form-control"
            placeholder="Event Instagram URL"
            value={instagramURL}
          />
        </div>
        <button
          type="submit"
          onClick={onSubmit}
          className="btn-outline-success"
        >
          Update Event
        </button>
      </div>
    </form>
  );

  return (
    <>
      <div>
        <div>{updateEventForm()}</div>
      </div>
    </>
  );
};
export default UpdateEvent;
