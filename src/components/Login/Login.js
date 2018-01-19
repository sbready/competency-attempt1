import React, { Component } from 'react'
import './Login.css'

class Login extends Component {

    constructor( props ) {
        super( props )

        this.state = {

        }
        
        this.handleClick = this.handleClick.bind(this)          //37C
    }

    handleClick = () => {                                       //36J
        console.log('button clicked')
    }


    render() {
        return(
            <div className="Login">
                <button className="Login-btn" onClick={ e => this.handleClick( e ) }>Login</button>  {/* 37D */}
            </div>
        )
    }
}

export default Login;

