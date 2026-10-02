function Divider(props) {
    return (
    <div className="flex mx-20">
      <div className="bg-cherry-rose rounded-xl p-2 min-w-28 max-w-50 mr-3 my-5 whitespace-nowrap text-platinum text-xl text-center font-semibold ">{props.text}</div>
      <div className="border-t-cherry-rose border-dashed border-t-2 w-19/20 mt-10"></div>
    </div>
)}

export default Divider