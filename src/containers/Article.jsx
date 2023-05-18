import { useSelector } from "react-redux";
import Article from "../components/Article";
export default function ArticleContainer(){
    const mode = useSelector(state=>state.mode);
    const welcome = useSelector(state=>state.welcome);
    const topics = useSelector(state=>state.topics);
    const id = useSelector(state=>state.id);
    let title,desc;
    if(mode === 'WELCOME'){
        title = welcome.title;
        desc = welcome.desc;
    } else {
        for(let i=0;i<topics.length;i++){
            const d = topics[i];
            if(d.id === id){
                title = d.title;
                desc = d.desc;
                break;
            } 
        }
    }
    return (
        <div>
            <Article title={title} desc={desc}></Article>
        </div>
    );
}