import { useSelector, useDispatch } from "react-redux";
import Update from "../components/Update";

export default function UpdateContainer(){
    const id = useSelector(state=>state.id);
    const topics = useSelector(state=>state.topics);
    const dispatch = useDispatch();
    let title, desc;
    for(let i=0;i<topics.length;i++){
        const d = topics[i];
        if(d.id === id){
            title = d.title;
            desc = d.desc;
            break;
        }
    }
    return (
        <div>
            <Update id={id} title={title} desc={desc} onUpdate={(id,title,desc)=>{
                dispatch({type:'UPDATE_PROCESS', id,title,desc});
            }}></Update>
        </div>
    );
}