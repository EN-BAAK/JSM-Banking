import HeaderBox from '@/src/components/HeaderBox'
import TotalBalanceBox from '@/src/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Adrian" }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'></header>

        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently."
        />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
      </div>
    </section>
  )
}

export default Home
