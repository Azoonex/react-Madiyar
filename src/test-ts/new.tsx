import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";

interface TypeForm {
    userName: string;
    password: string;
}

export default function PostData() {
    const [Formdata, SetFormData] = useState({
        userName: "", Password: "", valuecp: ""
    })

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        SetFormData((prevent) => ({
            ...prevent,
            [name]: value
        }))
    }

    const handelSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        axios.post("http://82.99.252.77:2060/AccountController/login", {
            userName: Formdata.userName,
            password: Formdata.Password.trim()
        }).then(res => console.log(res.status)).catch(error => {
            console.log(error)
        })

    }

    useEffect(() => {
        console.log(Formdata.userName)
    }, [
        Formdata.userName
    ])

    return (
        <div>
            <form onSubmit={handelSubmit} >
                <label htmlFor="username">userName</label>
                <input id='username' onChange={handelChange} type='text' name='userName' value={Formdata.userName} />

                <label htmlFor="pwd">Pwd</label>
                <input id='pwd' onChange={handelChange} type='text' name='Password' value={Formdata.Password} />

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
