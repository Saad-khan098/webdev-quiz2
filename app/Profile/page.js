"use client"

import React, { useState, useEffect } from 'react'
import BaseLayout from '../Components/BaseLayout'
import getCookie from '@/utils/getCookie'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Wallets from './Wallets';
import styles from './styles.module.css'

const authToken = getCookie('authToken');

export default function Profile() {

  const [user, setuser] = useState(null);
  console.log(user);
  const getUser = async () => {
    const data = await axios.get('https://sandbox.practical.me/api/user/profile',
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    )
    setuser(data.data.data);
  }
  useEffect(() => {
    getUser();
  }, [])

  if (!user) return;
  return (

    <>
      <BaseLayout />
      <div className={styles.page}>

        <div className={styles.profile}>
          <h1>Welcome {user.first_name} {user.sur_name}</h1>
        </div>
        <Wallets wallets={user.wallet} />
      </div>
    </>

  )
}
