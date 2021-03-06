import { useState} from 'react'

export function Form2({data ,setData , savedata}) {

  const [educ , setEduc] = useState([1,2,3,4,5,6,7,8])

  const saveEducation = (index,dataName, target) => {
    setData({ ...data, [1]: { ...data[1], education:{...data[1].education , [index]:{...data[1].education[index], [dataName]: target}} } })
  }

  if(!data) {
    return null;
  }
  else{


    return (
      <>
      
        {/* Form 2 */}
        <form className="form">
              
              {/* Form Header */}

              <span className="form_header">Education Background -</span>

              {
                educ.slice(0,data[5].educ_slice).map((curElm,index)=>{
                  return(
                    
                      <label className="label" key={index}>Institute Name : 
                      <img src="/icons8-delete-64.png" className="del_btn"
                          onClick={(e) =>{e.preventDefault(); 
                            setData({...data,
                              [1]: { ...data[1], education:{...data[1].education ,
                                [index]:{...data[1].education[index], name: "" ,degree:""}} },
                              [5]:{...data[5] , educ_slice: data[5].educ_slice - 1}})
                            }}
                        ></img>
                  

                      <input className="input" type="text" name="school" placeholder="Enter your Details" 
                       value={ data[1].education[index].name }
                       onChange={e => {saveEducation(index,"name",e.target.value)}}
                        required></input>
                        <label className="sub_label" >Course / Degree Name : <br />
                        <input type="text" name="passingYear" placeholder="Enter Course / Degree Name .." className="sub_degree"
                        value={ data[1].education[index].degree }
                        onChange={e => {saveEducation(index,"degree",e.target.value)}}
                        ></input>
                        </label>
                        
                      </label>

                  )
                })
              }

             
              

              
                        <img src="/icons8-add-64.png" className="add_btn" 
                          onClick={(e)=>{e.preventDefault(); data[5].educ_slice <= 8 ? 
                          setData({...data, [5]:{...data[5] , educ_slice: data[5].educ_slice + 1}})
                          : window.alert("Max Options Reached")}}>
                        </img>
                
         
              </form>

      </>
    )
                          }
  }
  export default Form2;