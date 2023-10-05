import './App.css';
import { Corporate } from './component/corporate/corporate';
import { PropertyFooterWrapper } from './component/footer/footer';

function App() {
  return (
    <>
    <div style={{display:"flex" , justifyContent:"center"}}> <Corporate/></div>
  
     <footer>
      <PropertyFooterWrapper/>
    </footer>
    </>
   
  );
}

export default App;
