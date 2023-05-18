import { useState } from "react";

export default function Update(props){
    const id = props.id
    const [title,setTitle] = useState(props.title);
    const [desc,setDesc] = useState(props.desc);
    return (
        <div>
            <h2>Update</h2>
            <form action="/update_process" method="post" onSubmit={e=>{
                    e.preventDefault();
                    const id = e.target.id.value;
                    const title = e.target.title.value;
                    const desc = e.target.desc.value;
                    props.onUpdate(id,title,desc);
                }}>
                <input type="hidden" name="id" value={id}></input>
                <p><input type="text" name="title" placeholder="title" value={title} onChange={e=>{
                    setTitle(e.target.value);
                }}></input></p>
                <p><textarea name="desc" placeholder="desc" value={desc} onChange={e=>{
                    setDesc(e.target.value);
                }}></textarea></p>
                <p><input type="submit" value="Update"></input></p>
            </form>
        </div>
    );
}

