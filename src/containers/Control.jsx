import Control from "../components/Control";
import { connect } from "react-redux";

export default connect(
    state=>{
        return {
            id : state.id
        }
    },
    dispatch=>{
        return {
            onClick : mode =>{
                if(mode === 'DELETE_PROCESS'){
                    if(!window.confirm('really?')){
                        return;
                    }
                }
                dispatch({type:mode});
            }
        }
    }
)(Control);
