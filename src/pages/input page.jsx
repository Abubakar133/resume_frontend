import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Grid, Box, TextField, Button, Typography, Divider, Paper , Checkbox, FormControlLabel, } from "@mui/material";
import { useState } from "react";
const ResumeBuilder = ({
  formData,
  setFormData,
  experiences,
  setExperiences,
  education,
  setEducation,
  skills,
  setSkills,
  setLanguage, //update concontently in other form  
  //Languages,
}) => {
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const [Languages, setlangin] = useState([
    { title: 'Íslenska', checked: false },
    { title: 'Enska', checked: false },
    { title: 'Pólska', checked: false },   
    { title: 'Spænska', checked: false },   
    { title: 'Pólska', checked: false },   

    
  ]);

  const [newLanguage, setNewLanguage] = useState('');
  const [isAddingLanguage, setIsAddingLanguage] = useState(false);

  const handleAddLanguage = () => {
    if (newLanguage.trim()) {
      setlangin((prevLanguages) => [
        ...prevLanguages,
        { title: newLanguage, checked: false }
      ]);
      setNewLanguage('');  // Clear the input after adding
      setIsAddingLanguage(false);
    }
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

  
  const handleLangChange = (index) => (event) => {
    const updatedLanguages = [...Languages];
    updatedLanguages[index].checked = event.target.checked;
  
    setlangin(updatedLanguages);  // Update local language state
  
    // Get the current language that was checked/unchecked
    const currentLanguage = updatedLanguages[index].title;
    const isChecked = updatedLanguages[index].checked;
  
   
  
    // Update the `setLanguage` state based on check/uncheck action
    if (isChecked) {
      // Add the language to the `setLanguage` state if it's checked
      setLanguage((prevLanguages) => [...prevLanguages, { title: currentLanguage, percentage: "" }]);
    } else {
      // Remove the language from the `setLanguage` state if it's unchecked
      setLanguage((prevLanguages) => 
        prevLanguages.filter(lang => lang.title !== currentLanguage)
      );
    }
  

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
    setIsAddingLanguage((prev) => !prev); // Toggle the visibility of the input field
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

  const handleLanguageChange = (language) => {
    setFormData({
      ...formData,
      languages: {
        ...formData.languages,
        [language]: !formData.languages[language],
      },
    });
  };


  return (
    <Box
    sx={{
      padding: 4,
      maxWidth: "1300px",
      margin: "auto", // Center the outer box
      backgroundColor: "#80F9FC",
      borderRadius: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center the content in the outer box
      // Full viewport height for vertical centering
    }}
  >
    {/* Header Box - Positioned above the white portion */}
    <Box
    sx={{
      backgroundColor: "#468cb8", // Background color for the header
      padding: 3, // Padding inside the header box
      borderRadius: "16px 16px 0 0", // Rounded corners
      display: "flex", // Flexbox for centering
      justifyContent: "center", // Center the content horizontally
      alignItems: "center", // Center the content vertically
      width: "100%", 
      height: "100px", // Fixed height for the header
      maxWidth: "1000px",
      textAlign: "center", // Space between header and white box
    }}
  >
    {/* Centered Title Box */}
    <Box
      sx={{
        maxWidth: "1000px", // Max width for the title
        width: "100%", // Allow full width
        textAlign: "center", // Center the text
      }}
    >
      <Typography
        variant="h6"
        color="white"
        sx={{
          fontWeight: 600,
          textAlign: "center", // Center the text itself
        }}
      >
        Resume form - Upplýsingar fyrir ferilskrá
      </Typography>
    </Box>
  </Box>



    {/* Main Content Box */}
    <Box  
      sx={{
        backgroundColor: "white",  
        maxWidth: "1000px",
        p: 3, // Increased padding for the main content box
        margin: "auto", // Center the main content box
        borderRadius: "0 0 16px 16px", // Rounded corners for the inner box
      }}
    >

      <Grid container spacing={3}>

       {/* Personal Information Section */}
<Grid item xs={12}>
 
  <Divider sx={{ marginBottom: 2 }} />
  <Grid container spacing={3}>
    {/* Full Name */}
    <Grid item xs={12} md={6}>
      <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
      Name - Nafn
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        name="fullname"
        value={formData.fullname}
        onChange={handleFormChange}
        placeholder="Full Name"
      />
    </Grid>

    {/* Date of Birth */}
    <Grid item xs={12} md={6}>
      <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
      Date of birth-Kennitala
      </Typography>
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

    {/* Professional Title */}
    <Grid item xs={12} md={6}>
      <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
        Professional Title - Starfsheiti
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        name="professionalTitle"
        value={formData.professionalTitle}
        onChange={handleFormChange}
        placeholder="Professional Title"
      />
    </Grid>

    {/* About Me */}
    <Grid item xs={12} md={6}>
      <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
      About me - Um mig
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        name="personalDescription"
        value={formData.personalDescription}
        onChange={handleFormChange}
        placeholder="Write a couple of sentences about yourself - Lýstu þér í 2 setningum    eða svo"
        multiline
        rows={4}
      />
    </Grid>
  </Grid>
</Grid>








        {/* Contact Information Section */}
        <Grid item xs={12}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>Contact information - Persónuupplýsingar </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            Email - Netfang
      </Typography>
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
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            Phone - Sími
      </Typography>
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
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            Address - Heimilisfang
      </Typography>
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
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            website - Vefsíða
      </Typography>
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
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>References - Meðmæli (Optional - Valfrjálfst)</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
             Name - Nafn
      </Typography>
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
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            Company & Title - Fyritæki & Starfstitill
      </Typography>
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
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            Email - Netfang
      </Typography>
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
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>Work history - Starfsreynsla</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          {experiences.map((experience, index) => (
            <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            Email - Netfang
      </Typography>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            Position - Staða
      </Typography>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                Company - Fyritæki 
      </Typography>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                Job description - Starfslýsing
      </Typography>
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
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>Education  - Menntun</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          {education.map((edu, index) => (
            <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                Name of degree - Nám og gráða/viðurkenning
      </Typography>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                Name of Institute & Year - Nafn á stofnun & Tímabil
      </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="university"
                    value={edu.university}
                    onChange={(e) => handleEducationChange(index, e)}
                    placeholder="Name of your university | 2005-2009"
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
  Computer skills - Tölvu & tæknikunnátta
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


<Grid item xs={12}>
  <Typography variant="h6" color="primary" sx={{ fontWeight: 600, marginBottom: 2 }}>
    Languages
  </Typography>
  <Divider sx={{ marginBottom: 2 }} />
  <Grid container spacing={3}>
    {Languages.map((language, index) => (
      <Grid item xs={6} md={3} key={language.title}>
        <FormControlLabel
          control={
            <Checkbox
              checked={language.checked}
              onChange={handleLangChange(index)}  // Pass index to handler
            />
          }
          label={language.title}
        />
      </Grid>
    ))}
    
      </Grid>
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
      {/* Conditionally render the input field */}
      {isAddingLanguage && (
  <Grid container spacing={1} sx={{ marginTop: 2 }}>
    <Grid item xs={8}>
      <TextField
        label="Add Language"
        value={newLanguage}
        onChange={(e) => setNewLanguage(e.target.value)}
        fullWidth
        variant="outlined" // Use outlined variant for a modern look
        size="small" // Make the text field smaller
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: '8px', // Rounded corners
            backgroundColor: 'white', // White background
            '&:hover fieldset': {
              borderColor: '#1976d2', // Change border color on hover
            },
          },
          "& .MuiInputLabel-root": {
            color: '#1976d2', // Label color
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: '#1976d2', // Focused label color
          },
        }}
      />
    </Grid>
    <Grid item xs={4}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddLanguage}
        fullWidth
        size="small" // Make the button smaller
        sx={{
          borderRadius: '8px', // Rounded corners
          boxShadow: 'none', // Remove shadow for a flat look
          '&:hover': {
            backgroundColor: '#115293', // Darker shade on hover
          },
        }}
      >
        Add Language
      </Button>
    </Grid>
  </Grid>
)}

    </Grid>




      </Grid>


      </Box> 

    </Box>
  );
};

export default ResumeBuilder;
