function Divider(props) {
    return (
    <div className="flex mx-20">
      <div className="bg-tropical-teal rounded-xl p-2 min-w-35 max-w-50 mr-3 my-5 whitespace-nowrap text-[#0E3938] text-xl text-center font-semibold ">{props.text}</div>
      <div className="border-t-tropical-teal border-dashed border-t-2 w-19/20 mt-10"></div>
    </div>
)}

export default Divider