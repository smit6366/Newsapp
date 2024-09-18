// import logo from './logo.svg';
import './App.css';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import React, {useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress,setProgress] = useState(10)

    return (
      <div >
        <Router>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
     
      />
        <Routes>
        <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={6} country="us" category="business"/>}></Route>
        <Route exact path='/entertainment'element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={6} country="us" category="entertainment"/>}></Route>
        <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={6} country="us" category="general"/>}></Route>
        <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={6} country="us" category="health"/>}></Route>
        <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey}  key="science"pageSize={6} country="us" category="science"/>}></Route>
        <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={6} country="us" category="sports"/>}></Route>
        <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={6} country="us" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  
}








// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       Welcome to my app
//       {/* <Header/> */}
//     </div>
//   );
// }

export default App;
