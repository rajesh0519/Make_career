import {useState} from 'react'

export function Form3({data ,setData , savedata}) {

    const [skills , setSkills] = useState([1,2,3,4,5,6,7,8,9,10]);

    const saveSkill = (index,dataName, target) => {
      setData({ ...data, [2]: { ...data[2], skills:{...data[2].skills , [index]:{...data[2].skills[index], [dataName]: target}} } })
    }
   

    if(!data) {
      return null;
    }
    else{
  

    return (
      <>

           {/* Form 3 */}
           <form className="form">
              
              {/* Form Header */}
              <span className="form_header">Skills -</span>

   
    { skills.slice(0,data[5].skill_slice).map( ( curElm, index) => (
    
    
    <label key={index} className="label">Skills Name :

                    <img src="/icons8-delete-64.png" className="del_btn" 
                        onClick={(e) =>{e.preventDefault(); 
                          let dataName = e.target.name;
                            setData({...data,
                              [2]: { ...data[2], skills:{...data[2].skills ,
                                [index]:{...data[2].skills[index], name: "" ,level:""}} },
                              [5]:{...data[5] , skill_slice: data[5].skill_slice - 1}})
                            }}
                    >
                    </img>

                    <input className="input" type="text" 
                    value={ data[2].skills[index].name }
                    onChange={e => {saveSkill(index,"name",e.target.value)}}
                    placeholder="Write here..." 
                    required></input>
                    <label className="sub_label">Level: 
                      <select className="level" 
                      defaultValue={ data[2].skills[index].level }
                      onChange={e => {saveSkill(index,"level",e.target.value)}}
                      > 
                              <option disabled value="select">Select option</option>
                              <option value="1">Beginner</option>
                              <option value="2">Intermediate</option>
                              <option  value="3">Expert</option>
                      </select>
                    </label>
                    
                   </label> 
    
    
    )) }
               
                        <img src="/icons8-add-64.png" className="add_btn" 
                          onClick={(e)=>{e.preventDefault(); data[5].skill_slice <= 10 ? 
                          setData({...data, [5]:{...data[5] , skill_slice: data[5].skill_slice + 1}})
                          : window.alert("Max Options Reached")}}>
                        </img>

                
         
              </form>
      
      </>
    )
                          }
  }
export default Form3;
