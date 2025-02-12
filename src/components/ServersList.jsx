import { useState, useEffect } from "react";
import ServerCard from "./modules/ServerCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function ServersList({ parameters, ...props }) {
    const [ServerList, SetServerList] = useState([])
    console.log('https://api.cloudsell.ru/servers/list?' + parameters)
    useEffect(() => {
        const fetchServers = async () => {
            try {
                const response = await fetch('https://api.cloudsell.ru/pricing-plans/list?' + parameters);
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
            <TransitionGroup>
                {ServerList.length > 0 ? ServerList.map((s) => { return <CSSTransition key={s.id} timeout={500} classNames="card"><ServerCard serverName={s.name} serverPrice={parseInt(s.price)} serverFeature={[s.features.cores, parseFloat(s.features.core_frequency).toFixed(1), s.features.ram, s.features.ram_type, s.features.disk, s.features.disk_type, parseInt(s.features.network_speed)]} /></CSSTransition> }) : <p style={{ justifySelf: "center", alignSelf: 'center' }}>Сервера не найдены!</p>}
            </TransitionGroup>
        </div>

    )
}