import { useState } from 'react';
import ServersList from './ServersList';
import SideBar from './SideBar';
import SortBar from './SortBar';

export default function FalseComponent(){
    const [parameter, setParameters] = useState({
            cores_min: '',
            cores_max: '',
            core_frequency_min: '',
            core_frequency_max: '',
            ram_min: '',
            ram_max: '',
            ram_type: '',
            disk_min: '',
            disk_max: '',
            disk_type: '',
            network_speed_min: '',
            network_limit_min: '',
            location: '',
            price_min: '',
            price_max: '',
            server_type: '',
            billing_cycle: '',
            min_rating: '',
            provider_id: '',
            sort_by: 'price',
            sort_order: '',
            skip: '',
            limit: ''
        });
    const createQueryString = (params) => {
            const searchParams = new URLSearchParams();
            for (const [key, value] of Object.entries(params)) {
                if (value !== '') {
                    searchParams.append(key, value);
                }
            }
            return searchParams.toString();
        };
    return(
        <>
            <SideBar parameter={parameter} setParameters={setParameters}/>
            <SortBar parameter={parameter} setParameters={setParameters}/>
            <ServersList parameters={createQueryString(parameter)}/>        
        </>
    )
}