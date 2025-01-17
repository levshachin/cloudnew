// import styles from './ServerCard.module.css'
export default function ServerCard({serverFeature, ...props}){
    return(
        <div className="ServerCard">
            <div className="serverInfo">
            <span className="servName">{props.serverName}, {serverFeature[1]} ГГц</span>
            <span className="servCores">{serverFeature[0]} vCores</span>
            <span className="servRam">{serverFeature[2]/1024} Гб DDR4</span>
            <span className="servMem">{serverFeature[4]/1024} Гб NVME</span>
            </div>
            <button className="createButton">Создать</button>
            <span className="price">{props.serverPrice} ₽/мес</span>
        </div>
    )
    }