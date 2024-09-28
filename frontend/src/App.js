import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reveal from './Components/Reveal.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Container/Home/index.jsx';
import Branch from './Container/Branch/index.jsx';
import Year from './Container/Year/index.jsx';
import Data from './Container/Data/index.jsx';
import Quantums from './Container/Quantums/index.jsx';

function App() {
  return (
    <>
      <div className="App">
        <h1 className='header_heading px-2'>AKTU MANIA</h1>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2508 48"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5"
          }}
        >
          <g transform="matrix(1,0,0,1,-18.9044,-147.632)">
            <path
              d="M24.216,180.969C29.964,181.282 37.31,197.287 107.847,185.531C158.457,177.096 525.881,190.859 895.499,170.325C1101.46,158.883 1710.26,200.044 2122.59,156.64C2259.13,142.267 2492.51,175.439 2520.98,161.202"
              style={{
                fill: "none",
                stroke: "black",
                strokeWidth: 7,
                strokeDasharray: "2500.38",
                strokeDashoffset: 0
              }}
            />
          </g>
        </svg>

        <div className='px-2 fs-3 fw-bold'>Get All The Resources Here : </div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2519 30"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5"
          }}
        >
          <g transform="matrix(1,0,0,1,-23.9807,-84.3202)">
            <path
              d="M29.292,107.219C58.362,115.524 1047.31,84.963 1308.84,105.081C1360.58,109.061 2387.73,74.621 2537.08,97.598"
              style={{
                fill: "none",
                stroke: "black",
                strokeWidth: 7,
                strokeDasharray: "2508.47",
                strokeDashoffset: 0
              }}
            />
          </g>
        </svg>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/branch/:courseId' element={<Branch/>}/>
        <Route path='/year/:courseId/:branchId' element={<Year/>}/>
        <Route path='/data/:courseId/:branchId/:yearId' element={<Data/>}/>
        <Route path='/quantums/:courseId/:branchId/:yearId' element={<Quantums/>}/>
      </Routes>

      {/* FOR CARD NOTES */}
      {/* <div className='w-100 mx-2 my-3 d-flex justify-content-around gap-3 flex-wrap'>
        
      </div> */}
    </>
  );
}

export default App;
