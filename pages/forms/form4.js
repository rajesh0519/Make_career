import { useState, useEffect } from 'react'

function Form4({ data, setData, savedata }) {

  const [exp, setExp] = useState([ { name: "", duration: "" }, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const saveExp = (index,dataName, target) => {
    // console.log(dataName);
    setData({ ...data, [3]: { ...data[3], exp:{...data[3].exp , [index]:{...data[3].exp[index], [dataName]: target}} } })
  }

  return (
    <>

      {/* Form 3 */}
      <form className="form">

        {/* Form Header */}
        <span className="form_header">Experience -</span>

        {
          
          exp.slice(0, data[4].exp_slice).map((curElm, index) => {
                      return (

                        <label key={index} className="label">Company Name :
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

                          
                          <button onClick={(e) =>{e.preventDefault(); 
                              let dataName = e.target.name;
                                setData({...data,
                                  [3]: { ...data[3], exp:{...data[3].exp ,
                                     [index]:{...data[3].exp[index], name: "" , duration:"" ,post:"",work_profile:""}} },
                                  [4]:{...data[4] , exp_slice: data[4].exp_slice - 1}})
                                }}>
                            Delete
                          </button>
                        </label>

                      )
                    })

        }


        <button className="add_btn"
          onClick={(e) => {
            e.preventDefault(); data[4].exp_slice <= 10 ?
              setData({ ...data, [4]: { ...data[4], exp_slice: data[4].exp_slice + 1 } })
              : window.alert("Max Options Reached")
          }}>
          Add More
        </button>



      </form>

    </>
  )
}

export default Form4;