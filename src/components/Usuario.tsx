import { useState } from "react"

interface User {
    uid: string,
    name : string
}

export const Usuario = () =>{
    const [user, setUser] = useState<User>();
    const login = () =>{
        setUser({
            uid : 'ksdflsdjl',
            name : "CCC AAA"
        })
    }

   return (
        <div className="mt-5">
            <h4>Usuario</h4>
            <button className="btn btn-primary"
            onClick={login}
            >
                Login
            </button>
                <pre>UID: {user?.uid}</pre>
                <pre>Name: {user?.name}</pre>
        </div>
    )
}