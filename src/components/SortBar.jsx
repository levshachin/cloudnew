export default function SortBar({parameter, setParameters, ...props}){
    const handleChange = (e, field) => {
        setParameters({
            ...parameter,
            [field]: e.target.value
        });
    };
    return(
        <div className="SortBar">
            <span>Сортировка</span>
            <select value={parameter.sort_order} onChange={(e) => handleChange(e, 'sort_order')}>
                <option value="asc">Сначала дешевле</option>
                <option value="desc">Сначала дороже </option>
                <option value="asc">По возрастанию рейтинга</option>
                <option value="desc">По убыванию рейтинга</option>
            </select>
        </div>
    )
    }