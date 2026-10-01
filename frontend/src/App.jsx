import { useState } from 'react'
import LinkCard from './linkcard'
import About from './about'
import Divider from './divider'
function App() {
  return (
    <>
    <div className='flex justify-center'>
      <About/>
    </div>
    <Divider text="Projects"/>
    <div className="flex flex-wrap justify-center w-full px-20 py-5">
      <LinkCard title="Draw & Guess" text="A real-time multiplayer drawing and guessing game built with React, Node.js, Socket.io, and MongoDB." github="https://github.com/zjerome2023/Draw-and-Guess" link="https://draw-and-guess-1pmz.onrender.com/"/>
      <LinkCard title="BudgetCash" text="A full-stack expense tracking web app that helps you track daily spending, with a visual dashboard to help you understand your habits." github="https://github.com/zjerome2023/Budget-Cash" link="https://budgetcash.netlify.app"/>
      <LinkCard title="Task Manager" text="A full-stack task manager to manage your tasks. Data is stored in MongoDB and served through a REST API." github="https://github.com/zjerome2023/Full-Stack-Task-Manager" link="https://to-do-app-lahr.onrender.com/"/>
    </div>
    <Divider text="Resume"/>
    </>
  )
}

export default App
