import React from "react";
  
function Header( {modeNow, onDarkModeClick} ){
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>{modeNow ? "Dark" : "Light"} Mode</button>
      </header>
    )
}

export default Header;