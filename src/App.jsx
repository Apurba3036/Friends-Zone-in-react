
import './App.css'
import Header from './Component/Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import { FadeLoader, HashLoader } from 'react-spinners';

function App() {

  const navigation=useNavigation();
  return (
    <>
      <Header></Header>
    <div className='spinner'>{navigation.state=='loading'?<HashLoader  speedMultiplier={3} margin={6}
    color="#36d7b7" />:''}</div>
      <Outlet></Outlet>
    </>
  )
}

export default App
