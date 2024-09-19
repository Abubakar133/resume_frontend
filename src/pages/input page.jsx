import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Grid, Box, TextField, Button, Typography } from "@mui/material";

const ResumeBuilder = ({
  formData,
  setFormData,
  experiences,
  setExperiences,
  education,
  setEducation,
  skills,
  setSkills,
}) => {
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (index, e) => {
    const newExperiences = [...experiences];
    newExperiences[index][e.target.name] = e.target.value;
    setExperiences(newExperiences);
  };

  const handleEducationChange = (index, e) => {
    const newEducation = [...education];
    newEducation[index][e.target.name] = e.target.value;
    setEducation(newEducation);
  };

  const handleSkillChange = (index, e) => {
    const newSkills = [...skills];
    newSkills[index][e.target.name] = e.target.value;
    setSkills(newSkills);
  };

  const addExperience = () => {
    setExperiences([...experiences, { year: "", title: "", company: "", description: "" }]);
  };

  const addEducation = () => {
    setEducation([...education, { major: "", university: "" }]);
  };

  const addSkill = () => {
    setSkills([...skills, { title: "", percentage: "" }]);
  };

  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const removeEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  return (
    <Box sx={{ padding: 2,marginTop: '50px' }}>
      <Grid container spacing={2}>
        {/* Personal Information Section */}
        <Grid item xs={12}>
          <Typography variant="h5" color="primary">Personal Information</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              name="fullname"
              value={formData.fullname}
              onChange={handleFormChange}
              placeholder="Full Name"
            />
            <TextField
              fullWidth
              variant="outlined"
              name="birth"
              value={formData.birth}
              onChange={handleFormChange}
              placeholder="Date of Birth"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              variant="outlined"
              name="professionalTitle"
              value={formData.professionalTitle}
              onChange={handleFormChange}
              placeholder="Professional Title"
            />
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Email"
            />
            <TextField
              fullWidth
              variant="outlined"
              name="mobile"
              value={formData.mobile}
              onChange={handleFormChange}
              placeholder="Mobile"
            />
            <TextField
              fullWidth
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              placeholder="Address"
            />
            <TextField
              fullWidth
              variant="outlined"
              name="website"
              value={formData.website}
              onChange={handleFormChange}
              placeholder="Website"
            />
            <TextField
              fullWidth
              variant="outlined"
              name="personalDescription"
              value={formData.personalDescription}
              onChange={handleFormChange}
              placeholder="Personal Description"
              multiline
              rows={4}
            />
          </Box>
        </Grid>

        {/* Experience Section */}
        <Grid item xs={12}>
          <Typography variant="h5" color="primary">Experience</Typography>
          {experiences.map((experience, index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                name="year"
                value={experience.year}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Year"
              />
              <TextField
                fullWidth
                variant="outlined"
                name="title"
                value={experience.title}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Job Title"
              />
              <TextField
                fullWidth
                variant="outlined"
                name="company"
                value={experience.company}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Company"
              />
              <TextField
                fullWidth
                variant="outlined"
                name="description"
                value={experience.description}
                onChange={(e) => handleExperienceChange(index, e)}
                placeholder="Job Description"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                color="error"
                startIcon={<FaTrash />}
                onClick={() => removeExperience(index)}
                sx={{ mt: 1 }}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Button
            variant="contained"
            color="success"
            startIcon={<FaPlus />}
            onClick={addExperience}
          >
            Add Experience
          </Button>
        </Grid>

        {/* Education Section */}
        <Grid item xs={12}>
          <Typography variant="h5" color="primary">Education</Typography>
          {education.map((edu, index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                name="major"
                value={edu.major}
                onChange={(e) => handleEducationChange(index, e)}
                placeholder="Major"
              />
              <TextField
                fullWidth
                variant="outlined"
                name="university"
                value={edu.university}
                onChange={(e) => handleEducationChange(index, e)}
                placeholder="University"
              />
              <Button
                variant="contained"
                color="error"
                startIcon={<FaTrash />}
                onClick={() => removeEducation(index)}
                sx={{ mt: 1 }}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Button
            variant="contained"
            color="success"
            startIcon={<FaPlus />}
            onClick={addEducation}
          >
            Add Education
          </Button>
        </Grid>

        {/* Skills Section */}
        <Grid item xs={12}>
          <Typography variant="h5" color="primary">Skills</Typography>
          {skills.map((skill, index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                name="title"
                value={skill.title}
                onChange={(e) => handleSkillChange(index, e)}
                placeholder="Skill Title"
              />
              <TextField
                fullWidth
                variant="outlined"
                name="percentage"
                value={skill.percentage}
                onChange={(e) => handleSkillChange(index, e)}
                placeholder="Proficiency (%)"
              />
              <Button
                variant="contained"
                color="error"
                startIcon={<FaTrash />}
                onClick={() => removeSkill(index)}
                sx={{ mt: 1 }}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Button
            variant="contained"
            color="success"
            startIcon={<FaPlus />}
            onClick={addSkill}
          >
            Add Skill
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeBuilder;
