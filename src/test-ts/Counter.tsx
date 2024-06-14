import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";



export default function PostData() {

    const [formData, setFormData] = useState({
        userName: "", PassWord: "",
        captchaId: "", captchaValues: ""

    })


    const { userName, password, captchaId, captchaValues } = formData

    const handelSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        console.log(formData)

        axios.post("http://82.99.252.77:2060/AccountCountroller/Login", {
            userName: formData.userName,
            password: formData.PassWord,
            captchaId: formData.captchaId,
            captchaValues: formData.captchaValues
        }).then(respose => {
            if(respose.data.statusCode === 200) {
                // const myToken = respose?.data?.model?.firstName;
                // const myTokenLastName = respose?.data?.model?.lastName;
                
                const token = respose?.data?.model?.token;
                const expirationDays = 7;
                const data = new Date();
                data.setDate(data.getTime() + (expirationDays * 24 * 60 * 60 * 1000 ))
                document.cookie = `token= ${myTokenLastName} ${token};expires=${data.toUTCString()}; path=/`
            }
        }).catch(error => {
            if (respose.data.statusCode === -1) {
                alert("this is not found")
            }
        })
    }

    console.log(
        getCookieValue()
    )

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevent) => ({
            ...prevent,
            [name]: value
        }))
    }


    return (
        <div >
            <form onSubmit={handelSubmit}>

                <label name="userame">username</label>
                <input required tabIndex={1} id='username' onChange={handelChange} type='text' name='userName' value={formData.userName} />
                <p></p>

                <label htmlFor="password">password</label>
                <input tabIndex={3} id='passWord' onChange={handelChange} type='text' name='PassWord' value={formData.PassWord} />

                <label htmlFor="capchaId">capchaId</label>
                <input tabIndex={2} id='capchaId' onChange={handelChange} type="capchaId" name='captchaId' value={formData.captchaId} />
                <p></p>

                <label htmlFor="captchaValues">captchaValues</label>
                <input tabIndex={4} id='captchaValues' onChange={handelChange} type="captchaValues" name='captchaValues' value={formData.captchaValues} />
                <p></p>

                <button  type='submit'>submit</button>
            </form >

        </div >
    )
}
