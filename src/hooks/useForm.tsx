import { useState, ChangeEvent } from 'react';


// Clase
// https://www.youtube.com/watch?v=HrV0HeGnzIw&list=PLCKuOXG0bPi26-eawizqyLOgM7j66H_4M&index=5
export const useForm = <T extends Object>(initialState: T) => {
    //Dato generico T
// export function useForm<T>(initialState:T){
    // interface DataForm {
    //     name: string,
    //     email: string
    // }

    const [form, setForm] = useState(initialState)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return {
        form,
        handleChange
    }
}