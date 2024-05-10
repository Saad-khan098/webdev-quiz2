"use client"

import React, {useState, useEffect} from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import styles from './styles.module.css'
import BaseLayout from '../Components/BaseLayout';
import Form from './Form';

export default function page() {

    const [form, setform] = useState(null);
    console.log(form);

    const getForm = async ()=>{
        const form = await axios('https://sandbox.practical.me/api/common/quiz?average_meals_day=2&average_snacks_day=3')
        console.log(form);
        setform(form.data.data);
    }

    useEffect(()=>{
        getForm();
    }, [])

    if(!form)return;

  return (
    <>
    <BaseLayout />
    <Form data={form}/>
    <div className={styles.page}>
    </div>
</>
  )
}
