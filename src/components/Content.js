import Input from "./Content/Input";
import Select from "./Content/Select";
import Comments from "./Content/Comments";

function Content() {
   return (
<div className="registration">
   <h1>Добавить оборудование</h1>
   <div className="content">
      <from>
            <div className="contentInput__block">
               <Input />   
               <div className="contentInput">
                  <label htmlFor="">Номер прибора</label>
                  <input type="number" placeholder="№ 1234" />
               </div>
               <div className="contentInput">
                  <label htmlFor="">Дата поверки</label>
                  <input type="date" placeholder="01/01/2022 - 01/01/2022"/>
               </div>
            </div>
            <div className="contentSelect__block">
               <Select />
               <div className="contentSelect">
                  <label htmlFor="">Статус</label>
                  <select>
                     <option value="">На складе</option>
                     <option value="">1</option>
                  </select>
               </div>
            </div>
            <div className="contentComments__block"> 
               <Comments />
            </div>
            <div className="contentSave">
               <button className="buttonSecondary">Сохранить</button>
               <button className="buttonPrimery">Сохранить и добавить</button>
            </div>
      </from> 
   </div>
</div>         
   );
}

export default Content;