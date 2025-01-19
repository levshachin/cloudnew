export default function SideBar(){
    return(
    <div className="SideBar">
        <div className="parametr1">
            <div className="nameCriteria">Ядра</div>
            <div className="scaler">
                <div>От</div>
                <input type="text" />
                <div>До</div>
                <input type="text" />
            </div>
        </div>
        <div className="parametr2">
            <div className="nameCriteria">Частота</div>
            <div className="scaler">
                <div>От</div>
                <input type="text" />
                <div>До</div>
                <input type="text" />
            </div>
        </div>
        <div className="parametr3">
            <div className="nameCriteria">Оперативная память</div>
            <div className="scaler">
                <div>От</div>
                <input type="text" />
                <div>До</div>
                <input type="text" />
            </div>
        </div>
        <div className="parametr4">
            <div className="nameCriteria">Тип оперативной памяти</div>
            <div className="scaler">
                <select>
                    <option value="option1">DDR3</option>
                    <option value="option2">DDR4</option>
                    <option value="option3">DDR5</option>
                </select>
            </div>
        </div>
        <div className="parametr5">
            <div className="nameCriteria">Объём накопителя</div>
            <div className="scaler">
                <div>От</div>
                <input type="text" />
                <div>До</div>
                <input type="text" />
            </div>
        </div>
        <div className="parametr6">
            <div className="nameCriteria">Тип накопителя</div>
            <div className="scaler">
                <select>
                    <option value="option1">HDD</option>
                    <option value="option2">SSD</option>
                    <option value="option3">NVME</option>
                </select>
            </div>
        </div>
        <div className="parametr7">
            <div className="nameCriteria">Скорость сети</div>
            <div className="scaler">
                <div>От</div>
                <input type="text" />
            </div>
        </div>
        <div className="parametr8">
            <div className="nameCriteria">Лимит сети</div>
            <div className="scaler">
                <div>От</div>
                <input type="text" />
            </div>
        </div>
        <div className="parametr9">
            <div className="nameCriteria">Местоположение</div>
            <div className="scaler">
                <select>
                    <option value="option1">Вариант 1</option>
                    <option value="option2">Вариант 2</option>
                    <option value="option3">Вариант 3</option>
                </select>
            </div>
        </div>
        <div className="parametr10">
            <div className="nameCriteria">Цена</div>
            <div className="scaler">
                <div>От</div>
                <input type="text" />
                <div>До</div>
                <input type="text" />
            </div>
        </div>
        <div className="parametr11">
            <div className="nameCriteria">Тип сервера</div>
            <div className="scaler">
                <select>
                    <option value="option1">Virtual</option>
                    <option value="option2">Dedicated</option>
                </select>
            </div>
        </div>
        <div className="parametr12">
            <div className="nameCriteria">Период оплаты</div>
            <div className="scaler">
                <select>
                    <option value="option1">Месяц</option>
                    <option value="option2">Год</option>
                </select>
            </div>
        </div>
        <div className="parametr13">
            <div className="nameCriteria">Рейтинг</div>
            <div className="scaler">
                <div>От</div>
                <input type="text" />
            </div>
        </div>
        <div className="parametr14">
            <div className="nameCriteria">Провайдеры</div>
            <div className="scaler">
                <select>
                    <option value="option1">Timeweb</option>
                    <option value="option2">Вариант 2</option>
                    <option value="option3">Вариант 3</option>
                </select>
            </div>
        </div>
    </div>
    )
    }