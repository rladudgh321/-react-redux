export default function Control(props){
    let context = null;
    if(props.id !== null){
        context = <div>
            <li><a href="/update" onClick={function(e){
                e.preventDefault();
                props.onClick('UPDATE');
            }}>Update</a></li>
            <li><input type="button" value="Delete" onClick={function(){
                props.onClick('DELETE_PROCESS');
            }}/></li>
        </div>
    }
    return (
        <div>
            <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    props.onClick('CREATE');
                }}>Create</a></li>
                {context}
            </ul>
        </div>
    );
}

