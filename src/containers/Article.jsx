import { connect } from "react-redux";
import Article from "../components/Article";
export default connect(
    state=>{
        let title,desc;
        if(state.mode === 'WELCOME'){
            title = state.welcome.title;
            desc = state.welcome.desc;
        } else {
            for(let i=0;i<state.topics.length;i++){
                const d = state.topics[i];
                if(d.id === state.id){
                    title = d.title;
                    desc = d.desc;
                    break;
                } 
            }
        }
        return {
            title,desc
        }
    }
)(Article);