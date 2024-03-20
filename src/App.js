import { BrowserRouter as Router, Route, Redirect,Switch,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import GetStarted from "./Pages/Getstared/index"
import MainNavigation from "./Shared/Navigation/MainNavigation"
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile/index';
import Favorites from './Pages/Favorites';
import VideoOnDemand from './Pages/VideoOnDemand';
import LiveVideos from './Pages/Live';
import { useEffect } from 'react';


const App = () => {

  return <Router>
     
          <main>
        <Switch>
            <Route exact path="/">
            <MainNavigation login={true} />
              <GetStarted />
            </Route>
            <Route exact path="/login">
            <MainNavigation login={false}/>
              <Login/>
            </Route>
            <Route exact path="/dashboard">
            <MainNavigation login={true}/>
              <Dashboard/>
            </Route>
            <Route exact path="/profile">
            <MainNavigation login={true}/>
              <Profile/>
            </Route>
            <Route exact path="/favorites">
            <MainNavigation login={true}/>
              <Favorites/>
            </Route>
            <Route exact path="/video-on-demand">
            <MainNavigation login={true}/>
              <VideoOnDemand/>
            </Route>
            <Route exact path="/live">
            <MainNavigation login={true}/>
              <LiveVideos/>
            </Route>
            <Redirect to="/" />
        </Switch>
        </main>
        </Router>;
}

export default App;
