import HeaderBox from '@/src/components/HeaderBox'
import RightSidebar from '@/src/components/RightSidebar'
import TotalBalanceBox from '@/src/components/TotalBalanceBox'
import { getLoggedInUser } from '@/src/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser()
  

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          {}
        ]}
      />
    </section>
  )
}

export default Home
