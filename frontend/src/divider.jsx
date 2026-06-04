function Divider(props) {
    return (
    <div className="flex">
      <div className="bg-cotton-candy rounded-xl p-2 w-auto ml-20 mr-3 my-5 text-rich-mahogany text-xl text-center font-semibold ">{props.text}</div>
      <div className="border-t-cotton-candy border-dashed border-t-2 w-8/10 mt-10"></div>
    </div>
)}

export default Divider