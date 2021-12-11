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
        msg: ''
    })

    const [disableButton,setDisableButton] = useState(false)


    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
        console.log(form)
    }

    const finalizePurchase = () => {
        if(form.name.length > 0 && form.email.length > 0 && form.phone.length > 0 ){
            setDisableButton(true)
            const { name, email, phone } = form
            createOrder({ name, email, phone })
        }
    }


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
                    <LocalPhoneIcon/>
                    <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                </div>
            </form>
            <button type="submit" className="finalize"  disabled={disableButton} onClick={finalizePurchase}>Finalizar</button>
            
        </div>
    )
}
export default Form