

import EmpTable from "./EmpTable.js"
import EmpForm from "./EmpForm.js";
import EmpEdit from "./EmpEdit.js";
import EmpDetails from "./EmpDetails.js";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
function App(){
    return(
        <div>
           <Router>
            <Routes>
                <Route path="/" element={<EmpTable/>}></Route>
                <Route path="/EmpForm" element={<EmpForm/>}></Route>
                <Route path="/EmpEdit/:empid" element={<EmpEdit/>}></Route>
                <Route path="/EmpDetails/:empid" element={<EmpDetails/>}></Route>
                

                
            </Routes>
           </Router>
        </div>


    )
}
export default App;
