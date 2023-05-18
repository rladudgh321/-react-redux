import store from "../store";
export default function Header(){
    return(
        <header>
            <h1><a href="/" onClick={function(e){
                e.preventDefault();
                store.dispatch({type:'WELCOME'});
            }}>WEB</a></h1>
        </header>
    );
}