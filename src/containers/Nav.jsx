import { useSelector, useDispatch } from "react-redux";
import Nav from "../components/Nav";
export default function NavContainer(){
    const data = useSelector(state=>state.topics);
    const dispatch = useDispatch();
    return(
        <div>
            <Nav data={data} onClick={id=>{
                dispatch({type:'READ', id});
            }}></Nav>
        </div>
    );
}