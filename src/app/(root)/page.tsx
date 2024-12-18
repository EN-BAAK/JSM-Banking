import HeaderBox from '@/src/components/HeaderBox'
import RightSidebar from '@/src/components/RightSidebar'
import TotalBalanceBox from '@/src/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {
    $id: "string",
    email: "string",
    userId: "string",
    dwollaCustomerUrl: "string",
    dwollaCustomerId: "string",
    firstName: "string",
    lastName: "String",
    name: "String",
    address1: "String",
    city: "String",
    state: "String",
    postalCode: "String",
    dateOfBirth: "String",
    ssn: "String",
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
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
        </header>
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 123.50 },
          { currentBalance: 500 }
        ]}
      />
    </section>
  )
}

export default Home
