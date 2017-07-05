import React from "react";
import * as Redux from "react-redux";
import * as actions from "actions";

export var Login = React.createClass({
    onLogin() {
        var {dispatch} = this.props;
        dispatch(actions.startLogin());
    },
    render() {
        return(
            <div>
                <h1 className="page-title">What-to-do</h1>
                <div className="row">
                    <div className="column small-11 medium-6 small-centered">
                        <div className="callout callout-auth">
                            <h3>Login</h3>
                            <p>login with GitHub Account</p>
                            <button className="button" onClick={this.onLogin}>Login with GitHub</button>
                        </div>
                    </div>
                </div>
            </div>      
        );
    }
});

export default Redux.connect() (Login);