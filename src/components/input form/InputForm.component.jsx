
function InputForm({label, ...otherProps}) {

  return (
    <div className="my-3">
      <label className="my-1 font-medium">{label}</label>
      <input 
        className="input input-sm w-full border-2 border-black my-3"
        {...otherProps}
      />
    </div>
  )
}

export default InputForm
