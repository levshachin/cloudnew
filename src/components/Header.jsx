import user from '../assets/user.png'
import add from '../assets/add.png'
export default function Header(){
    function handleModal() {
        const modal = document.querySelector('dialog');
        if (modal) {
            modal.showModal();
        } else {
            console.error('Dialog element not found');
        }
    }
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
            <img src={user} alt="" width={35} className='userAuth' onClick={handleModal}/>
        </div>
    </header>
    )
}