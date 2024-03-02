import { React, useState } from 'react'
import { Demo2 } from './Demo2';


export const Demo1 = () => {
    const [user, setUser] = useState({
        name: "Raju",
        email: "rajubhai7341@gmail.com",
        contactNumber: 9182844890
    })

    return (

        <div>
          
          <Demo2 user={user} setUser={setUser} />

        </div>
    )

}

