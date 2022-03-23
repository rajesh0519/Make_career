import { useState, useEffect } from 'react'

export function Form5({ data, setData, savedata }) {

  const [other_form, setOther] = useState([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  console.log(other_form);

  const saveExp = (index,dataName, target) => {
    // console.log(dataName);
    setData({ ...data, [3]: { ...data[3], exp:{...data[3].exp , [index]:{...data[3].exp[index], [dataName]: target}} } })
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
        <span className="form_header">Projects / Achievements / Interest -</span>

        {

            other_form.slice(0,data[5].other_slice).map((curElm, index)=>{
                return(
                    <>
                      <label className="label" >Title : 

                        <img src="/icons8-delete-64.png" className="del_btn"
                         onClick={(e) =>{e.preventDefault(); 
                              let dataName = e.target.name;
                                setData({...data,
                                  [4]: { ...data[4], 
                                    other:{...data[4].other ,
                                     [index]:{...data[4].other[index], title:"",text:""}}},
                                  [5]:{...data[5] , other_slice: data[5].other_slice - 1}})
                                }}>
                          </img>

                          <input type="text" className="input" placeholder="Project / Achievements / Interest "
                            onChange={e => setData({...data,
                                [4]: { ...data[4], 
                                  other:{...data[4].other ,
                                   [index]:{...data[4].other[index], title:e.target.value}}},
                                })
                              }
                              value={
                                  data[4].other[index].title
                              }
                          ></input>
                            
                            <label className="other_label">Text :
                                <textarea type="text" className="other_input" placeholder="Project : 1 , Project 2  "
                                onChange={e => setData({...data,
                                    [4]: { ...data[4], 
                                      other:{...data[4].other ,
                                       [index]:{...data[4].other[index], text:e.target.value}}},
                                    })
                                  }
                                  value={
                                      data[4].other[index].text
                                  }
                                ></textarea>
                            </label>
                             
                            
                        </label>
                        

                      

                    
                    </>
                  
            )})

        }

                    <img src="/icons8-add-64.png" className="add_btn"
                        onClick={(e) => {
                        e.preventDefault(); data[5].other_slice <= 4 ?
                            setData({ ...data, [5]: { ...data[5], other_slice: data[5].other_slice + 1 } })
                            : window.alert("Max Options Reached")
                        }}>
                    </img>
        
      </form>

    </>
  )
        }
}
export default Form5;


// {
//     Array.apply(null, {length: data[5].other_slice}).map((curElm,index)=>{
//         return(
//             <>
//                 <h3>SKILLS</h3>
//                    <hr />
//             </>
//         )
//     }
// }

// }