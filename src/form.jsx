import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    languages: [],
    city: "",
    gender: "",
    comment: ""
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData({ ...formData, languages: [...formData.languages, value] });
      } else {
        setFormData({ ...formData, languages: formData.languages.filter(lang => lang !== value) });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: "",
      age: "",
      dob: "",
      languages: [],
      city: "",
      gender: "",
      comment: ""
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-field">
          <label className="form-label">Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-field">
          <label className="form-label">DOB:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-field">
          <label className="form-label">Languages:</label>
          <div className="form-checkbox-group">
            <input type="checkbox" name="languages" value="English" onChange={handleChange} checked={formData.languages.includes("English")} className="form-checkbox" />
            <label>English</label>
            <input type="checkbox" name="languages" value="Spanish" onChange={handleChange} checked={formData.languages.includes("Spanish")} className="form-checkbox" />
            <label>Spanish</label>
            <input type="checkbox" name="languages" value="French" onChange={handleChange} checked={formData.languages.includes("French")} className="form-checkbox" />
            <label>French</label>
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">City:</label>
          <select name="city" value={formData.city} onChange={handleChange} className="form-select" required>
            <option value="">Select City</option>
            <option value="New York">India</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-label">Gender:</label>
          <div className="form-radio-group">
            <input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === "Male"} className="form-radio" />
            <label>Male</label>
            <input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === "Female"} className="form-radio" />
            <label>Female</label>
            <input type="radio" name="gender" value="Other" onChange={handleChange} checked={formData.gender === "Other"} className="form-radio" />
            <label>Other</label>
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">Comment:</label>
          <textarea name="comment" value={formData.comment} onChange={handleChange} className="form-textarea"></textarea>
        </div>
        <button type="submit" className="form-submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div className="table-container">
          <h2>Submitted Data</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>DOB</th>
                <th>Languages</th>
                <th>City</th>
                <th>Gender</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.dob}</td>
                  <td>{data.languages.join(", ")}</td>
                  <td>{data.city}</td>
                  <td>{data.gender}</td>
                  <td>{data.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Form;