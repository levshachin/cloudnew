import { useState, useEffect } from "react";
import ServerCard from "./modules/ServerCard";

export default function ServersList(){
    const [ServerList, SetServerList] = useState([])
    useEffect(() => {
        const fetchServers = async () => {
          try {
            const response = await fetch('https://api.cloudsell.ru/servers/list');
            const data = await response.json();
            SetServerList(data);
            // setFilteredServerList(data);
          } catch (error) {
            console.error('Ошибка:', error);
          }
        };
        fetchServers();
      }, []);
    console.log(ServerList)
    return(
        <div className="ServersList">
         {ServerList.map((s)=> {return <ServerCard key={s.id} serverName={s.name} serverPrice={parseInt(s.price)} serverFeature={[s.features.cores, parseInt(s.features.core_frequency).toFixed(1) , s.features.ram, s.features.ram_type, s.features.disk, s.features.disk_type, parseInt(s.features.network_speed)]}/>})}
        </div>
    )
    }