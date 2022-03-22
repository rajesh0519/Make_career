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

   
    { skills.slice(0,data[4].skill_slice).map( ( curElm, index) => (
    
    
    <label key={index} className="label">Skills/Languages/Framework :
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
                              <option value="Beginner">Beginner</option>
                              <option value="Intermediate">Intermediate</option>
                              <option  value="Expert">Expert</option>
                      </select>
                    </label>
                    <button 
                      onClick={(e) =>{e.preventDefault(); 
                        let dataName = e.target.name;
                          setData({...data,
                            [2]: { ...data[2], skills:{...data[2].skills ,
                              [index]:{...data[2].skills[index], name: "" ,level:""}} },
                            [4]:{...data[4] , skill_slice: data[4].skill_slice - 1}})
                          }}
                    >
                         Delete
                    </button>
                   </label> 
    
    
    )) }
               
                        <button className="add_btn" 
                          onClick={(e)=>{e.preventDefault(); data[4].skill_slice <= 10 ? 
                          setData({...data, [4]:{...data[4] , skill_slice: data[4].skill_slice + 1}})
                          : window.alert("Max Options Reached")}}>
                           Add More
                        </button>

                
         
              </form>
      
      </>
    )
                          }
  }
export default Form3;
