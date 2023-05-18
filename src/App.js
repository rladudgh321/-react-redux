import Header from "./components/Header";
import Nav from "./containers/Nav";
import Article from "./containers/Article";
import Control from "./containers/Control";
import Create from "./containers/Create";
import Update from "./containers/Update";
import { useSelector } from "react-redux";
export default function App(){
    const mode = useSelector(state=>state.mode);
    let context = null;
    if(mode === 'WELCOME'){
        context = <Article></Article>
    } else if(mode === 'READ'){
        context = <Article></Article>
    } else if(mode === 'CREATE'){
        context = <Create></Create>
    } else if(mode === 'UPDATE'){
        context = <Update></Update>
    }
    return(
        <div>
            <Header></Header>
            <Nav></Nav>
            <Control></Control>
            {context}
        </div>
    );
}