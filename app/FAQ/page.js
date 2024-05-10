"use client"

import React, { useState, useEffect } from 'react'
import BaseLayout from '../Components/BaseLayout'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import FAQ from './FAQ';
import styles from './styles.module.css'


export default function FAQComponent() {

    const [data, setdata] = useState(null);
    console.log(data);
    const getData = async () => {
        const data = await axios.get('https://sandbox.practical.me/api/faq')
        setdata(data.data.data);
    }
    useEffect(() => {
        getData();
    }, [])

    if (!data) return;
    return (

        <>
            <BaseLayout />
            <div className={styles.page}>

                <div className={styles.faqs}></div>
                {

                    data.map(elem => {
                        return <FAQ question={elem.question} answer={elem.answer} />
                    })
                }
            </div>
        </>

    )
}
