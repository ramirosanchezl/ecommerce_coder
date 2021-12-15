import React, { useState} from 'react'
import './form.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const Form = ({ createOrder }) => {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: '',
        msg: ''
    })


    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
        console.log(form)
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }

    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )



    return (
        <div>
            <h2 className="title">Contacto</h2>
            <form  className="form">
                <div className="formInput">
                    <PersonIcon/>
                    <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text"/>
                </div>
                <div className = "formInput">
                    <EmailIcon/>
                    <input placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email"/>
                </div>
                <div className="formInput">
                <EmailIcon/>
                    <input placeholder="Confirmar Email" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email"/>
                </div>
                <div className="formInput">
                    <LocalPhoneIcon/>
                    <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                </div>
            </form>
            <button type="submit" className="finalize"  disabled={disabled} onClick={finalizePurchase}>Finalizar</button>
            
        </div>
    )
}
export default Form