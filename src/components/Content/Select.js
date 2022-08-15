const Select = ({handleChange, label, name, selectText, selectOptions, ...args}) => {
   return (
   <div className="contentSelect">
         <label htmlFor={name}>{label}</label>
            {Boolean(selectOptions?.length) && (
               <select id={name} name={name} onChange={handleChange}>

               {selectOptions.map(option => {
                  return (
                     <option key={option.value} value={option.value}>{option.label}</option>
                  )
               
               })}
               </select>
            )}
            
      
   </div>
   );
}

export default Select;