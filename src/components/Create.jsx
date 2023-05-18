export default function Create(props){
    return (
        <div>
            <h2>Create</h2>
            <form action="/create_process" method="post" onSubmit={
                function(e){
                    e.preventDefault();
                    const title = e.target.title.value;
                    const desc = e.target.desc.value;
                    props.onCreate(title,desc)
                }
            }>
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea name="desc" placeholder="desc"></textarea></p>
                <p><input type="submit" value="Create"></input></p>
            </form>
        </div>
    );
}

