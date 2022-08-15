const Comments = ({ handleChange, label, name, placeholderText}) => {
   return (
      <div className="contentComments">
         <label htmlFor={name}>{label}</label>
         <textarea onChange={handleChange} name={name} id={name} placeholder={placeholderText}></textarea>
      </div>
   );
}

export default Comments; 