import { useState, ChangeEvent } from 'react';
import { useForm } from '../hooks/useForm'

interface DataForm {
    name : string
    email : string
    edad : number
}

export const Formulario = () => {
    const {form, handleChange} = useForm<DataForm>({
        name:'',
        email:'',
        edad:0
    });
    // useForm, sustituye esto:
    // const [form, setForm] = useState<DataForm>({
    //     name:'',
    //     email:''
    // })

    // const handleChange = ({ target } : ChangeEvent<HTMLInputElement>) : void =>{
    //     const { name, value } = target;
    //     setForm({
    //         ...form,
    //         [name]:value
    //     })
    // }

    return(
        <form autoComplete="off">
            <div mb-3>
                <label className="form-label">Nombre:</label>
                <input type="text"
                className="form-control"
                name='name'
                onChange={handleChange}
                value={form.name}
                />
            </div>
            <div mb-3>
                <label className="form-label">Email:</label>
                <input type="email"
                className="form-control"
                name='email'
                onChange={handleChange}
                value={form.email}
                />
            </div>
            <div mb-3>
                <label className="form-label">Edad:</label>
                <input type="text"
                className="form-control"
                name='edad'
                onChange={handleChange}
                value={form.edad}
                />
            </div>
            <pre>{JSON.stringify(form)}</pre>
        </form>
    )
}