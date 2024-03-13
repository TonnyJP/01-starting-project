export function CoreConcept(props){
    return <li>
        <img src={props.image.src} alt={props.image.alt}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>
}