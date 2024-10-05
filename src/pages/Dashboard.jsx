
import Header from "../Dashboard_components/Header";

import Footer from "../Dashboard_components/FOOTER";
import Template1 from "./template1";
import Input from "./input page";
import { useState } from "react";
import { BiAlarmSnooze } from "react-icons/bi";
import PdfPreviewPage from "./pdf_preview";
import { useTranslation } from 'react-i18next';
const Dashboard1 = () => {

  const { t } = useTranslation();
const userid =localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    // fullname: "Abubakar mehboob",
    // professionalTitle: "Professional Title",
    // personalDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alia minus est culpa id corrupti nobis ullam harum, porro veniam facilis, obcaecati nulla magnam beatae quae at eos! Qui, similique laboriosam?`,
    // refererName: "Sara Taylore",
    // refererRole: "Director | Company Name",
    // mobile: "+91 0000-0000",
    // email: "urname@gmail.com",
    // website: "urwebsite.com",
    // address: "your street address, ss, street, city/zip code - 1234",
  });

  const [experiences, setExperiences] = useState([
    {
      year: "2012 - 2014",
      title: "Job Position Here",
      companyAndLocation: "Company Name | Location here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus minima tenetur nostrum quo aliquam dolorum incidunt.",
    },
    
  ]);

  const [education, setEducation] = useState([
    {
      major: "ENTER YOUR MAJOR",
      university: "Name of your university | 2005-2009",
    },
    
  ]);

  const [skills, setSkills] = useState([
    // {
    //   title: "Microsoft",
    //   percentage: "75",
    // },
    // {
    //   title: "Google workspace",
    //   percentage: "75",
    // },
    // {
    //   title: "Excel",
    //   percentage: "75",
    // },
    // {
    //   title: "CRM",
    //   percentage: "75",
    // },
    // {
    //   title: "Image editing program",
    //   percentage: "75",
    // },
    // {
    //   title: "Word",
    //   percentage: "75",
    // },
  ]);
 
  

  const [Language, setLang] = useState([
    // {
    //   title: "English",
     
    // },
    // {
    //   title: "Urdu",
      
    // },
   
  ]);


  const translatedExperiences = experiences.map(exp => ({
    ...exp,
    title: t(exp.title), // Translate title dynamically
    description: t(exp.description), // Translate description dynamically
  }));

  const translatedEducation = education.map(edu => ({
    ...edu,
    degree: t(edu.degree), // Translate degree dynamically
    institution: t(edu.institution), // Translate institution dynamically
  }));

  const translatedSkills = skills.map(skill => t(skill)); // Translate skills dynamically

  const translatedLanguage = Language.map(Language => t(Language));

  return (
    <div className="mt-20 lg:mt-0 w-full overflow-hidden">
      <Header />
      {/* Pass the formData, update methods, and state down as props */}
    
  
    
    
      <Input
        formData={formData}
        setFormData={setFormData}
        experiences={experiences}
        setExperiences={setExperiences}
        education={education}
        setEducation={setEducation}
        skills={skills}
        setSkills={setSkills}
        setLanguage={setLang}
        Languages={Language}
      />
    
      
        <Template1
       
          formData={formData}
          experiences={translatedExperiences} // Use translated data
          education={translatedEducation} // Use translated data
          skills={translatedSkills} // Use translated data
          Languages={translatedLanguage} 
        />
    
     
      <Footer />
    </div>
  );
};

export default Dashboard1;
