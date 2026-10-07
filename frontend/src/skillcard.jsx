function SkillCard(props){
    return(
        <div className="flex items-center border-2 border-indigo-bloom rounded-xl text-platinum bg-midnight-violet w-90 whitespace-nowrap opacity-80 mx-5 my-3 transition ease-in-out duration-200 hover:opacity-100 hover:-translate-y-2">
            <span>
                <img className="w-24 h-24 p-1 m-3 rounded-xl bg-white" src={props.image} alt={props.alttxt}></img>
            </span>
            <span>
                <h4 className="text-2xl max-w-20 font-semibold text-right">{props.header}</h4>
                <p className="max-w-70">{props.text}</p>
            </span>
        </div>
    )
}
export default SkillCard