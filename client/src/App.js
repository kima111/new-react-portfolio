import React from "react";
import MainPage from "./components/main";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 


library.add(farUser, faUserCog, faGithub)

function App() {
  return (
  <div>

    <MainPage />
  </div>
  );
}

export default App;
