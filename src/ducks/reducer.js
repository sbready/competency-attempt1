import axios from 'axios';

const initialState = {
    
    infoData: ''

}

const FETCH_INFO = 'FETCH_INFO'                         //43E (payload information referencing lines 15 & 16)

export function fetchinfodata( data ) {                 //43F
    let promise = axios.get( '/api/infocatch', data )   //44C
    .then( res => res.data )                            //44D
    return {
        type: FETCH_INFO,
        payload: promise
    }
}


export default function reducer ( state = initialState, action) {  //43D
    switch ( action.type ) {
        case FETCH_INFO + '_FULFILLED':                            //43K
            return Object.assign( {}, state, { infoData: action.payload } )
        default: 
            return state;
    }
}