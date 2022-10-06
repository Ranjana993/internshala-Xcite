import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalDetails from "./pages/Login_Dashboard/PersonalDetails";
import Skills from "./pages/Login_Dashboard/Skills";
import WorkExperience from "./pages/Login_Dashboard/WorkExperience";
import AddInfo from "./pages/Login_Dashboard/AddInfo";
import EducationDetails from "./pages/Login_Dashboard/EducationDetails";
import Certificates from "./pages/Login_Dashboard/Certificates";
import ProfileLinks from "./pages/Login_Dashboard/ProfileLinks"
import Error from "./pages/error/Error";
import MainPage from "./pages/Home/MainPage";
import CandidateAuth from "./pages/Auth/CandidateAuth";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/candidateauth" element={<CandidateAuth />} />
          <Route path="addinfo" element={<AddInfo />}>
            <Route index element={<PersonalDetails />} />
            <Route path="education" element={<EducationDetails />} />
            <Route path="workexperience" element={<WorkExperience />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="skills" element={<Skills />} />
            <Route path="profilelinks" element={<ProfileLinks />} />
          </Route>
          <Route exact path="/" element={<MainPage />} /> 
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
