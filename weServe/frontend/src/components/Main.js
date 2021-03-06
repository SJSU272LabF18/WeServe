import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import homePage from './homePage';
import readMore from './readMore';
import aboutUs from './aboutUs';
import userInfo from './userInfo';
import ngoInfo from './ngoInfo';
import login from './login';
import loginNGO from './loginNGO';
import signUp from './signUp';
import beaVolunteer from './beaVolunteer'
import findaVolunteer from './findaVolunteer'
import volunteerDashboard from './volunteerDashboard'
import ngoDashboard from './ngoDashboard'
import signUpVolunteer from './signUpVolunteer'


class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={homePage} />
                <Route exact path="/homePage" component={homePage} />
                <Route exact path="/readMore" component={readMore} />
                <Route exact path="/aboutUs" component={aboutUs} />
                <Route exact path="/userInfo" component={userInfo} />
                <Route exact path="/ngoInfo" component={ngoInfo} />
                <Route exact path="/login" component={login} />
                <Route exact path="/loginNGO" component={loginNGO} />
                <Route exact path="/signUp" component={signUp} />
                <Route exact path="/beaVolunteer" component={beaVolunteer} />
                <Route exact path="/findaVolunteer" component={findaVolunteer} />
                <Route exact path="/volunteerDashboard" component={volunteerDashboard} />
                <Route exact path="/ngoDashboard" component={ngoDashboard} />
                <Route exact path="/signUpVolunteer" component={signUpVolunteer} />

            </div>
        )
    }
}
//Export The Main Component
export default Main;