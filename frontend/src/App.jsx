import { useState } from 'react'
import LinkCard from './linkcard'
import About from './about'
import Divider from './divider'
import SkillCard from './skillcard'

import ReactImg from './assets/react.png'
import ExpressImg from './assets/express.png'
import MongoDbImg from './assets/mongodb.png'
import TailwindImg from './assets/tailwind.png'
import JavaScriptImg from './assets/JavaScript.png'
import PythonImg from './assets/Python.png'

function App() {
  return (
    <>
    <div className='flex flex-col' id='home'></div>
      <header className='flex text-platinum text-lg bg-space-indigo w-full h-12 sticky top-0 z-50'>
        <div className='mx-50 flex justify-around w-full min-w-80'>
        <a className='my-auto inline-flex' href='#home'>E6
          <svg className="size-5 shrink-0 my-auto" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3103 1.77586C11.6966 1.40805 12.3034 1.40805 12.6897 1.77586L20.6897 9.39491L23.1897 11.7759C23.5896 12.1567 23.605 12.7897 23.2241 13.1897C22.8433 13.5896 22.2103 13.605 21.8103 13.2241L21 12.4524V20C21 21.1046 20.1046 22 19 22H14H10H5C3.89543 22 3 21.1046 3 20V12.4524L2.18966 13.2241C1.78972 13.605 1.15675 13.5896 0.775862 13.1897C0.394976 12.7897 0.410414 12.1567 0.810345 11.7759L3.31034 9.39491L11.3103 1.77586ZM5 10.5476V20H9V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V20H19V10.5476L12 3.88095L5 10.5476ZM13 20V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H13Z" fill="#FFFF"></path> </g></svg>
          <span className='mx-1'>Home</span>
        </a>
        <a className='my-auto inline-flex' href='#about'>
          <svg className='size-4 shrink-0 my-auto' width="1em" height="1em" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="E6FFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_round [E6FFFF]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#E6FFFF"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[E6FFFF]"> </path> </g> </g> </g> </g></svg>
          <span className='mx-1'>About Me</span>
        </a>
        <a className='my-auto inline-flex' href='#projects'>
          <svg className="size-5 shrink-0 my-auto" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#E6FFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M12 11H9M15 15H9" stroke="#E6FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>  
          <span className='mx-1'>Projects</span>
        </a>
        <a className='my-auto inline-flex' href='#skills'>
          <svg className="size-5 shrink-0 my-auto" fill="#E6FFFF" height="1em" width="1em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297.001 297.001" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M148.494,105.824c-23.529,0-42.671,19.142-42.671,42.671c0,23.529,19.142,42.671,42.671,42.671 s42.671-19.142,42.671-42.671C191.165,124.966,172.022,105.824,148.494,105.824z M148.494,171.099 c-12.464,0-22.604-10.14-22.604-22.604c0-12.464,10.14-22.604,22.604-22.604s22.604,10.14,22.604,22.604 C171.098,160.958,160.957,171.099,148.494,171.099z"></path> <path d="M259.09,117.662c-1.866,1.867-2.94,4.455-2.94,7.094s1.074,5.227,2.94,7.094c1.876,1.876,4.455,2.939,7.094,2.939 c2.639,0,5.227-1.063,7.094-2.939c1.875-1.867,2.94-4.455,2.94-7.094c0-2.639-1.064-5.218-2.94-7.094 c-1.867-1.866-4.446-2.94-7.094-2.94C263.545,114.722,260.956,115.796,259.09,117.662z"></path> <path d="M171.571,257.86c-2.639,0-5.227,1.074-7.094,2.94c-1.866,1.867-2.939,4.455-2.939,7.094c0,2.639,1.074,5.227,2.939,7.094 c1.876,1.876,4.455,2.94,7.094,2.94c2.639,0,5.227-1.063,7.094-2.94c1.875-1.867,2.94-4.455,2.94-7.094 c0-2.639-1.064-5.218-2.94-7.094C176.798,258.934,174.219,257.86,171.571,257.86z"></path> <path d="M211.074,85.915c-14.385-14.385-29.455-27.408-44.703-38.73c12.28-7.492,24.454-13.651,36.222-18.256 c30.052-11.758,53.97-11.818,65.627-0.161c11.867,11.867,11.605,36.3-0.718,67.035c-2.063,5.143,0.435,10.985,5.578,13.047 c5.145,2.063,10.986-0.433,13.047-5.578c15.684-39.114,14.363-70.613-3.716-88.694c-17.812-17.811-48.755-19.354-87.13-4.337 c-15.208,5.951-30.988,14.253-46.786,24.508c-15.798-10.255-31.578-18.557-46.787-24.508 C63.336-4.773,32.392-3.234,14.579,14.579c-17.813,17.812-19.353,48.756-4.337,87.129c5.951,15.209,14.253,30.989,24.508,46.786 c-10.256,15.798-18.558,31.578-24.509,46.787c-15.016,38.374-13.476,69.316,4.337,87.13c9.704,9.704,23.3,14.577,39.877,14.577 c13.851,0,29.785-3.405,47.253-10.24c35.692-13.967,74.533-40.842,109.365-75.674c14.345-14.345,27.322-29.338,38.724-44.714 c7.495,12.284,13.657,24.462,18.263,36.234c11.759,30.051,11.818,53.971,0.161,65.627c-11.865,11.866-36.299,11.604-67.035-0.719 c-5.144-2.061-10.984,0.437-13.047,5.579c-2.062,5.144,0.436,10.985,5.579,13.047c18.101,7.257,34.566,10.873,48.83,10.872 c16.559-0.001,30.151-4.877,39.864-14.59c17.812-17.813,19.352-48.757,4.337-87.13 C272.78,159.588,245.905,120.747,211.074,85.915z M28.929,94.395c-11.759-30.05-11.818-53.97-0.161-65.626 c11.655-11.657,35.577-11.598,65.626,0.16c11.768,4.605,23.943,10.764,36.223,18.256C115.369,58.507,100.3,71.531,85.915,85.916 c-14.385,14.385-27.408,29.454-38.73,44.702C39.693,118.338,33.534,106.163,28.929,94.395z M94.395,268.06 c-30.051,11.758-53.97,11.818-65.627,0.161c-11.657-11.656-11.598-35.577,0.161-65.627c4.605-11.768,10.764-23.943,18.256-36.223 c11.322,15.249,24.345,30.318,38.731,44.704c14.344,14.344,29.338,27.321,44.713,38.723 C118.344,257.292,106.166,263.454,94.395,268.06z M196.883,196.884c-15.578,15.578-31.935,29.441-48.36,41.103 c-16.657-11.807-32.92-25.605-48.417-41.103c-15.587-15.587-29.458-31.954-41.124-48.39 c11.666-16.435,25.536-32.802,41.123-48.388c15.587-15.587,31.954-29.458,48.39-41.124c16.436,11.666,32.803,25.537,48.39,41.123 c15.578,15.578,29.441,31.935,41.103,48.361C226.18,165.123,212.382,181.386,196.883,196.884z"></path> </g> </g> </g> </g></svg>  
          <span className='mx-1'>
            Skills
          </span>
          </a>
        </div>
     </header>
      <About/>

    <div className='flex flex-col' id='about'>
      <Divider text="About Me"/>
      <p className='text-platinum text-2xl mx-40'>Hi there! I’m a senior Computer Science major at Florida Atlantic University. My favorite thing about software engineering is the combination of creativity and problems solving. I specialize in the MERN tech stack, and I’m always eager to expand my knowledge and create work on new projects.</p>
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
      <SkillCard image={PythonImg} alttxt="Python" header="Python" text="Programming Language."/>
      <SkillCard image={JavaScriptImg} alttxt="JavaScript" header="JavaScript" text="Programming Language."/>
      <SkillCard image={ReactImg} alttxt="React.JS" header="React.JS" text="JavaScript library."/>
      <SkillCard image={ExpressImg} alttxt="Express.JS" header="Express.JS" text="A Node.JS framework."/>
      <SkillCard image={TailwindImg} alttxt="Tailwind CSS" header="Tailwind CSS" text="A CSS framework."/>
      <SkillCard image={MongoDbImg} alttxt="MongoDB" header="MongoDB" text="NoSQL Database."/>
    </div>
    </>
  )
}

export default App
