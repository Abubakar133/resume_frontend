import React, { useState, useRef, useEffect } from 'react';
import Logo from "./Logo";
import { BiMenu } from "react-icons/bi"; // Ensure this is installed if used
import { useNavigate } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { toast } from 'react-toastify';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // State to track the active button
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef]);

  
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleNavigation = (index, path) => {
    setActiveButton(index);
    navigate(path); // Navigate to the specified path
  };

    const handleLogout = () => {
     
      // Clear user ID from local storage
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      localStorage.removeItem('username');
   toast.success("Logout Sucessfully");
      // Redirect to home page
      navigate('/'); // Adjust this path based on your routing setup
    };
  return (
    <>
      <header className="hidden lg:flex w-[1300px] mx-4 lg:mx-6 flex flex-row bg-transparent border-none items-center justify-between sticky top-0 z-50 gap-5 bg-color-5 text-smi text-color-5 font-bold1">
        <div className="w-[561px] flex flex-row items-center justify-start gap-9 max-w-full mq825:gap-[18px]">
        <div className="flex flex-row items-start justify-start relative">
      <div className="absolute top-0 right-[-50px] text-orange-500 sm:right-[-100px] md:right-[-150px] lg:right-[-200px] tracking-[0.01em] leading-[22.3px] capitalize font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
    FutureResume
  </div>
        <img
          className="h-[73px] w-[102.3px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/resume-logoremovebgpreview-2@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-row items-center justify-end max-w-full">
      {/* Buttons with hover and active state */}
      {[
        { text: 'Home', path: '/' },
        { text: 'About Us', path: '/' },
        { text: 'Contact', path: '/' },
        { text: 'Cv Generator', path: '/Dashboard' },
        { text: 'Dashboard', path: '/Dashboard2' },
      ].map((item, index) => (
        <button
          key={index}
          className={`relative cursor-pointer uppercase font-bold whitespace-nowrap mx-2 bg-transparent border-none text-black focus:outline-none overflow-hidden group ${
            activeButton === index ? 'text-blue-500 after:bg-blue-500' : ''
          }`}
          onClick={() => handleNavigation(index, item.path)} // Set active button and navigate
        >
          <span className="relative z-10">{item.text}</span>
          <span
            className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transform ${
              activeButton === index ? 'scale-x-100' : 'scale-x-0'
            } group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
          ></span>
        </button>
      ))}
    </div>
        </div>
        <div className="w-[370px] flex flex-row items-center justify-between gap-5 max-w-full text-color-1">
          <button className="cursor-pointer uppercase font-medium whitespace-nowrap bg-transparent border-none text-blue-500 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-transparent after:transition-all after:duration-300 focus:after:bg-blue-500 focus:after:h-[2px]">
            Are you an owner?
          </button>
          <div className=" flex flex-row items-center justify-start gap-2.5 text-color-1">
            <a href="tel:+8819906886" className="flex items-center">
            <IoIosCall />
            </a>
            <div className="relative uppercase font-medium inline-block min-w-[103px] text-blue-500 whitespace-nowrap z-[4]">
              (+88) 1990 6886
            </div>
          </div>
          <button className="cursor-pointer bg-transparent text-blue-500 border-none" onClick={handleLogout}>
          <RiLogoutCircleRFill size={30}/>
          </button>
        </div>
      </header>
     {/* Mobile Header */}
<header className="lg:hidden fixed top-0 left-0 w-full bg-transparent border-none z-50 ">
  <div className="flex items-center justify-between p-4">
  <div className="flex flex-row items-start justify-start relative">
      <div className="absolute top-0 right-[-50px] text-orange-500 sm:right-[-100px] md:right-[-150px] lg:right-[-200px] tracking-[0.01em] leading-[22.3px] capitalize font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
    FutureResume
  </div>
        <img
          className="h-[73px] w-[102.3px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/resume-logoremovebgpreview-2@2x.png"
        />
      </div>
    <button className="text-black bg-transparent" onClick={toggleSidebar}>
      <BiMenu className="w-6 h-6" />
    </button>
  </div>

  {/* Sidebar */}
  <div ref={sidebarRef} className={`fixed top-0 right-0 w-64 h-full bg-gray-250 p-6 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
    {/* Backdrop Overlay */}
    {isSidebarOpen && (
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={toggleSidebar}
      ></div>
    )}
    <div className="flex flex-col items-center justify-center h-full text-white">
      <button className="relative cursor-pointer uppercase font-bold whitespace-nowrap mb-4 bg-transparent border-none text-white focus:outline-none overflow-hidden group"  onClick={() => navigate('/')}>
        <span className="relative z-10"  >Home</span>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </button>

      <button className="relative cursor-pointer uppercase font-bold whitespace-nowrap mb-4 bg-transparent border-none text-white focus:outline-none overflow-hidden group" onClick={() => navigate('/')}>
        <span className="relative z-10" >About Us</span>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </button>
      <button className="relative cursor-pointer uppercase font-bold whitespace-nowrap mb-4 bg-transparent border-none text-white focus:outline-none overflow-hidden group" onClick={() => navigate('/')}>
        <span className="relative z-10">Contact</span>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </button>

      <button className="relative cursor-pointer uppercase font-bold whitespace-nowrap mb-4 bg-transparent border-none text-white focus:outline-none overflow-hidden group" onClick={() =>navigate('/Dashboard')}>
        <span className="relative z-10">CV Generator</span>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </button>
      
      <button className="cursor-pointer uppercase font-medium whitespace-nowrap bg-transparent border-none text-blue-500 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-transparent after:transition-all after:duration-300 focus:after:bg-blue-500 focus:after:h-[2px] mb-4">
        Are you an owner?
      </button>
      <div className="flex flex-row items-center justify-center gap-2.5 text-color-5 mb-4">
        <a href="tel:+8819906886" className="flex items-center">
          <img
            className="h-5 w-5 relative min-h-[20px] z-[4] cursor-pointer"
            loading="lazy"
            alt="Phone Icon"
            src="/vector-2.svg"
          />
        </a>
        <div className="relative uppercase font-medium inline-block min-w-[103px] text-blue-500  z-[4]">
          (+88) 1990 6886
        </div>
      </div>
   
      <button className="relative cursor-pointer uppercase font-bold whitespace-nowrap mb-4 bg-transparent border-none text-white focus:outline-none overflow-hidden group" onClick={() => handleLogout()} >
      <RiLogoutCircleRFill size={40} color="orange"/>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </button>
    </div>
  </div>
</header>

    </>
  );
}

export default Header;
