import React from 'react'
import Stats from './Submodules/Stats'
import LeetCodeTop from './Submodules/LeetCodeTop'
import Navbar from '../Navbar/Navbar'
import Progress from './Submodules/Progress'
import LearningMethodology from './Submodules/LearningMethodology'
import Objectives from './Submodules/Objectives'

const LeetCodePageMain = () => {
  return (
    <div>
    <Navbar active={"LeetCode"} />
      <LeetCodeTop/>
      <Stats/>
      <Progress/>
      <LearningMethodology/>
      <Objectives/>
    </div>
  )
}

export default LeetCodePageMain
