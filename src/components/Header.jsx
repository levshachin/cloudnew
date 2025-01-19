import user from '../assets/user.png'
import add from '../assets/add.png'
export default function Header(){
    return(
    <header>
        <span className="Name">CloudSell</span>
        <ul>
            <li>Каталог</li>
            <li>Провайдеры</li>
            <li>Документация</li>
        </ul>
        <div className='userinfo'>
            <img src={add} alt="" width={15} className='addMoney'/>
            <span>0 ₽</span>
            <img src={user} alt="" width={35} className='userAuth'/>
        </div>
    </header>
    )
}