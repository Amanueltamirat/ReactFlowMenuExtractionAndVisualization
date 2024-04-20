import React, { useState } from "react";
import { toast } from "react-toastify";
import {motion, AnimatePresence} from 'framer-motion'

function MenuExtraction() {
  const [inputText, setInputText] = useState('');
  const [extractedMenuItems, setExtractedMenuItems] = useState([]);
  const [clicked, setClicked] = useState(false)

function extractMenuItems(inputText:any) {
  const regex = /^\d+:\s*.*$/gm;
  const menuItems = inputText.match(regex) || [];
 
  if(menuItems.length < 1){
    toast.error('please check you input')
  }
  return menuItems;
}
  function handleExtractButtonClick() {

    const menuItems = extractMenuItems(inputText);
    setExtractedMenuItems(menuItems);
    setClicked(true)
  }

  return (
    <div className="menu_extracter">
      <div className="upper-container">
      <textarea placeholder="Search(sample input:-1: Pizza)..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleExtractButtonClick}>Extract</button>
      </div>
      <div className="items">
        {extractedMenuItems.length > 0 ? (
          <div>
            <p>Your menu items:</p>
            <motion.div>
              <AnimatePresence>
            {extractedMenuItems.map((menuItem, index) => (
              <>
              <motion.li 
               initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
              key={index}
              >{menuItem}</motion.li>
              </>
            ))}
            </AnimatePresence>
            </motion.div>
          </div>
        ) : (
          clicked &&
          <div className="not-found">
          <p>No valid menu items found!</p>
          </div>
        
        )}
      </div>
    </div>
  );
}

export default MenuExtraction