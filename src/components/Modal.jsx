import { useEffect, useState } from 'react'
import close from '../assets/close.png'
export default function Modal(){
    const [auth,setAuth] = useState(false)
    const closeModal = () => {
        const modal = document.querySelector('dialog');
        modal.close()
    }
    const[userdata,setUserdata] = useState({
        name: '',
        email: '',
        password: '',
        account_type: 'phisycal'
    })
    const handleSubmit = (e ) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            account_type: formData.get('account_type'),
        };
        setUserdata(data)
        console.log(userdata)
    }
    useEffect(()=>{
        async function postData() {
            const response=await fetch("https://auth.cloudsell.ru/auth/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userdata),
              });
              const responseData = await response.json();

            if (response.ok) {
            console.log("Успешная регистрация:", responseData);
            } else {
            console.error("Ошибка:", responseData);
            }            
        }
        postData();
    })
    function handleReverse(){
        setAuth(prev => !prev)
        console.log(auth)
    }
    return (
        <div className='modal'>
            <dialog open={false} className='fg'>
                {!auth ? (
                    <>
                        <span className='register'>Регистрация</span>
                        <img src={close} alt="" width={40} className='close' onClick={closeModal} />
                        
                        <form onSubmit={handleSubmit} className='form'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className='submit' />
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name="email" className='submit' />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className='submit' />
                            <label htmlFor="account_type">Account Type</label>
                            <select name="account_type" id="account_type" style={{borderRadius:'4px'}}>
                                <option value="physical">Physical</option>
                                <option value="company">Company</option>
                            </select>
                            <input type="submit" value="Зарегистрироваться" className='submitA' />
                        </form>
                        <div>Уже зарегистрированы? <span onClick={handleReverse}>Войти</span></div>
                    </>
                ) : (
                    <>
                        <span className='register'>Вход</span>
                        <img src={close} alt="" width={40} className='close' onClick={closeModal} />
                        
                        <form onSubmit={handleSubmit} className='form'>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name="email" className='submit' />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className='submit' />
                            <input type="submit" value="Войти" className='submitA' />
                        </form>
                        <div>Нет аккаунта? <span onClick={handleReverse}>Зарегистрироваться</span></div>
                    </>
                )}
            </dialog>
        </div>
    );
    }