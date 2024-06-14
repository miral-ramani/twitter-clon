import React from "react";
// import sign from '
import { Box } from '@mui/material'
import Login from './container/loginstyle'
import SignUp from './container/signup/index'
// import ProfileHeader from './component/signup/index'
import sin from "./sin.module.css"
import LoginPro from './content/profile/index'
import Sidebar from "./container/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Side from "./container/Side/side";


const App = () => {
  return (
    <>
      <div className={sin.app}>

        <div className={sin.main}>
          <Box className={sin.box}>
            <BrowserRouter>

              <Routes>
                <Route path='/login' element={
                  <Login className={sin.log}>
                    <LoginPro />
                  </Login>
                } />
                <Route path='/' element={<Login className={sin.log}>
                  <SignUp /></Login>} />
                <Route path='/sidebar' element={<Sidebar />} />
              </Routes>
            </BrowserRouter>
          </Box>
        </div>
      </div>
    </>
  )
}


export default App;


// import React from "react";
// import Sidebar from "./container/Sidebar/Sidebar";
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// // import App from "./App";
// import Side from "./side";

// function App() {
//   return (
//     // <div className="row-nospace">
//     //   <Sidebar />
//     // </div>

//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/side' element={<Side />} />
//           <Route path='/sidebar' element={<Sidebar />} />

//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App;
