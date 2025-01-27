import { useState, useEffect } from "react";
import ServerCard from "./modules/ServerCard";

export default function ServersList({parameters, ...props}) {
    const [ServerList, SetServerList] = useState([])
    console.log('https://api.cloudsell.ru/servers/list?' + parameters)
    useEffect(() => {
        const fetchServers = async () => {
            try {
                const response = await fetch('https://api.cloudsell.ru/servers/list?' + parameters);
                const data = await response.json();
                SetServerList(data);
                // setFilteredServerList(data);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };
        fetchServers();
    }, [parameters]);
    console.log(ServerList, ServerList.length)
    return (
        <div className="ServersList">
            {ServerList.length != 0 ? ServerList.map((s) => { return <ServerCard key={s.id} serverName={s.name} serverPrice={parseInt(s.price)} serverFeature={[s.features.cores, parseFloat(s.features.core_frequency).toFixed(1), s.features.ram, s.features.ram_type, s.features.disk, s.features.disk_type, parseInt(s.features.network_speed)]} /> }) : <p style={{justifySelf: "center", alignSelf:'center'}}>Сервера не найдены!</p>}
        </div>
    )
}