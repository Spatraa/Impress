import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ company: '', year: '', designation: '' }]);
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  const [skills, setSkills] = useState([]);

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleAddEducation = () => {
    setEducation([...education, { company: '', year: '', designation: '' }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', year: '', designation: '' }]);
  };

  const handleSkillsChange = (selectedSkills) => {
    setSkills(selectedSkills);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
      name,
      email,
      address,
      phone,
      education,
      experience,
      skills,
    });
  };

  return (
    <div className="container">
      <h1>Resume Builder</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <br />

        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <label>
              Company/Institute:
              <input
                type="text"
                value={edu.company}
                onChange={(e) => handleEducationChange(index, 'company', e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Year:
              <input
                type="text"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Designation/Degree:
              <input
                type="text"
                value={edu.designation}
                onChange={(e) => handleEducationChange(index, 'designation', e.target.value)}
                required
              />
            </label>
            <br />
          </div>
        ))}
        <button type="button" onClick={handleAddEducation}>
          Add Education
        </button>
        <br />

        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <label>
              Company:
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Year:
              <input
                type="text"
                value={exp.year}
                onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Designation:
              <input
                type="text"
                value={exp.designation}
                onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                required
              />
            </label>
            <br />
          </div>
        ))}
        <button type="button" onClick={handleAddExperience}>
          Add Experience
        </button>
        <br />

        <label>Skills:</label>
<Typeahead
  id="skills"
  multiple
  options={['PHP', 'JavaScript', 'Python', 'Java', 'HTML', 'CSS', 'Reactjs', 'Nodejs']}
  selected={skills}
  onChange={handleSkillsChange}
/>
<br />
<button type="submit">Submit</button>
  </form>
</div>
  );
}

export default App;
