

import {Routes, Route} from "react-router-dom"
import Product from "./pages/Product"

import Services from "./pages/Services"
import Parent from "./pages/Parent"
import Attendence from "./pages/Attendence"
import Help from "./pages/Helpe"
import Dashboard from "./pages/Dashboard"
import Sidenav from "./Componant/Sidenav"

 function App(){
    return  <Sidenav>
    <Routes>
                <Route path="/" element={<Dashboard/>} />

        <Route path="/Product" element={<Product />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Parent" element={<Parent/>} />
        <Route path="/Attendence" element={<Attendence/>} />
        <Route path="/Help" element={<Help/>} />


    </Routes>
    /</Sidenav>
 }

 export default App