
export default function SideBar({parameter, setParameters, ...props}){
    
    
    const handleChange = (e, field) => {
        setParameters({
            ...parameter,
            [field]: e.target.value
        });
    };

    return (
        <div className="SideBar">
            <div className="parametr1">
                <div className="nameCriteria">Ядра</div>
                <div className="scaler">
                    <div>От</div>
                    <input type="text" value={parameter.cores_min} onChange={(e) => handleChange(e, 'cores_min')} />
                    <div>До</div>
                    <input type="text" value={parameter.cores_max} onChange={(e) => handleChange(e, 'cores_max')} />
                </div>
            </div>
            <div className="parametr2">
                <div className="nameCriteria">Частота</div>
                <div className="scaler">
                    <div>От</div>
                    <input type="text" value={parameter.core_frequency_min} onChange={(e) => handleChange(e, 'core_frequency_min')} />
                    <div>До</div>
                    <input type="text" value={parameter.core_frequency_max} onChange={(e) => handleChange(e, 'core_frequency_max')} />
                </div>
            </div>
            <div className="parametr3">
                <div className="nameCriteria">Оперативная память</div>
                <div className="scaler">
                    <div>От</div>
                    <input type="text" value={parameter.ram_min} onChange={(e) => handleChange(e, 'ram_min')} />
                    <div>До</div>
                    <input type="text" value={parameter.ram_max} onChange={(e) => handleChange(e, 'ram_max')} />
                </div>
            </div>
            <div className="parametr4">
                <div className="nameCriteria">Тип оперативной памяти</div>
                <div className="scaler">
                    <select value={parameter.ram_type} onChange={(e) => handleChange(e, 'ram_type')}>
                        <option value="">Выберите тип</option>
                        <option value="DDR3">DDR3</option>
                        <option value="DDR4">DDR4</option>
                        <option value="DDR5">DDR5</option>
                    </select>
                </div>
            </div>
            <div className="parametr5">
                <div className="nameCriteria">Объём накопителя</div>
                <div className="scaler">
                    <div>От</div>
                    <input type="text" value={parameter.disk_min} onChange={(e) => handleChange(e, 'disk_min')} />
                    <div>До</div>
                    <input type="text" value={parameter.disk_max} onChange={(e) => handleChange(e, 'disk_max')} />
                </div>
            </div>
            <div className="parametr6">
                <div className="nameCriteria">Тип накопителя</div>
                <div className="scaler">
                    <select value={parameter.disk_type} onChange={(e) => handleChange(e, 'disk_type')}>
                        <option value="">Выберите тип</option>
                        <option value="HDD">HDD</option>
                        <option value="SSD">SSD</option>
                        <option value="NVME">NVME</option>
                    </select>
                </div>
            </div>
            <div className="parametr7">
                <div className="nameCriteria">Скорость сети</div>
                <div className="scaler">
                    <div>От</div>
                    <input type="text" value={parameter.network_speed_min} onChange={(e) => handleChange(e, 'network_speed_min')} />
                </div>
            </div>
            <div className="parametr8">
                <div className="nameCriteria">Лимит сети</div>
                <div className="scaler">
                    <div>От</div>
                    <input type="text" value={parameter.network_limit_min} onChange={(e) => handleChange(e, 'network_limit_min')} />
                </div>
            </div>
            <div className="parametr9">
                <div className="nameCriteria">Местоположение</div>
                <div className="scaler">
                    <select value={parameter.location} onChange={(e) => handleChange(e, 'location')}>
                        <option value="">Выберите местоположение</option>
                        <option value="Вариант 1">Вариант 1</option>
                        <option value="Вариант 2">Вариант 2</option>
                        <option value="Вариант 3">Вариант 3</option>
                    </select>
                </div>
            </div>
            <div className="parametr10">
                <div className="nameCriteria">Цена</div>
                <div className="scaler">
                    <div>От</div>
                    <input type="text" value={parameter.price_min} onChange={(e) => handleChange(e, 'price_min')} />
                    <div>До</div>
                    <input type="text" value={parameter.price_max} onChange={(e) => handleChange(e, 'price_max')} />
                </div>
            </div>
            <div className="parametr11">
                <div className="nameCriteria">Тип сервера</div>
                <div className="scaler">
                    <select value={parameter.server_type} onChange={(e) => handleChange(e, 'server_type')}>
                        <option value="">Выберите тип</option>
                        <option value="virtual">Virtual</option>
                        <option value="dedicated">Dedicated</option>
                    </select>
                </div>
            </div>
            <div className="parametr12">
                <div className="nameCriteria">Период оплаты</div>
                <div className="scaler">
                    <select value={parameter.billing_cycle} onChange={(e) => handleChange(e, 'billing_cycle')}>
                        <option value="">Выберите период</option>
                        <option value="monthly">Месяц</option>
                        <option value="annually">Год</option>
                    </select>
                </div>
            </div>
            <div className="parametr13">
                <div className="nameCriteria">Рейтинг</div>
                <div className="scaler">
                    <div>От</div>
                    <input type="text" value={parameter.min_rating} onChange={(e) => handleChange(e, 'min_rating')} />
                </div>
            </div>
            <div className="parametr14">
                <div className="nameCriteria">Провайдеры</div>
                <div className="scaler">
                    <select value={parameter.provider_id} onChange={(e) => handleChange(e, 'provider_id')}>
                        <option value="">Выберите провайдера</option>
                        <option value="">Timeweb</option>
                        <option value="Вариант 2">Вариант 2</option>
                        <option value="Вариант 3">Вариант 3</option>
                    </select>
                </div>
            </div>
        </div>
    )
    }