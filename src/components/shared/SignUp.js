import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

// Styles
import styles from "./SignUp.module.scss";

import { validate } from '../validate';

const SignUp = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        isAccepted: false
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            navigate('/home')
        } else {
            setTouched({
                name: true,
                email: true,
                password: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.signUp}>
                <p className={styles.head}>SignUp</p>
                <h2>Create Accpunt</h2>
                <div className={styles.form}>
                    <label>username</label>
                    <input 
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHanlder}
                         />
                        {errors.name && touched.name && <span className={styles.errorInput}>{errors.name}</span>}
                </div>
                <div className={styles.form}>
                    <label>email</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHanlder}
                        />
                        {errors.email && touched.email && <span className={styles.errorInput}>{errors.email}</span>}
                </div>
                <div className={styles.form}>
                    <label>password</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type="password" name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHanlder} 
                        />
                        {errors.password && touched.password && <span className={styles.errorInput}>{errors.password}</span>}
                </div>
                <div className={styles.isAccept}>
                    <div>
                        <input
                                type="checkbox"
                                name="isAccepted"
                                value={data.isAccepted}
                                onChange={changeHandler}
                                onFocus={focusHanlder} 
                            />
                        <label >I accept terms of privacy policy</label>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span style={{color: "#ff5f5f"}}>{errors.isAccepted}</span>}
                </div>
                <div className={styles.btnHandler}>
                    <button className={styles.linkSignup}>SignUp</button>
                    <Link to="/Login" className={styles.linkLogin}>Login</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;