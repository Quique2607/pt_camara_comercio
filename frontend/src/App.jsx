import './App.css'
import Cards from './components/cards'
import List from './components/List'
import VideoPlayer from './components/videoPlayer'

function App() {
  

  return (
    <>
      <div className='bg-gradient-to-br from-sky-200 to-lime-100 p-10'>
        <VideoPlayer/>
        <Cards/>
        <List/>
      </div>
    </>
  )
}

export default App
