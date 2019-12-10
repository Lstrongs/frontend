import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage'
import LoginPage from './Login/login'
import RegisterPage from './Register/register'
import FoundPage from './Found/found'
import ActPage from './Act/act'
import ComedyPage from './Comedy/comedy'
import LovePage from './Love/love';
import PlayPage from './Play/play';
import VideoPage from './Video/video';
import {BrowserRouter,Route,Switch,Redirect,withRouter} from 'react-router-dom'

class IndexPage extends React.Component{
    render(){

        return(
            <div>
               <BrowserRouter>
               <Switch>
                   <Route path="/homepage" component={HomePage}></Route>
                   <Route path="/login" component={LoginPage} history={this.props.history}></Route>
                   <Route path="/register" component={RegisterPage}></Route>
                   <Route path="/found" component={FoundPage}></Route>
                   <Route path="/act" component={ActPage}></Route>
                   <Route path="/comedy" component={ComedyPage}></Route>
                   <Route path="/love" component={LovePage}></Route>
                   <Route path="/play" component={PlayPage}></Route>
                   <Route path="/video" component={VideoPage}></Route>
                   <Redirect to="/homepage"></Redirect>
               </Switch>
               </BrowserRouter>
            </div>
        )
    }
}
export default withRouter(IndexPage)
ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
