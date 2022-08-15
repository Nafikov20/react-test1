const Input = ({ handleChange, name, required, label, typeText, placeholderText, ...args }) => {
   return (
      <div className="contentInput">
         {label && (
            <label htmlFor={name}>{label}</label>
         )}
         <input onChange={handleChange} required={required}  name={name} id={name} type={typeText} placeholder={placeholderText} {...args}/>
      </div>
   );
}

export default Input;
