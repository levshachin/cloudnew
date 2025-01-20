export default function SortBar(){
    return(
        <div className="SortBar">
            <span>Сортировка</span>
            <select name="" id="">
                <option value="">Лучшее совпадение</option>
                <option value="">Сначала дороже</option>
                <option value="">Сначала дешевле </option>
                <option value="">По возрастанию рейтинга</option>
                <option value="">По убыванию рейтинга</option>
            </select>
        </div>
    )
    }