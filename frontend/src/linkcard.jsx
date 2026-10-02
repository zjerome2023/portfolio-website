function LinkCard(props){
    return (
    <div className="flex flex-col bg-shadow-gray border-2 opacity-80 border-cherry-rose rounded-xl p-5 mx-5 my-3 min-w-60 max-w-100 min-h-75 text-platinum text-center transition ease-in-out duration-200 hover:opacity-100 hover:-translate-y-2 ">
        <h1 className="text-2xl font-semibold max-h-20"> {props.title} </h1>
        <p className="m-5 max-h-40"> {props.text} </p>
        <div className="flex flex-row w-40 mt-auto mx-auto">
            <a href={props.github} className="bg-cherry-rose text-platinum max-w-20 mx-2 px-3 py-2 mb-2 rounded-md transition-colors ease-in-out duration-100 hover:bg-rose-wine">GitHub</a>
            <a href={props.link} className="bg-cherry-rose text-platinum max-w-20 mx-2 px-3 py-2 mb-2 rounded-md transition-colors ease-in-out duration-100 hover:bg-rose-wine">Live</a>
        </div>
     </div>
 )}       
export default LinkCard