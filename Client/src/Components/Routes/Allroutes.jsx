import {Routes,Route} from "react-router-dom";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
function Allroutes(){
    return <div>

<Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>

    
</Routes>
    </div>
}

export default Allroutes;