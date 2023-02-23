import {Routes,Route} from "react-router-dom";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import SidebarWithHeader from "../Admin/sidebar";
function Allroutes(){
    return <div>

<Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/admin" element={<SidebarWithHeader/>}/>

    
</Routes>
    </div>
}

export default Allroutes;