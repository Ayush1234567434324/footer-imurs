import './App.css';
import { Corporate } from './component/corporate/corporate';
import { PropertyFooterWrapper } from './component/footer/footer';
import { NavbarLanding } from './component/navbar/navbar';
import Video from './component/video/video';

function App() {
  return (
    <>
    <NavbarLanding/>
    <Video/>
    <div style={{display:"flex" , justifyContent:"center"}}> <Corporate/></div>
  
     <footer>
      <PropertyFooterWrapper/>
    </footer>
    </>
   
  );
}

export default App;
