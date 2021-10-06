import { Nav } from './components/Nav/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Layout/Home'
import { Perfil } from './Layout/Perfil'
import { Chat } from './Layout/Chat'

function App () {
  return (
    <div className='App'>
      <Router>
        <div className='app'>
          <Nav />
          <Switch>
            <Route exact path='/login'></Route>
            <Route exact path='/perfil'>
              <Perfil />
            </Route>
            <Route exact path='/chat'>
              <Chat />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
