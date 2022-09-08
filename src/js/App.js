import React from "react";
import '../css/App.css';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Partners from "../components/header/headerItems/partners/partners";
import SpecialProjects from "../components/header/headerItems/specialProjects/specialProjects";
import Organizers from "../components/header/headerItems/organizers/organizers";
import Poster from "../components/header/headerItems/poster/poster";
import Content from "../components/header/headerItems/stock/content";

const App = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <Header/>
                <div className="main__app">
                    <Routes>
                        <Route path='/react-task' element={<Content/>}/>}/>;
                        <Route path='/Poster' element={<Poster/>}/>;
                        <Route path='/Organizers' element={<Organizers/>}/>;
                        <Route path='/SpecialProjects' element={<SpecialProjects/>}/>;
                        <Route path='/Partners' element={<Partners/>}/>;
                    </Routes>
                </div>
                <Footer/>

            </div>
        </BrowserRouter>
    );
}

export default App;
