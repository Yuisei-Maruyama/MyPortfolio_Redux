import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useDispatch } from 'react-redux'
import { Step } from '@/@types/types'
import axios from 'axios'
import { Footer, SkillTables } from '@/components'
import { setSteps } from '@/slice/stepSlice'
// import {
//   SkillTables
// } from 'portfolio/src/components'

// SSG処理
export const getStaticProps: GetStaticProps = async () => {
  const req = await axios.get('http://localhost:3000/api/steps')
  const steps: Step[] = req.data
  return { props: { steps } }
}

type Props = {
  steps: Step[]
}

const Home: NextPage<Props> = ({ steps }) => {
  // src/store/store.ts の counter を指している。
  const dispatch = useDispatch()
  dispatch(setSteps(steps))

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio_Redux</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SkillTables></SkillTables>
      <Footer></Footer>
    </div>
  )
}

export default Home
