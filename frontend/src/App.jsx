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
      <LinkCard title="Project 1" text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."/>
      <LinkCard title="Project 2" text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."/>
      <LinkCard title="Project 3" text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."/>
      <LinkCard title="Project 4" text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."/>
      <LinkCard title="Project 5" text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."/>
      <LinkCard title="Project 6" text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."/>
    </div>
    <Divider text="Resume"/>
    </>
  )
}

export default App
