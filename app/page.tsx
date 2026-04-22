"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./page.module.css"

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.name}>Welcome</h1>
          <p className={styles.email}>Sign in to continue</p>
          <button className={styles.button} onClick={() => signIn("github")}>
            Sign in with GitHub
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={session.user?.image || ""} className={styles.avatar} />
        <h1 className={styles.name}>{session.user?.name}</h1>
        <p className={styles.email}>{session.user?.email}</p>
        <button className={styles.button} onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    </div>
  )
}