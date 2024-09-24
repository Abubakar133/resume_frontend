import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Grid, Box, TextField, Button, Typography, Divider, Paper } from "@mui/material";

const ResumeBuilder = ({
  formData,
  setFormData,
  experiences,
  setExperiences,
  education,
  setEducation,
  skills,
  setSkills,
  setLanguage,
  Languages,
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

  const handleLangChange = (index, e) => {
    const newSkills = [...Languages];
    newSkills[index][e.target.name] = e.target.value;
    setLanguage(newSkills);
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

  const addLang = () => {
    setLanguage([...Languages, { title: "", percentage: "" }]);
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

  const removeLang = (index) => {
    const newlang = Languages.filter((_, i) => i !== index);
    setLanguage(newlang);
  };

  return (
    <Box sx={{ padding: 3, maxWidth: "1200px", margin: "auto", backgroundColor: "#f4f4f4", borderRadius: 2 }}>
      <Grid container spacing={3}>
        {/* Personal Information Section */}
        <Grid item xs={12}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>Personal Information</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                name="fullname"
                value={formData.fullname}
                onChange={handleFormChange}
                placeholder="Full Name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                name="professionalTitle"
                value={formData.professionalTitle}
                onChange={handleFormChange}
                placeholder="Professional Title"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                name="personalDescription"
                value={formData.personalDescription}
                onChange={handleFormChange}
                placeholder="About Me"
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Information Section */}
        <Grid item xs={12}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>Contact Information</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                name="mobile"
                value={formData.mobile}
                onChange={handleFormChange}
                placeholder="Mobile"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                placeholder="Address"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                name="website"
                value={formData.website}
                onChange={handleFormChange}
                placeholder="Website"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>Refrence Information</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                name="refererName"
                value={formData.refererName}
                onChange={handleFormChange}
                placeholder="Refrence Name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                name="refererRole"
                value={formData.refererRole}
                onChange={handleFormChange}
                placeholder="Refrence Roll"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                name="refemail"
                value={formData.refemail}
                onChange={handleFormChange}
                placeholder="Refrence Email"
                type="email"
              />
            </Grid>
            
          </Grid>
        </Grid>

        {/* Experience Section */}
        <Grid item xs={12}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>Work History</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          {experiences.map((experience, index) => (
            <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="year"
                    value={experience.year}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Year"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="title"
                    value={experience.title}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Job Title"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="companyAndLocation"
                    value={experience.companyAndLocation}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Company | Location"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="description"
                    value={experience.description}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Job Description"
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<FaTrash />}
                    onClick={() => removeExperience(index)}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Paper>
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
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>Education</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          {education.map((edu, index) => (
            <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="major"
                    value={edu.major}
                    onChange={(e) => handleEducationChange(index, e)}
                    placeholder="Major"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="university"
                    value={edu.university}
                    onChange={(e) => handleEducationChange(index, e)}
                    placeholder="University"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<FaTrash />}
                    onClick={() => removeEducation(index)}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Paper>
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
  <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 1 }}>
    Skills
  </Typography>
  <Divider sx={{ marginBottom: 1 }} />
  {skills.map((skill, index) => (
    <Paper key={index} elevation={3} sx={{ padding: 1, marginBottom: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            variant="outlined"
            name="title"
            value={skill.title}
            onChange={(e) => handleSkillChange(index, e)}
            placeholder="Skill"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            variant="outlined"
            name="percentage"
            value={skill.percentage}
            onChange={(e) => handleSkillChange(index, e)}
            placeholder="Proficiency (%)"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="error"
            startIcon={<FaTrash />}
            onClick={() => removeSkill(index)}
            size="small"
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Paper>
  ))}
  <Button
    variant="contained"
    color="success"
    startIcon={<FaPlus />}
    onClick={addSkill}
    size="small"
    sx={{ marginTop: 1 }}
  >
    Add Skill
  </Button>
</Grid>



{/* Language Section */}
{/* Language Section */}
<Grid item xs={12}>
  <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 1 }}>
    Languages
  </Typography>
  <Divider sx={{ marginBottom: 1 }} />
  {Languages.map((skill, index) => (
    <Paper key={index} elevation={3} sx={{ padding: 1, marginBottom: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={10}>
          <TextField
            fullWidth
            variant="outlined"
            name="title"
            value={skill.title}
            onChange={(e) => handleLangChange(index, e)}
            placeholder="Language"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="error"
            startIcon={<FaTrash />}
            onClick={() => removeLang(index)}
            size="small"
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Paper>
  ))}
  <Button
    variant="contained"
    color="success"
    startIcon={<FaPlus />}
    onClick={addLang}
    size="small"
    sx={{ marginTop: 1 }}
  >
    Add Language
  </Button>
</Grid>




      </Grid>
    </Box>
  );
};

export default ResumeBuilder;
