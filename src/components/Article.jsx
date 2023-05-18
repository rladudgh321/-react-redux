export default function Article(props){
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </article>
    );
}

