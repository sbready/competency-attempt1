import React, { Component } from 'react';
import './Header.css';
// import { connect } from 'react-redux'
// import { fetchinfodata } from './../../ducks/reducer'

class Header extends Component {
                                        
    render() {                                  //38D
        return(
            <div className="Header">
                <h1>Hello World: My name is</h1>
            </div>
        )
    }
}

export default Header
// function mapStateToProps( state ) {  
//     return { state }
//   }
  
//   export default connect( mapStateToProps, { fetchinfodata } )( Header )