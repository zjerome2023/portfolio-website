function LinkCard(props){
    return (
    <div className="bg-parchment border-2 opacity-80 border-cotton-candy rounded-xl p-5 mx-5 my-3 w-1/4 min-w-60 min-h-50 text-rich-mahogany text-center transition ease-in-out duration-200 hover:opacity-100 hover:-translate-y-2 ">
        <h1 className="text-2xl font-semibold"> {props.title} </h1>
        <p className="m-5"> {props.text} </p>
        <a href={props.link} className="bg-cotton-candy text-rich-mahogany px-3 py-2 mb-500 rounded-md transition-colors ease-in-out duration-100 hover:bg-sunlit-clay">Link</a>
    </div>
)}
export default LinkCard