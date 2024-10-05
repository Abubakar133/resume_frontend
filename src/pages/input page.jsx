
import { FaPlus, FaTrash } from "react-icons/fa";
import { Grid, Box, TextField, Button, Typography, Divider, Paper, Checkbox, FormControlLabel, } from "@mui/material";



import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';


const ResumeBuilder = ({
  formData,
  setFormData,
  experiences,
  setExperiences,
  education,
  setEducation,

  setSkills,
  setLanguage, //update concontently in other form  

}) => {
  const handleFormChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value, // Update form values dynamically
    }));
  };


  const [Languages, setlangin] = useState([
    { title: 'Íslenska', checked: false },
    { title: 'Enska', checked: false },
    { title: 'Pólska', checked: false },
    { title: 'Spænska', checked: false },
    { title: 'Arabíska', checked: false },
    { title: 'Ukrainian', checked: false },
    { title: 'Russian', checked: false },



  ]);


  const [skill2, setskills2] = useState([
    { title: 'Microsoft', checked: false },
    { title: 'Google workspace', checked: false },
    { title: 'Excel', checked: false },
    { title: 'CRM', checked: false },
    { title: 'Word', checked: false },
    { title: 'Image editing program', checked: false },
    { title: 'Canva', checked: false },
    { title: 'Java', checked: false },
    { title: 'Photoshop', checked: false },
    { title: 'Power AB', checked: false },
    { title: 'Adobe', checked: false },


  ]);

  const [newLanguage, setNewLanguage] = useState('');
  const [isAddingLanguage, setIsAddingLanguage] = useState(false);
  const [isAddingSkills, setIsAddingSkills] = useState(false);

  const [skills1, setskills] = useState('');

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

  const handleAddSkills = () => {
    if (skills1.trim()) {
      setskills2((prevLanguages) => [
        ...prevLanguages,
        { title: skills1, checked: false }
      ]);
      setskills('');  // Clear the input after adding
      setIsAddingSkills(false);
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


  const handleSkillsChange = (index) => (event) => {
    const updatedLanguages = [...skill2];
    updatedLanguages[index].checked = event.target.checked;

    setskills2(updatedLanguages);  // Update local language state

    // Get the current language that was checked/unchecked
    const currentLanguage = updatedLanguages[index].title;
    const isChecked = updatedLanguages[index].checked;



    // Update the `setLanguage` state based on check/uncheck action
    if (isChecked) {
      // Add the language to the `setLanguage` state if it's checked
      setSkills((prevLanguages) => [...prevLanguages, { title: currentLanguage, percentage: "75" }]);
    } else {
      // Remove the language from the `setLanguage` state if it's unchecked
      setSkills((prevLanguages) =>
        prevLanguages.filter(lang => lang.title !== currentLanguage)
      );
    }


  };



  const addExperience = () => {
    // Add the new experience at the top of the array
    setExperiences([{ year: "", title: "", company: "", description: "" }, ...experiences]);
  };


  const addEducation = () => {
    setEducation([{ major: "", university: "" }, ...education]);
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



  const onDrop = useCallback((acceptedFiles) => {
    // Process the accepted file
    const file = acceptedFiles[0]; // Assuming single file selection
    if (file) {
      // Update formData state with the file information
      setFormData((prevData) => ({
        ...prevData,
        file: file, // Store the file object in formData
        imageUrl: URL.createObjectURL(file), // Create and store the image URL for preview
      }));
    }
  }, [setFormData]);

  // Setup dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png", // Adjust this if you want to accept different file types
  });



  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: "auto",
        margin: "auto", // Center the outer box
        backgroundColor: "#F4F4F3",
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
          backgroundColor: "#0090B0", // Background color for the header
          padding: { xs: 0, md: 3 }, // Padding inside the header box
          borderRadius: "0 0 0 0", // Rounded corners
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
              fontFamily: 'Cooper-bt-bold',
              fontWeight: 600,
              textAlign: "center", // Center the text itself
              fontSize: '2rem',
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


            <Grid container spacing={3}>
              {/* Full Name */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ marginBottom: 1,  fontFamily: 'Cooper-bt-bold', }}>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1 ,  fontFamily: 'Cooper-bt-bold',}}>
                  Date of birth-Kennitala
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="birth"
                  value={formData.birth}
                  onChange={handleFormChange}
                  placeholder="Date of Birth"
                  type="name"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              {/* Professional Title */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ marginBottom: 1,  fontFamily: 'Cooper-bt-bold', }}>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1 ,  fontFamily: 'Cooper-bt-bold',}}>
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
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: 600,
                marginBottom: 2,
                backgroundColor: "#0090B0", // Light blue background color
                padding: "8px 16px", // Add padding to control background size
                borderRadius: "0", // Optional: Rounded corners
                // Ensure the background doesn't stretch full width
                fontFamily: 'Cooper-bt-bold',
              }}
            >
              Contact information - Persónuupplýsingar
            </Typography>

            <Divider sx={{ marginBottom: 2 }} />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ marginBottom: 1, fontFamily: 'Cooper-bt-bold', }}>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1,  fontFamily: 'Cooper-bt-bold', }}>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1,  fontFamily: 'Cooper-bt-bold', }}>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1, fontFamily: 'Cooper-bt-bold', }}>
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

            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: 600,
                marginBottom: 2,
                backgroundColor: "#0090B0", // Light blue background color
                padding: "8px 16px", // Add padding to control background size
                borderRadius: "0", // Optional: Rounded corners
                // Ensure the background doesn't stretch full width
                 fontFamily: 'Cooper-bt-bold',
              }}
            >
              References - Meðmæli (Optional - Valfrjálfst)
            </Typography>

            <Divider sx={{ marginBottom: 2 }} />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ marginBottom: 1 , fontFamily: 'Cooper-bt-bold',}}>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1, fontFamily: 'Cooper-bt-bold', }}>
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
                <Typography variant="subtitle1" sx={{ marginBottom: 1, fontFamily: 'Cooper-bt-bold', }}>
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
           
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: 600,
                marginBottom: 2,
                backgroundColor: "#0090B0", // Light blue background color
                padding: "8px 16px", // Add padding to control background size
                borderRadius: "0", // Optional: Rounded corners
                // Ensure the background doesn't stretch full width
                fontFamily: 'Cooper-bt-bold',
              }}
            >
              Work history - Starfsreynsla
            </Typography>


            <Divider sx={{ marginBottom: 2 }} />
            {experiences.map((experience, index) => (
              <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" sx={{ marginBottom: 1 , fontFamily: 'Cooper-bt-bold',}}>
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
                    <Typography variant="subtitle1" sx={{ marginBottom: 1 , fontFamily: 'Cooper-bt-bold',}}>
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
                    <Typography variant="subtitle1" sx={{ marginBottom: 1 , fontFamily: 'Cooper-bt-bold',}}>
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
                    <Typography variant="subtitle1" sx={{ marginBottom: 1 ,  fontFamily: 'Cooper-bt-bold',}}>
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

                      startIcon={<FaTrash />}
                      onClick={() => removeExperience(index)}
                      sx={{

                        backgroundColor: '#FFC1C3',
                        color: '#000',
                        '&:hover': {
                          backgroundColor: '#FFC1C3', // Same background color to disable hover effect
                        },
                      }}
                    >

                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            ))}
            <Button
              variant="contained"

              startIcon={<FaPlus />}
              onClick={addExperience}
              sx={{ marginTop: 1, backgroundColor: '#DCDCDC', color: '#000' }}
            >
              Add Experience
            </Button>
          </Grid>

          {/* Education Section */}
          <Grid item xs={12}>


            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: 600,
                marginBottom: 2,
                backgroundColor: "#0090B0", // Light blue background color
                padding: "8px 16px", // Add padding to control background size
                borderRadius: "0", // Optional: Rounded corners
                // Ensure the background doesn't stretch full width
                fontFamily: 'Cooper-bt-bold',
              }}
            >
              Education  - Menntun
            </Typography>

            <Divider sx={{ marginBottom: 2 }} />
            {education.map((edu, index) => (
              <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" sx={{ marginBottom: 1, fontFamily: 'Cooper-bt-bold', }}>
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
                    <Typography variant="subtitle1" sx={{ marginBottom: 1, fontFamily: 'Cooper-bt-bold', }}>
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

                      startIcon={<FaTrash />}
                      onClick={() => removeEducation(index)}
                      sx={{

                        backgroundColor: '#FFC1C3',
                        color: '#000',
                        '&:hover': {
                          backgroundColor: '#FFC1C3', // Same background color to disable hover effect
                        },
                      }}
                    >

                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            ))}
            <Button
              variant="contained"

              startIcon={<FaPlus />}
              onClick={addEducation}
              sx={{ marginTop: 1, backgroundColor: '#DCDCDC', color: '#000'}}
            >
              Add Education
            </Button>
          </Grid>


          {/* Skills Section */}
          <Grid item xs={12}>


            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: 600,
                marginBottom: 2,
                backgroundColor: "#0090B0", // Light blue background color
                padding: "8px 16px", // Add padding to control background size
                borderRadius: "0", // Optional: Rounded corners
                // Ensure the background doesn't stretch full width
                fontFamily: 'Cooper-bt-bold',
              }}
            >
              Skills - Færni
            </Typography>

            <Divider sx={{ marginBottom: 2 }} />
            <Grid container spacing={3}>
              {skill2.map((skill, index) => (
                <Grid item xs={6} md={3} key={skill.title}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={skill.checked}
                        onChange={handleSkillsChange(index)}  // Pass index to handler
                      />
                    }
                    label={skill.title}
                  />
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              startIcon={<FaPlus />}
              onClick={() => setIsAddingSkills(true)}  // Toggle adding skill input
              size="small"
              sx={{ marginTop: 1, backgroundColor: '#DCDCDC', color: '#000' }} // Custom background and text color
            >
              Add Skills
            </Button>

            {/* Conditionally render the input field */}
            {isAddingSkills && (
              <Grid container spacing={1} sx={{ marginTop: 2 }}>
                <Grid item xs={8}>
                  <TextField
                    label="Add Skill"
                    value={skills1}
                    onChange={(e) => setskills(e.target.value)}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        '&:hover fieldset': {
                          borderColor: '#1976d2',
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: '#1976d2',
                      },
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: '#1976d2',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddSkills}  // Handle adding skills
                    fullWidth
                    size="small"
                    sx={{
                      borderRadius: '8px',
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: '#115293',
                      },
                    }}
                  >
                    Add Skill
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>






          <Grid item xs={12}>


            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: 600,
                marginBottom: 2,
                backgroundColor: "#0090B0", // Light blue background color
                padding: "8px 16px", // Add padding to control background size
                borderRadius: "0", // Optional: Rounded corners
                // Ensure the background doesn't stretch full width
                fontFamily: 'Cooper-bt-bold',
              }}
            >
              Languages - Tungumál
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
              startIcon={<FaPlus />}
              onClick={addLang}
              size="small"
              sx={{ marginTop: 1, backgroundColor: '#DCDCDC', color: '#000' }} // Custom background and text color
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





          <Grid item xs={12}>
            <Typography
              variant="h6"
              color="white"
              sx={{
                fontWeight: 600,
                marginBottom: 2,
                backgroundColor: "#0090B0",
                padding: "8px 16px",
                borderRadius: "0",
                fontFamily: 'Cooper-bt-bold',
              }}
            >
              Image Selection - Myndaval
            </Typography>

            <Divider sx={{ marginBottom: 2 }} />

            <div>
              <div
                {...getRootProps()}
                style={{
                  border: "2px dashed #0087F7",
                  borderRadius: 5,
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: isDragActive ? "#f0f0f0" : "#fff",
                }}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <div>
                    <div>Drop Files Here.</div>
                    <button style={{ marginTop: 10 }}>Or Click to Select</button>
                  </div>
                ) : (
                  <div>
                    <div>Drag and Drop Files here to Upload.</div>
                    <button style={{ marginTop: 10 }}>Or Click to Select</button>
                  </div>
                )}
              </div>


            </div>
          </Grid>







        </Grid>


      </Box>

    </Box>
  );
};

export default ResumeBuilder;
