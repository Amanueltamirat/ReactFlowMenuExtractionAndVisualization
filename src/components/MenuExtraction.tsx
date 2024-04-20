import { useState } from "react";
import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { ChakraProvider } from '@chakra-ui/react';

function MenuExtraction() {
  const [inputText, setInputText] = useState('');
  const [extractedMenuItems, setExtractedMenuItems] = useState([]);
//  <ToastContainer position="bottom-center" limit={1} />

function extractMenuItems(inputText:any) {
//   const regex = /\b\d+\.\s+.*?\b/g;
const regex = /[am]/g
  const menuItems = inputText.match(regex) || [];
console.log(menuItems)
  return menuItems;
}


  function handleExtractButtonClick() {
    const menuItems = extractMenuItems(inputText);
    setExtractedMenuItems(menuItems);
  }

  return (
    <div className="menu_extracter">
      <div className="upper-container">
      <textarea placeholder="what you are searching for?" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleExtractButtonClick}>Extract</button>
      </div>
      <div className="items">
        {extractedMenuItems.length > 0 ? (
          <div>
            {extractedMenuItems.map((menuItem, index) => (
              // <li key={index}></li>
              <>
              {toast(menuItem)}
              </>
            ))}
          </div>
        ) : (
          <p>No valid menu items found</p>
        )}
      </div>
    </div>
  );
}

export default MenuExtraction