"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var framer_motion_1 = require("framer-motion");
function MenuExtraction() {
    var _a = (0, react_1.useState)(''), inputText = _a[0], setInputText = _a[1];
    var _b = (0, react_1.useState)([]), extractedMenuItems = _b[0], setExtractedMenuItems = _b[1];
    var _c = (0, react_1.useState)(false), clicked = _c[0], setClicked = _c[1];
    function extractMenuItems(inputText) {
        var regex = /^\d+:\s*.*$/gm;
        var menuItems = inputText.match(regex) || [];
        if (menuItems.length < 1) {
            react_toastify_1.toast.error('please check you input');
        }
        return menuItems;
    }
    function handleExtractButtonClick() {
        var menuItems = extractMenuItems(inputText);
        setExtractedMenuItems(menuItems);
        setClicked(true);
    }
    return (<div className="menu_extracter">
      <div className="upper-container">
      <textarea placeholder="Search(sample input:-1: Pizza)..." value={inputText} onChange={function (e) { return setInputText(e.target.value); }}/>
      <button onClick={handleExtractButtonClick}>Extract</button>
      </div>
      <div className="items">
        {extractedMenuItems.length > 0 ? (<div>
            <p>Your menu items:</p>
            <framer_motion_1.motion.div>
              <framer_motion_1.AnimatePresence>
            {extractedMenuItems.map(function (menuItem, index) { return (<>
              <framer_motion_1.motion.li initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }} key={index}>{menuItem}</framer_motion_1.motion.li>
              </>); })}
            </framer_motion_1.AnimatePresence>
            </framer_motion_1.motion.div>
          </div>) : (clicked &&
            <div className="not-found">
          <p>No valid menu items found!</p>
          </div>)}
      </div>
    </div>);
}
exports.default = MenuExtraction;
