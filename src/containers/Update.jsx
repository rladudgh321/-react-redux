import { connect } from "react-redux";
import Update from "../components/Update";

export default connect(
    state=>{
        let id,title, desc;
        for(let i=0;i<state.topics.length;i++){
            const d = state.topics[i];
            if(d.id === state.id){
                id = d.id;
                title = d.title;
                desc = d.desc;
                break;
            }
        }
        return {
            id,title,desc
        }
    },
    dispatch=>{
        return {
            onUpdate : (id,title,desc)=>{
                dispatch({type:'UPDATE_PROCESS', id,title,desc});
            }
        }
    }
)(Update);