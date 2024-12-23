import React, { useEffect, useRef, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import uploadImageToCloudinarypdf from '../Dashboard_components/uploadCloudinarypdf';
import { toast } from "react-toastify";
import stripePromise from "../Dashboard_components/stripeConfig";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';

import { LiaBirthdayCakeSolid } from "react-icons/lia";
import html2pdf from 'html2pdf.js';
import axios from "axios";
import { BASE_URL } from "../config";
import {
  FaHouse,
  FaTrash,
  FaPenToSquare,
  FaPencil,
  FaPlus,
} from "react-icons/fa6";
import { BiSolidBookmarks } from "react-icons/bi";
import {
  BsFiletypePdf,
  BsFiletypePng,
  BsFiletypeJpg,
  BsFiletypeSvg,
} from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";
import { FadeInOutWIthOpacity, opacityINOut } from "./animation";

const Template1 = ({ formData, experiences, education, skills, Languages }) => {
  const { pathname } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();
  const templateName = pathname?.split("/")?.slice(-1);
  const searchParams = new URLSearchParams(location.search);
  const loadedTemplateId = searchParams.get("templateId");


  const [isVisible, setIsVisible] = useState(true);

  // Step 2: Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggle = (value) => {
    setIsVisible(value);
  };

  const [isEdit, setIsEdit] = useState(false);


  const resumeRef = useRef(null);

  const [imageAsset, setImageAsset] = useState({
    isImageLoading: false,
    imageURL: null,
  });

  useEffect(() => {

    const intervalId = setInterval(() => {
      checkSubscriptionStatus();
  }, 1000);
    
    if (window.innerWidth <= 550) {
      toggle(false); 
    } else if (window.innerWidth > 550) {
      toggle(true); 
    }
    return () => clearInterval(intervalId);
  }, []);
  const fileInputRefs = useRef([]);


  const handleIconClick = () => {
    fileInputRefs.current.click(); 
  };


  const updateSubscription = async () => {
    const userId = localStorage.getItem("userId");

    try {
      const response = await axios.post(`${BASE_URL}/update-subscription2`, {
        userId, 
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSubscriptionUpdated(false);
      } else {
        throw new Error('Failed to update subscription');
      }
    } catch (error) {
      setError(error.response?.data?.error || error.message);
      console.error('Error updating subscription:', error);
    }
  };

  const generatePDF2 = () => {
    const element = resumeRef.current;
    if (!element) {
      toast.info("Unable to capture the content at the moment");
      return;
    }

    // Clone the element to capture the content accurately
    const clone = element.cloneNode(true);
    document.body.appendChild(clone);

    // Apply styles to the clone to ensure it fits within the PDF
    clone.style.position = 'absolute';
    clone.style.top = '0';
    clone.style.left = '0';
    clone.style.width = '210mm'; // A4 width
    clone.style.height = '297mm'; // A4 height
    clone.style.overflow = 'visible'; // Prevent overflow
    clone.style.backgroundColor = 'white'; // Ensure background color is white for visibility

    // Add padding/margins to ensure content doesn't clip
    clone.style.padding = '0'; // Remove any padding/margins that could cause misalignment
    clone.style.margin = '0';

    // Wait for the browser to render the clone
    setTimeout(() => {
      domtoimage.toPng(clone, { quality: 1, scale: 5, width: 830, height: 1200 })
        .then((dataUrl) => {
          const pdf = new jsPDF({
            unit: 'mm',
            format: 'a4',
          });

          const imgWidth = 210; // A4 width in mm
          const imgHeight = (clone.offsetHeight * imgWidth) / clone.offsetWidth;
          pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);


          pdf.save("image");
          // Check if pdfBlob is valid

          handleUploadPDF();
          // Call the function to upload the generated PDF

          //pdf.save('resume.pdf');

          // Cleanup
          document.body.removeChild(clone);
        })
        .catch((error) => {
          console.error('Error generating PDF:', error);
          toast.error("Failed to generate PDF");
        });
    }, 1000); // Delay to ensure clone is rendered
  };


  const handlePaymentAndDownload = async () => {

    const userId = localStorage.getItem("userId");

    // Get the Stripe object
    const stripe = await stripePromise;

    try {
      // Create a Checkout session by calling your backend
      const response = await axios.post(`${BASE_URL}/create-checkout-session`, {
        userId, // Send the userId directly
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const session = response.data;

    
      // const { error } = await stripe.redirectToCheckout({
      //   sessionId: session.id,
      // });
      const checkoutUrl = session.checkoutData.redirect_url;
        if (checkoutUrl) {
          localStorage.setItem("userIdf", userId);

           window.open(checkoutUrl, '_blank'); // Open in a new tab
            checkSubscriptionStatus();
        } else {
            console.error('Checkout URL not found in the session data');
        }
    } catch (error) {
        console.error('Error creating checkout session:', error);
    }
  };


  const [subscriptionUpdated, setSubscriptionUpdated] = useState(false);
  const [remainingDays, setRemainingDays] = useState(null);
  const checkSubscriptionStatus = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const response = await axios.post(`${BASE_URL}/check-subscription`, {
        userId,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.isActive) {
        
        setSubscriptionUpdated(true);
        setRemainingDays(response.data.remainingDays);

      } else {
        setSubscriptionUpdated(false);
        setRemainingDays(null);

      }
    } catch (error) {
      console.error('Error checking subscription status:', error);
    }
  };



  const handleUploadPDF = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {

      toast.error("Please select a PDF file only.");
      return;
    }
    else {

      const userId = localStorage.getItem("userId");


      try {
        const uploadResponse = await uploadImageToCloudinarypdf(file);
        const pdfUrl = uploadResponse.secure_url;
       
        console.log("User ID:", userId);

       
        const response = await axios.post(`${BASE_URL}/userdata/upload_pdf/`, {
          userId: userId,
          pdflink: pdfUrl,
        });

       
        if (response.status === 200) {
          toast.success("PDF uploaded and updated successfully");
        } else {
          toast.error("Failed to update PDF URL");
        }
      } catch (error) {
        console.error("Error during PDF upload:", error);
        toast.error("Failed to upload PDF");
      }

    }
  };





  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEditable = () => {
    setIsEdit(!isEdit);
    var inputs = document.querySelectorAll("input");
    var textarea = document.querySelectorAll("textarea");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].readOnly = !inputs[i].readOnly;
    }

    for (var i = 0; i < textarea.length; i++) {
      textarea[i].readOnly = !textarea[i].readOnly;
    }
  };


  const handleFileSelect = async (event) => {
    setImageAsset((prevAsset) => ({ ...prevAsset, isImageLoading: true }));

    const file = event.target.files[0];
    if (file && isAllowed(file)) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const dataURL = event.target.result;
        console.log("Data URL:", dataURL);


        setImageAsset((prevAsset) => ({
          ...prevAsset,
          imageURL: dataURL,
        }));
      };


      reader.readAsDataURL(file);
    } else {
      toast.error("Invalid File Format");
    }
  };

  const isAllowed = (file) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    return allowedTypes.includes(file.type);
  };


  const deleteImageObject = () => {
    setImageAsset((prevAsset) => ({
      ...prevAsset,
      imageURL: null,
    }));
  };



  const handleExpChange = (index, e) => {
    const { name, value } = e.target;

    const updatedExperiences = [...experiences];

    updatedExperiences[index][name] = value;

    setExperiences(updatedExperiences);
  };

  const removeExperience = (index) => {

    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);

    setExperiences(updatedExperiences);
  };



  const handleSkillsChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    setSkills(updatedSkills);
  };

  const handleLanguageChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    setSkills(updatedSkills);
  };



  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    const updatedSkills = [
      ...skills,
      {
        title: "skill1",
        percentage: "75",
      },
    ];
    setSkills(updatedSkills);
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEdu = [...education];
    updatedEdu[index][name] = value;
    setEducation(updatedEdu);
  };

  const removeEducation = (index) => {
    const updatedEdu = [...education];
    updatedEdu.splice(index, 1);
    setEducation(updatedEdu);
  };

  const addEducation = () => {
    const updatedEdu = [
      ...education,
      {
        major: "ENTER YOUR MAJOR",
        university: "Name of your university / college 2005-2009",
      },
    ];
    setEducation(updatedEdu);
  };

  // const generatePDF = () => {
  //   const element = resumeRef.current;
  //   if (!element) {
  //     toast.info("Unable to capture the content at the moment");
  //     return;
  //   }

  //   // Temporarily set the dimensions of the element
  //   const originalStyle = {
  //     width: element.style.width,
  //     height: element.style.height,
  //   };

  //   const imgWidth = element.style.width = '210mm'; // A4 width
  //   element.style.height = (element.offsetHeight * imgWidth) / element.offsetWidth;

  //   const options = {
  //     filename: 'resume.pdf',
  //     image: { type: 'jpg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  //   };

  //   html2pdf().from(element).set(options).save().then(() => {
  //     // Restore original dimensions after saving
  //     element.style.width = originalStyle.width;
  //     element.style.height = originalStyle.height;
  //   }).catch(error => {
  //     console.error('Error generating PDF:', error);
  //     toast.error("Failed to generate PDF");
  //   });
  // };


  useEffect(() => {
    if (!sessionStorage.getItem("hasReloaded")) {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  const generatePDF = () => {
    //toggleVisibility();
    if (subscriptionUpdated) {
      toggle(true);

      // Wait for the browser to render the clone
      setTimeout(() => {


        const element = resumeRef.current;
        if (!element) {
          toast.info("Unable to capture the content at the moment");
          return;
        }

        // Clone the element to capture the content accurately
        const clone = element.cloneNode(true);
        document.body.appendChild(clone);



        // Apply styles to the clone to ensure it fits within the PDF
        clone.style.position = 'absolute';
        clone.style.top = '0';
        clone.style.left = '0';
        clone.style.width = '210mm'; // A4 width
        clone.style.height = '297mm'; // A4 height
        clone.style.overflow = 'visible'; // Prevent overflow
        clone.style.backgroundColor = 'white'; // Ensure background color is white for visibility
        const calculatedHeight = clone.scrollHeight;

        // Add padding/margins to ensure content doesn't clip
        clone.style.padding = '0'; // Remove any padding/margins that could cause misalignment
        clone.style.margin = '0';
        domtoimage.toPng(clone, { quality: 1, scale: 5, width: 830, height: calculatedHeight })
          .then((dataUrl) => {
            const pdf = new jsPDF({
              unit: 'mm',
              format: 'a4',
            });

            const imgWidth = 210; // A4 width in mm
            const imgHeight = (clone.offsetHeight * imgWidth) / clone.offsetWidth;
            pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('resume.pdf');
           
            // Cleanup
            document.body.removeChild(clone);
            if (window.innerWidth < 550) {
              toggle(false);

            }
            updateSubscription();
          })
          .catch((error) => {
            console.error('Error generating PDF1:', error);
            toast.error("Please Select the Image");
          });

      }, 2000); // Delay to ensure clone is rendered
    }
    else {
      toast.error("Please get a Subscription");
    }
  };


  const generateImage = (format) => {


    if (subscriptionUpdated) {
      toggle(true);



      // Allow the browser to render the clone properly
      setTimeout(() => {


        const element = resumeRef.current;
        if (!element) {
          toast.info("Unable to capture the content at the moment");
          return;
        }

        const clone = element.cloneNode(true);
        document.body.appendChild(clone);

        clone.style.position = 'absolute';
        clone.style.top = '0';
        clone.style.left = '0';
        clone.style.width = '210mm'; // A4 width
        clone.style.height = '297mm'; // A4 height
        clone.style.overflow = 'visible';
        clone.style.backgroundColor = 'white';
        const calculatedHeight = clone.scrollHeight;
        // Remove padding and margins
        clone.style.padding = '0';
        clone.style.margin = '0';

        domtoimage.toPng(clone, {
          quality: 1,
          scale: 5, // Use a high scale for better resolution
          width: 830, height: calculatedHeight,
        })
          .then((dataUrl) => {
            if (format === 'png') {
              downloadImage(dataUrl, 'resume.png');
            } else if (format === 'jpg') {
              convertToJPG(dataUrl, 'resume.jpg');
            }

            document.body.removeChild(clone);

            if (window.innerWidth < 550) {
              toggle(false);

            }
          })
          .catch((error) => {
            console.error('Error generating image:', error);
            toast.error("Please Select the Image");
          });
      }, 1000); // Delay to ensure clone is rendered

    }
    else {
      toast.error("Please get a Subscription");
    }
  };

  // Function to download the image
  const downloadImage = (dataUrl, filename) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  };

  // Convert PNG Data URL to JPG Data URL
  const convertToJPG = (dataUrl, filename) => {
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff'; // Set background color to white (optional)
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const jpgDataUrl = canvas.toDataURL('image/jpeg', 1.0); // Convert to JPG
      downloadImage(jpgDataUrl, filename);
      updateSubscription();
    };
  };


  return (
    <div className="lg:w-full   lg:flex lg:flex-col items-center justify-start gap-4 overflow-hidden">
      <div className="w-full  w-[300px]  lg:w-[1200px] grid grid-cols-1 lg:grid-cols-12 px-6 lg:px-32">
        <div className="col-span-12 px-4 py-6">
        
       {/*  <div className="flex flex-wrap items-center justify-center w-full gap-4 lg:gap-12 mb-4">
           



            {remainingDays !== null && (
              <div className="text-sm text-red-500 ">

                Þú átt {remainingDays} daga eftir af áskriftinni þinni.
              </div>
            )}

            {!subscriptionUpdated && (
              <div
                className="flex items-center justify-center gap-1 px-3 py-1  rounded-md bg-red-200 cursor-pointer"
                onClick={handlePaymentAndDownload}
              >
                {isEdit ? (
                  <FaPenToSquare className="text-sm text-txtPrimary" />
                ) : (
                  <FaPencil className="text-sm text-txtPrimary" />
                )}
                <p className="text-sm text-txtPrimary font-cooper-bt">Fáðu áskrift</p>
              </div>
            )}


            <div
              className="flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
              onClick={handleIconClick} // Handle div click to trigger file input
            >
              <BiSolidBookmarks className="text-sm text-txtPrimary" />
              <p className="text-sm text-txtPrimary font-cooper-bt">hlaða upp í ský</p>

             
              <input
                type="file"
                accept=".pdf"
                ref={fileInputRefs} // Assign ref to this input
                className="hidden" // Hide the actual input element
                onChange={(event) => handleUploadPDF(event)}
              />
            </div>

          
            <div className="flex flex-wrap items-center justify-center gap-2">
              <p className="text-sm text-txtPrimary font-cooper-bt">Sækja : </p>
              <BsFiletypePdf
                className="text-xl md:text-2xl text-txtPrimary cursor-pointer"
                onClick={generatePDF}
              />
              <BsFiletypePng
                className="text-xl md:text-2xl text-txtPrimary cursor-pointer"
                onClick={() => generateImage('png')}
              />
              <BsFiletypeJpg
                className="text-xl md:text-2xl text-txtPrimary cursor-pointer"
                onClick={() => generateImage('jpg')}
              />
            </div>
          </div>
          */}



          <div className="w-full h-auto grid grid-cols-12 " ref={resumeRef}>





            <div className="col-span-4 bg-black flex flex-col items-center justify-start">
              <div className="w-full h-100 lg:h-80 bg-gray-300 flex items-center justify-center">
                {!imageAsset.imageURL ? (
                  <React.Fragment>
                    <label className=" w-full cursor-pointer h-full">
                      {formData.file && (
                        <div className="w-full flex flex-col items-center justify-center h-full">
                          <div className="w-full flex flex-col justify-center items-center cursor-pointer">
                            <img
                              src={URL.createObjectURL(formData.file)}

                              className="w-full h-80 object-cover"
                              alt=""
                            />
                          </div>
                        </div>
                      )}

                      <input
                        type="file"
                        className="w-0 h-0"
                        accept=".jpeg,.jpg,.png"
                        onChange={handleFileSelect}
                      />

                    </label>
                  </React.Fragment>
                ) : (
                  <div className="relative w-full h-full overflow-hidden rounded-md">
                    <img
                      src={URL.createObjectURL(formData.file)}
                      alt="Uploaded Preview"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {isEdit && (
                      <div
                        className="absolute top-4 right-4 w-8 h-8 rounded-md flex items-center justify-center bg-red-500 cursor-pointer"
                        onClick={deleteImageObject}
                      >
                        <FaTrash className="text-sm text-white" />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className={`w-full flex flex-col items-center justify-start pl-0 mt-4 gap-6  ${isVisible ? 'block' : 'hidden'}`}>

                <div className="w-full">
                  <p className="uppercase text-lg font-semibold text-gray-300 ml-4 font-cooper-bt">
                    Menntun
                  </p>
                  <div className="w-full h-[2px] bg-yellow-400"></div>
                  {education &&
                    education?.map((edu, i) => (
                      <motion.div
                        key={i}
                        {...opacityINOut(i)}
                        className="w-full pl-4 mt-3 relative"
                      >
                        <input
                          type="text"
                          readOnly="true"
                          name="major"
                          value={edu.major}
                          onChange={(e) => handleEducationChange(i, e)}
                          className={`bg-transparent outline-none font-cooper-bt border-none text-sm font-semibold uppercase  text-gray-300  ${isEdit && "text-yellow-900 w-full"
                            }`}
                        />

                        <textarea
                          readOnly="true"
                          className={`text-xs text-gray-300 mt-2 font-cooper-bt  w-full  outline-none border-none ${isEdit ? "bg-[#1c1c1c]" : "bg-transparent"
                            }`}
                          name="university"
                          value={edu.university}
                          onChange={(e) => handleEducationChange(i, e)}
                          rows="2"
                          style={{
                            maxHeight: "auto",
                            minHeight: "40px",
                            resize: "none",
                          }}
                        />

                        {isEdit && (
                          <motion.div
                            {...FadeInOutWIthOpacity}
                            onClick={() => removeEducation(i)}
                            className="cursor-pointer absolute right-2 top-0"
                          >
                            <FaTrash className="text-sm text-gray-300" />
                          </motion.div>
                        )}

                      </motion.div>
                    ))}

                </div>


                {isEdit && (
                  <motion.div
                    {...FadeInOutWIthOpacity}
                    onClick={addEducation}
                    className="cursor-pointer"
                  >
                    <FaPlus className="text-base text-gray-300" />
                  </motion.div>
                )}
                <div className="w-full">
                  <p className="bg-transparent uppercase text-lg font-semibold text-gray-300 ml-4 font-cooper-bt">
                  Meðmæli 
                  </p>
                  <div className="w-full h-[2px] bg-yellow-400 mt-2"></div>
                  <div className="w-full pl-4 mt-3">
                    <input
                      value={formData.refererName}
                      onChange={handleChange}
                      name="refererName"
                      type="text"
                      readOnly="true"
                      className={`bg-transparent outline-none font-cooper-bt border-none text-base tracking-widest capitalize text-gray-300 w-full ${isEdit && "bg-[#1c1c1c]"
                        }`}
                    />
                    <input
                      value={formData.refererRole}
                      onChange={handleChange}
                      name="refererRole"
                      type="text"
                      readOnly="true"
                      className={`bg-transparent outline-none font-cooper-bt border-none text-xs capitalize text-gray-300 w-full ${isEdit && "bg-[#1c1c1c]"
                        }`}
                    />
                    <input
                      value={formData.refemail}
                      onChange={handleChange}
                      name="refemail"
                      type="email"
                      readOnly="true"
                      className={`bg-transparent outline-none font-cooper-bt border-none text-xs  text-gray-300 w-full ${isEdit && "bg-[#1c1c1c]"
                        }`}
                    />
                  </div>
                </div>
              </div>



              <div className={`w-full flex flex-col items-start justify-start mt-4 gap-6 ${isVisible ? 'block' : 'hidden'}`}>

                <div className="w-full grid grid-cols-12">
                  <div className="col-span-3 w-full h-6 bg-yellow-400"></div>
                  <div className="col-span-8">
                    <div className="w-full h-6 bg-[rgba(45,45,45,0.6)] px-3 flex items-center">
                      <p className="text-sm font-semibold text-gray-300 font-cooper-bt">
                        Sími
                      </p>
                    </div>
                    <input
                      value={formData.mobile}
                      onChange={handleChange}
                      name="mobile"
                      type="text"
                      readOnly="true"
                      className={`bg-transparent outline-none border-none text-xs px-3 mt-2 text-gray-300 w-full ${isEdit && "bg-[#1c1c1c]"
                        }`}
                    />
                  </div>
                </div>
                <div className="w-full grid grid-cols-12">
                  <div className="col-span-3 w-full h-6 bg-yellow-400"></div>
                  <div className="col-span-8">
                    <div className="w-full h-6 bg-[rgba(45,45,45,0.6)] px-3 flex items-center">
                      <p className="text-sm font-semibold text-gray-300 font-cooper-bt">
                        Netfang
                      </p>
                    </div>
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      type="text"
                      readOnly="true"
                      className={`bg-transparent outline-none border-none text-xs px-3 mt-2 text-gray-300 w-full ${isEdit && "bg-[#1c1c1c]"
                        }`}
                    />
                  </div>
                </div>
                <div className="w-full grid grid-cols-12">
                  <div className="col-span-3 w-full h-6 bg-yellow-400"></div>
                  <div className="col-span-8">
                    <div className="w-full h-6 bg-[rgba(45,45,45,0.6)] px-3 flex items-center">
                      <p className="text-sm font-semibold text-gray-300 font-cooper-bt">
                        Vefsíða
                      </p>
                    </div>

                    <input
                      value={formData.website}
                      onChange={handleChange}
                      name="website"
                      type="text"
                      readOnly="true"
                      className={`bg-transparent outline-none border-none text-xs px-3 mt-2 text-gray-300 w-full ${isEdit && "bg-[#1c1c1c]"
                        }`}
                    />
                  </div>
                </div>
                <div className="w-full grid grid-cols-12">
                  <div className="col-span-3 w-full h-6 bg-yellow-400"></div>
                  <div className="col-span-8">
                    <div className="w-full h-6 bg-[rgba(45,45,45,0.6)] px-3 flex items-center">
                      <p className="text-sm font-semibold text-gray-300 font-cooper-bt">
                        Heimilisfang
                      </p>
                    </div>
                    <textarea
                      readOnly="true"
                      className={`text-xs text-gray-300 mt-2 px-3 font-cooper-bt  w-full  outline-none border-none ${isEdit ? "bg-[#1c1c1c]" : "bg-transparent"
                        }`}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="5"
                      style={{
                        maxHeight: "auto",
                        minHeight: "40px",
                        resize: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>




            <div className={`col-span-8 flex flex-col items-center justify-start py-6 bg-white ml-8 ${isVisible ? 'block' : 'hidden'}`}>

              <div className="w-full py-4"></div>



              <div className="w-full px-8 py-6 bg-yellow-500 ">
                <div className="flex items-center justify-start ">
                  <input
                    type="text"
                    readOnly="true"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className={`bg-transparent outline-none font-cooper-bt border-none text-[20px] font-sans uppercase tracking-wider text-txtDark w-full font-bold ${isEdit && "text-white w-full"
                      }`}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <LiaBirthdayCakeSolid />

                  <input
                    value={formData.birth}
                    onChange={handleChange}
                    name="birth"
                    type="name"
                    readOnly="true"
                    className={`bg-transparent outline-none font-cooper-bt border-none text-xl tracking-widest uppercase text-txtPrimary w-full ${isEdit && "text-white"
                      }`}
                  />
                </div>

                <input
                  value={formData.professionalTitle}
                  onChange={handleChange}
                  name="professionalTitle"
                  type="text"
                  readOnly="true"
                  className={`bg-transparent outline-none font-cooper-bt border-none text-xl tracking-widest uppercase text-txtPrimary w-full ${isEdit && "text-white"
                    }`}
                />
              </div>




              <div className="w-full px-8 py-6 flex flex-col items-start justify-start gap-6">



                <div className="w-full">
                  <p className="uppercase text-xl tracking-wider font-cooper-bt">Um mig</p>
                  <div className="w-full h-1 bg-yellow-900 my-3"></div>
                  <textarea
                    readOnly="true"
                    className={`text-base text-txtPrimary font-cooper-bt tracking-wider w-full  outline-none border-none ${isEdit ? "bg-gray-200" : "bg-transparent"
                      }`}
                    name="personalDescription"
                    value={formData.personalDescription}
                    onChange={handleChange}
                    rows="4"
                    style={{
                      minHeight: "100px",
                      width: "100%",
                      height: "100px",
                      resize: "none",
                    }}
                  />
                </div>





                <div className="w-full">
                  <p className="uppercase text-xl tracking-wider font-cooper-bt">
                    Starfsreynsla
                  </p>
                  <div className="w-full h-1 bg-yellow-900 my-3"></div>
                  <div className="w-full flex flex-col items-center justify-start gap-4">
                    <AnimatePresence>
                      {experiences &&
                        experiences?.map((exp, i) => (
                          <motion.div
                            {...opacityINOut(i)}
                            className="w-full grid grid-cols-12"
                            key={i}
                          >
                            <div className="col-span-4">
                              <input
                                value={exp.year}
                                onChange={(e) => handleExpChange(i, e)}
                                name="year"
                                type="text"
                                readOnly="true"
                                className={` outline-none border-none text-base font-cooper-bt tracking-eide uppercase text-txtDark w-full ${isEdit ? "bg-gray-200" : "bg-transparent"
                                  }`}
                              />
                            </div>
                            <div className="col-span-8 relative">
                              <AnimatePresence>
                                {isEdit && (
                                  <motion.div
                                    {...FadeInOutWIthOpacity}
                                    onClick={() => removeExperience(i)}
                                    className="cursor-pointer absolute right-0 top-2"
                                  >
                                    <FaTrash className="text-base text-txtPrimary" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <input
                                value={exp.title}
                                onChange={(e) => handleExpChange(i, e)}
                                name="title"
                                type="text"
                                readOnly="true"
                                className={` outline-none border-none  text-lg font-cooper-bt  capitalize text-txtDark w-full ${isEdit ? "bg-gray-200" : "bg-transparent"
                                  }`}
                              />

                              <input
                                value={exp.companyAndLocation}
                                onChange={(e) => handleExpChange(i, e)}
                                name="companyAndLocation"
                                type="text"
                                readOnly="true"
                                className={` outline-none border-none text-sm font-cooper-bt tracking-wide capitalize text-txtPrimary w-full ${isEdit ? "bg-gray-200" : "bg-transparent"
                                  }`}
                              />
                              <textarea
                                readOnly="true"
                                className={`text-xs mt-4 font-cooper-bt  text-txtPrimary tracking-wider w-full  outline-none border-none ${isEdit ? "bg-gray-200" : "bg-transparent"
                                  }`}
                                name="description"
                                value={exp.description}
                                onChange={(e) => handleExpChange(i, e)}
                                rows="3"
                                style={{
                                  maxHeight: "auto",
                                  minHeight: "60px",
                                  resize: "none",
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isEdit && (
                        <motion.div
                          {...FadeInOutWIthOpacity}
                          onClick={addExperience}
                          className="cursor-pointer"
                        >
                          <FaPlus className="text-base text-txtPrimary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>




                {/* skills */}
                <div className="w-full">
                  <p className="uppercase text-xl tracking-wider font-cooper-bt">Færni</p>
                  <div className="w-full h-1 bg-yellow-900 my-3"></div>
                  <div className="w-full flex flex-wrap items-center justify-start gap-4">
                    <AnimatePresence>
                      {skills &&
                        skills?.map((skill, i) => (
                          <motion.div
                            key={i}
                            {...opacityINOut(i)}
                            className="flex-1"
                            style={{ minWidth: 225 }}
                          >
                            <div className="w-full flex items-center justify-between">
                              <div className="flex items-center justify-center">
                                <input
                                  value={skill.title}

                                  name="title"
                                  type="text"
                                  readOnly="true"
                                  className={` outline-none border-none text-base font-cooper-bt tracking-wide capitalize font-semibold text-txtPrimary w-full ${isEdit ? "bg-gray-200" : "bg-transparent"
                                    }`}
                                />

                                <AnimatePresence>
                                  {isEdit && (
                                    <motion.input
                                      {...FadeInOutWIthOpacity}
                                      value={skill.percentage}

                                      name="percentage"
                                      type="text"
                                      className={` outline-none border-none text-base tracking-wide capitalize font-semibold text-txtPrimary w-full ${isEdit
                                          ? "bg-gray-200"
                                          : "bg-transparent"
                                        }`}
                                    />
                                  )}
                                </AnimatePresence>
                              </div>

                              <AnimatePresence>
                                {isEdit && (
                                  <motion.div
                                    {...FadeInOutWIthOpacity}
                                    onClick={() => removeSkill(i)}
                                    className="cursor-pointer "
                                  >
                                    <FaTrash className="text-base text-txtPrimary" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <div className="relative mt-2 w-full h-1 rounded-md bg-gray-400">
                              <div
                                className="h-full rounded-md bg-gray-600"
                                style={{
                                  width: `${skill.percentage}%`,
                                  transition: "width 0.3s ease",
                                }}
                              ></div>
                            </div>
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </div>
                  <AnimatePresence>
                    {isEdit && (
                      <div className="w-full  flex items-center justify-center py-4">
                        <motion.div
                          {...FadeInOutWIthOpacity}
                          onClick={addSkill}
                          className="cursor-pointer"
                        >
                          <FaPlus className="text-base text-txtPrimary" />
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>




                {/* Languages Section */}
                <div className="w-full">
                  <p className="uppercase text-xl tracking-wider font-cooper-bt">Tungumál</p>
                  <div className="w-full h-1 bg-yellow-900 my-3"></div>
                  <div className="w-full flex flex-wrap items-center justify-start gap-4">
                    <AnimatePresence>
                      {Languages &&
                        Languages.map((Language, i) => (
                          <motion.div
                            key={i}
                            {...opacityINOut(i)}
                            className="flex-1"
                            style={{ minWidth: 225 }}
                          >
                            <div className="w-full flex items-center justify-between">
                              <div className="flex items-center justify-center">
                                <input
                                  value={Language.title}

                                  name="title"
                                  type="text"
                                  readOnly={true}
                                  className={`outline-none border-none text-base font-cooper-bt tracking-wide capitalize font-semibold text-txtPrimary w-full ${isEdit ? "bg-gray-200" : "bg-transparent"
                                    }`}
                                />
                              </div>


                            </div>
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </div>
                </div>







              </div>



            </div>




          </div>

          <div className="flex flex-wrap items-center justify-center w-full gap-4 lg:gap-12 mb-4 mt-5">
            {/* Edit Button */}




            {remainingDays !== null && (
              <div className="text-sm text-red-500 ">

                Þú átt {remainingDays} daga eftir af áskriftinni þinni.
              </div>
            )}

            {!subscriptionUpdated && (
              <div
                className="flex items-center justify-center gap-1 px-3 py-1  rounded-md bg-red-200 cursor-pointer"
                onClick={handlePaymentAndDownload}
              >
                {isEdit ? (
                  <FaPenToSquare className="text-sm text-txtPrimary" />
                ) : (
                  <FaPencil className="text-sm text-txtPrimary" />
                )}
                <p className="text-sm text-txtPrimary font-cooper-bt">halda áfram að greiða</p>
              </div>
            )}


            <div
              className="flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
              onClick={handleIconClick} 
            >
              <BiSolidBookmarks className="text-sm text-txtPrimary" />
              <p className="text-sm text-txtPrimary font-cooper-bt">hlaða upp í ský</p>

              {/* Hidden file input for selecting PDF files */}
              <input
                type="file"
                accept=".pdf"
                ref={fileInputRefs} // Assign ref to this input
                className="hidden" // Hide the actual input element
                onChange={(event) => handleUploadPDF(event)}
              />
            </div>

            {/* Download Section */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <p className="text-sm text-txtPrimary font-cooper-bt">Sækja : </p>
              <BsFiletypePdf
                className="text-xl md:text-2xl text-txtPrimary cursor-pointer"
                onClick={generatePDF}
              />
              <BsFiletypePng
                className="text-xl md:text-2xl text-txtPrimary cursor-pointer"
                onClick={() => generateImage('png')}
              />
              <BsFiletypeJpg
                className="text-xl md:text-2xl text-txtPrimary cursor-pointer"
                onClick={() => generateImage('jpg')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;