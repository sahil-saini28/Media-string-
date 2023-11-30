import "./App.css";
import NavBar from "./Component/NavBar";

import Error from "./Component/Error";

import Newws from "./Component/Newws";
import { BrowserRouter as Switch ,Route,Routes } from "react-router-dom";
function App() {

  const apikey = process.env.REACT_APP_key;
  return (
    <>
     
    <Switch basename="Media-string-" >
    
      <NavBar ></NavBar>
        <Routes>
          
        <Route exact path='/' element={<Newws skey={apikey}  key="11" catagory="general" ></Newws>}></Route>
          <Route exact path='/business'  element={<Newws skey={apikey} key="12" catagory="business" ></Newws>}></Route>
          <Route exact path='/entertainment' element={<Newws skey={apikey} key="32" catagory="entertainment" ></Newws>}></Route>
          <Route exact path='/general' element={<Newws skey={apikey} key="13" catagory="general" ></Newws>}></Route>
          <Route exact path='/health' element={<Newws skey={apikey} key="14" catagory="health" ></Newws>}></Route>
          <Route exact path='/science' element={<Newws skey={apikey} key="45" catagory="science" ></Newws>}></Route>
          <Route exact path='/sports' element={<Newws skey={apikey} key="89" catagory="sports" ></Newws>}></Route>
          <Route exact path='/technology' element={<Newws skey={apikey} key="85" catagory="technology" ></Newws>}></Route>
          <Route exact path='/*' element={<Error key="78"></Error>}></Route>
        </Routes>
      </Switch>
    </>
  );
}

export default App;
