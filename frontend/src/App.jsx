import { useState } from 'react'
import LinkCard from './linkcard'
import About from './about'
import Divider from './divider'
import SkillCard from './skillcard'
import ReactImg from './assets/react.png'
import ExpressImg from './assets/express.png'
import MongoDbImg from './assets/mongodb.png'
import TailwindImg from './assets/tailwind.png'

function App() {
  return (
    <>
    <div className='flex flex-col' id='home'>
      <header className='flex bg-shadow-gray w-full h-12 sticky top-0 z-50'>
        <div className='mx-50 flex justify-around w-full'>
        <a className='text-platinum my-auto text-lg' href='#home'>Home</a>
        <a className='text-platinum my-auto text-lg' href='#about'>About Me</a>
        <a className='text-platinum my-auto text-lg' href='#projects'>Projects</a>
        <a className='text-platinum my-auto text-lg' href='#skills'>Skills</a>
        </div>
     </header>
      <About/>
    </div>
    <div className='flex flex-col' id='about'>
      <Divider text="About Me"/>
      <p className='text-platinum text-2xl mx-30'>Hi there! I’m a senior Computer Science major at Florida Atlantic University. My favorite thing about software engineering is the combination of creativity and problems solving. I specialize in the MERN tech stack, and I’m always eager to expand my knowledge and create work on new projects.</p>
    </div>
    <div id='projects'>
      <Divider text="Projects"/>
    </div>
    <div className="flex flex-wrap justify-center w-full my-5">
      <LinkCard title="Draw & Guess" text="A real-time multiplayer drawing and guessing game built with React, Node.js, Socket.io, and MongoDB." github="https://github.com/zjerome2023/Draw-and-Guess" link="https://draw-and-guess-1pmz.onrender.com/"/>
      <LinkCard title="BudgetCash" text="A full-stack expense tracking web app that helps you track daily spending, with a visual dashboard to help you understand your habits." github="https://github.com/zjerome2023/Budget-Cash" link="https://budgetcash.netlify.app"/>
      <LinkCard title="Task Manager" text="A full-stack task manager to manage your tasks. Data is stored in MongoDB and served through a REST API." github="https://github.com/zjerome2023/Full-Stack-Task-Manager" link="https://to-do-app-lahr.onrender.com/"/>
    </div>
    <div id='skills'>
      <Divider text="Skills"/>
    </div>
    <div className='flex flex-wrap justify-center w-full my-5'>
      <SkillCard image={ReactImg} alttxt="React.JS" header="React.JS" text="JavaScript library."/>
      <SkillCard image={ExpressImg} alttxt="Express.JS" header="Express.JS" text="A Node.JS framework."/>
      <SkillCard image={TailwindImg} alttxt="Tailwind CSS" header="Tailwind CSS" text="A CSS framework."/>
      <SkillCard image={MongoDbImg} alttxt="MongoDB" header="MongoDB" text="NoSQL Database."/>
    </div>
    </>
  )
}

export default App
