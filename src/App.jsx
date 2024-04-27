import { InputNumber } from './components/inputs/number/InputNumber'
import './App.css'
import { ShowText, ShowTextGrams } from './components/text/ShowText';
import { ContextGlobalProvider } from './context/contextGlobal';




function App() {
 
  return (
    <>
    <ContextGlobalProvider>
      
      <section className=''>
      <h1>Calculadora pollos Engorde</h1>
      <InputNumber description={"0"}/>
    
    <ShowTextGrams nameMounth={"First"}/>
    <ShowTextGrams nameMounth={"Second"}/>
    <ShowTextGrams nameMounth={"Third"}/>
    <ShowText/>
      </section>
    </ContextGlobalProvider>

    </>
  )
}

export default App
