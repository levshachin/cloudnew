export default function ServerCard({serverFeature, ...props}){
    return(
        <div className="ServerCard">
            <p>{props.serverName}</p>
            <p>{props.serverPrice} руб</p>
        </div>
    )
    }