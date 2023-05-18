export default function Nav(props) {
    const list = [];
    for(let i=0;i<props.data.length;i++){
        const d = props.data[i];
        list.push(<li key={d.id}><a href={'/read/'+d.id} data-id={d.id}
        onClick={function(e){
            e.preventDefault();
            props.onClick(Number(e.target.dataset.id));
        }}
        >{d.title}</a></li>);
    }
    return (
        <nav>
            <ol>
                {list}
            </ol>
        </nav>
    );
}

