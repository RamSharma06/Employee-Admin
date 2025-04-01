import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Header = ({ changeUser }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser'); 
    setUserData(null);
    changeUser(''); 
  };


  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> 
        <span className="text-3xl font-semibold">{!(userData.employees.firstName)?"Admin":userData.employees.FirstName}👋</span>
      </h1>
      <button 
        onClick={logOutUser} 
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
