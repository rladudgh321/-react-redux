import { connect } from "react-redux";
import Nav from "../components/Nav";
export default connect(
    state=>{
        return {
            data:state.topics
        }
    },
    dispatch=>{
        return {
            onClick:id=>{
                dispatch({type:'READ', id});
            } 
        }
    }
)(Nav);