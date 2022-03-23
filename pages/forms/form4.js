import { useState, useEffect } from 'react'

export function Form4({ data, setData, savedata }) {

  const [exp, setExp] = useState([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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
        <span className="form_header">Experience -</span>

        {
          
          exp.slice(0, data[5].exp_slice).map((curElm, index) => {
                      return (

                        <label key={index} className="label">Company Name :

                          <img src="/icons8-delete-64.png" className="del_btn" 
                          onClick={(e) =>{e.preventDefault(); 
                              let dataName = e.target.name;
                                setData({...data,
                                  [3]: { ...data[3], exp:{...data[3].exp ,
                                     [index]:{...data[3].exp[index], name: "" , duration:"" ,post:"",work_profile:""}} },
                                  [5]:{...data[5] , exp_slice: data[5].exp_slice - 1}})
                                }}>
                          </img>

                          <input className="input" type="text" placeholder="Write here..." 
                              value={ data[3].exp[index].name }
                              onChange={e => {saveExp(index,"name",e.target.value)}}
                          required>
                          </input>
                          <label className="sub_label">Duration :
                            <input type="text" className="sub_input" placeholder="ex : 2 years "
                              value={ data[3].exp[index].duration }
                              onChange={e => {saveExp(index,"duration",e.target.value)}}

                            ></input>
                            </label>
                            <br />

                            <label className="sub_label" >Post : 
                            <input type="text "className="sub_input" placeholder="Write your job post "
                            value={ data[3].exp[index].work_position }
                            onChange={e => {saveExp(index,"work_position",e.target.value)}}
                            >
                            </input>
                            </label>
                              
                              <br />

                            <label className="sub_label">Job Profile : 
                              <textarea type="text" placeholder="Write your work details... "
                              value={ data[3].exp[index].work_profile }
                              onChange={e => {saveExp(index,"work_profile",e.target.value)}}
                              ></textarea>
                            </label>

                          
                          
                        </label>

                      )
                    })

        }


        <img src="/icons8-add-64.png" className="add_btn"
          onClick={(e) => {
            e.preventDefault(); data[5].exp_slice <= 10 ?
              setData({ ...data, [5]: { ...data[5], exp_slice: data[5].exp_slice + 1 } })
              : window.alert("Max Options Reached")
          }}>
        </img>



      </form>

    </>
  )
        }
}
export default Form4;