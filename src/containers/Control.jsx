import Control from "../components/Control";
import { useSelector, useDispatch } from "react-redux";

export default function ControlContainer(){
    const id = useSelector(state=>state.id);
    const dispatch = useDispatch();
    return(
        <div>
            <Control id={id} onClick={mode=>{
                if(mode === 'DELETE_PROCESS'){
                    if(!window.confirm('really?')){
                        return;
                    }
                }
                dispatch({type:mode});
            }}></Control>
        </div>
    );
}