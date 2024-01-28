import React from 'react'
import WeStrive from './components/westrive'
import WhatToExpect from './components/whatToExpect'
import Review from './components/Review'
import TeamMembers from './components/TeamMembers'
import WhereItStarted from './components/WhereItStarted'
import JoinUs from './components/JoinUs'

function AboutUsMainPage() {
  return (
    <div>
        <WeStrive />
        <WhatToExpect />
        <Review />
        <TeamMembers />
        <WhereItStarted />
        <JoinUs />
    </div>
  )
}

export default AboutUsMainPage