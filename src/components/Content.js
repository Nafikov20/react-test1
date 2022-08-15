import Input from "./Content/Input";
import Select from "./Content/Select";
import Comments from "./Content/Comments";
import React from "react"

const inputBlock = [
   {
      label: 'Прибор',
      name: 'device',
      typeText: 'text',
      placeholderText: 'Название прибора ...',
   },
   {
      label: 'Номер прибора',
      name: 'deviceNumber',
      typeText: 'number',
      placeholderText: '№ 1234',
   },
   {
      label: 'Дата поверки',
      name: 'checkDate',
      typeText: 'date',
      placeholderText: '01/01/2022 - 01/01/2022',
   }
];

const selectBlock = [
   {
      label: 'Тип прибора', 
      selectText: 'Охрана здоровья',
      name: 'deviceType',
      selectOptions: [
         {
            value: 'type1',
            label: 'Охрана здоровья'
         },
         {
            value: 'type2',
            label: 'Прибор 1'
         }
      ],
   },
   {
      label: 'Статус',
      name: 'status',
      selectText: 'На складе',
      required: true,
      selectOptions: [
         {
            value: 'type1',
            label: 'Охрана здоровья'
         },
         {
            value: 'type2',
            label: 'Прибор 2'
         },
         {
            value: 'type3',
            label: 'Прибор 3'
         },
         {
            value: 'type4',
            label: 'Прибор 4'
         }
      ],
   }
]

function Content() {
   const [formData, setFormData] = React.useState(
      {
         device: "",
         deviceNumber: "",
         checkDate: "",
         deviceType: "",
         status: "",
         comment: ""
      }
   )


   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
   }

   return (
<div className="registration">
   <h1>Добавить оборудование</h1>
         <div className="content">
            <form onSubmit={handleSubmit}>
            <div className="contentInput__block">
                  {inputBlock.map((inputItem) => (
                     <Input
                        handleChange={event => {
                           setFormData(prevState => {
                              const newValue = {
                                 [inputItem.name]: event.target.value
                              }
                              return { ...prevState, ...newValue }
                           })
                        }}
                     key={inputItem.name}
                     label={inputItem.label}
                     name={inputItem.name}
                     typeText={inputItem.typeText}
                     placeholderText={inputItem.placeholderText}
                     required={inputItem.required}
                  />
               ))}
            </div>
            <div className="contentSelect__block">
               {selectBlock.map((selectItem) => (
                  <Select 
                  handleChange={event => {
                     setFormData(prevState => {
                        const newValue = {
                           [selectItem.name]: event.target.value
                        }
                        return { ...prevState, ...newValue }
                     })
                  }}
                     key={selectItem.name}
                     onChange={event => {
                        setFormData(prevState => {
                           return { ...prevState, device: event.target.value}
                        })
                     }}
                     label={selectItem.label}
                     name={selectItem.name}
                     selectOptions={selectItem.selectOptions}
                     selectText={selectItem.selectText}
               
                  />
               ))}
            </div>
            <div className="contentComments__block"> 
                     
                        <Comments
                     handleChange={event => {
                        setFormData(prevState => {
                           return {...prevState, comment: event.target.value}
                        })
                     }}
                           label={'Комментарий'}
                           name={'comment'}
                           placeholderText={'Комментрий...'}
                        />
                     
            </div>
            <div className="contentSave">
               <button className="buttonSecondary">Сохранить</button>
               <button className="buttonPrimery">Сохранить и добавить</button>
            </div>
      </form> 
   </div>
</div>         
   );
}

export default Content;