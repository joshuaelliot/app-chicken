import { InputNumber } from './components/inputs/number/InputNumber'
import './App.css'
import { ShowText } from './components/text/ShowText';
import { ContextGlobalProvider } from './context/contextGlobal';




function App() {
 
  return (
    <>
    <ContextGlobalProvider>
    <InputNumber description={"cantidad Pollos"}/>
    <ShowText/>
    </ContextGlobalProvider>

    </>
  )
}

export default App
