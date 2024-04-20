import React, { useState } from "react";
import { toast } from "react-toastify";
import LoadingSkeleton from "./LoadingSkeleton.tsx";
// import 'react-toastify/dist/ReactToastify.css';
// import { ChakraProvider } from '@chakra-ui/react';

function MenuExtraction() {
  const [inputText, setInputText] = useState('');
  const [extractedMenuItems, setExtractedMenuItems] = useState([]);
  const [loading, setLoading] = useState(false)
//  <ToastContainer position="bottom-center" limit={1} />

function extractMenuItems(inputText:any) {
  setLoading(true)
  const regex = /^\d+:\s*.*$/gm;
// const regex = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/

  const menuItems = inputText.match(regex) || [];
 
  // if(inputText.length < 5){
  //   alert('write atleast five charactes')
  // }
setLoading(false)
// return []
  return menuItems;
}


  function handleExtractButtonClick() {
    const menuItems = extractMenuItems(inputText);
    setExtractedMenuItems(menuItems);
  }

  return (
    <div className="menu_extracter">
      <div className="upper-container">
      <textarea placeholder="Search..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleExtractButtonClick}>{loading? <LoadingSkeleton/>:'Extract'}</button>
      </div>
      <div className="items">
        {extractedMenuItems.length > 0 ? (
          <div>
            {extractedMenuItems.map((menuItem, index) => (
              <>
              <li key={index}>{menuItem}</li>
              </>
            ))}
          </div>
        ) : (
          <>
          <p>No valid menu items found</p>
          </>
        )}
      </div>
    </div>
  );
}

export default MenuExtraction