import './App.css';
import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "./components/Theme";
import { GlobalStyles } from './components/Global';
import Toggle from './components/Toggle';
import Search from './components/Search';


function App() {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    if(theme === "light"){
      setTheme('dark')
    }else{
      setTheme('light');
    }
  }


  return (
    <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="wrapper">
        <div className="header">
          <div className="title">
            <h1>Timezone Converter</h1>
            <p className="sub">
                Search to add cities & Drag time to convert
            </p>
          </div>
          <div className="toggle">
            <Toggle toggleTheme={toggleTheme} theme={theme}/>
          </div>
        </div>
        <Search />
      </div>
    </ThemeProvider>
   
  );
}

export default App;
