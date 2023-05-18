import { useDispatch } from "react-redux";
import Create from "../components/Create";

export default function CreateContainer(){
    const dispatch = useDispatch();
    return (
        <div>
            <Create onCreate={(title,desc)=>{
                dispatch({type:'CREATE_PROCESS', title,desc});
            }}></Create>
        </div>
    );
}