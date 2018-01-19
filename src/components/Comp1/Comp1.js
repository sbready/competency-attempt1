import React, { Component } from 'react';
import './Comp1.css'
import { fetchinfodata } from './../../ducks/reducer'
import { connect } from 'react-redux'

class Comp1 extends Component {
    
    constructor( props ) {
        super( props )

        this.state = {
            info: ''
        }
    }

    componentDidMount() {                       //39C 44E
        this.props.infoData()                   //39B - component did mount fires and starts to pull information from redux.  the render starts and completes before the information is finished moving from redux to this component.  with componentdidmount, the object/array will appear in the console, but due to the lack of finishing before the render completes, it will be empty.  componenetwillreceiveprops helps fix this issue.  When the props from redux finish being brought in, re-render will occur and display both the original object/array before re-render as well as the object/array that has the props and data filled. 
    }

    componentWillReceiveProps( props ) {        //39D
        this.setState({                         //36D
            info: props.infoData                //36E
        })
    }

    render() {
        return(
            <div className="Comp1">
            
            </div>
        )
    }
}

function mapStateToProps( state ) {  //43H
    return { info: state.infoData }     //43G
  }
  
  export default connect( mapStateToProps, { fetchinfodata } )( Comp1 )  //43C  43J