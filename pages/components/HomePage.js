import Header from './Header';
import { useState , useEffect , useRef} from 'react'
import Form1 from '../forms/form1'
import Form2 from '../forms/form2'
import Form3 from '../forms/form3'
import Form4 from '../forms/form4'
import Form5 from '../forms/form5'

import Template1 from '../templates/template1'
import Template2 from '../templates/template2'


import { useReactToPrint } from 'react-to-print';


export default function HomePage() {

  const [data , setData] = useState([
    {
    name : "",
    email:"",
    dob : "",
    image : "",
    contact:"",
    about:""},
    {education:[
      {name : "",degree : ""},
      {name : "",degree : ""},
      {name : "",degree : ""},
      {name : "",degree : ""},
      {name : "",degree : ""},
      {name : "",degree : ""},
      {name : "",degree : ""},
      {name : "",degree : ""},
    ]
  },
    {skills:[
      {name:"", level:""},
      {name:"", level:""},
      {name:"", level:""},
      {name:"", level:""},
      {name:"", level:""},
      {name:"", level:""},
      {name:"", level:""},
      {name:"", level:""},
      {name:"", level:""},
      {name:"", level:""},

    ]
    },
    {exp:
      [
        {name: "", duration:"" , work_position:"",work_profile:""},
        {name: "", duration:"" , work_position:"",work_profile:""},
        {name: "", duration:"" , work_position:"",work_profile:""},
        {name: "", duration:"" , work_position:"",work_profile:""},
        {name: "", duration:"" , work_position:"",work_profile:""},
        {name: "", duration:"" , work_position:"",work_profile:""},
        {name: "", duration:"" , work_position:"",work_profile:""},
        {name: "", duration:"" , work_position:"",work_profile:""},
        {name: "", duration:"" , work_position:"",work_profile:""},
        {name: "", duration:"" , work_position:"",work_profile:""},
        
      ]
 
  },
  {other:[
    {title: "",text:""},
    {title: "",text:""},
    {title: "",text:""},
    {title: "",text:""},
    {title: "",text:""},
  ]
  },
    {formNo: 0,
      educ_slice:1,
    skill_slice:1,
    exp_slice:1,
    other_slice:1,
  },
  
]);
const [templateNo , setTemplateNo] = useState(0);

  const savedata = (index,dataName , target , id) => {
    if(!id){
      setData({...data, [index]:{...data[index] ,   [dataName]: target}});
    }
    else{
      setData({...data, [index]:{...data[index] ,   [dataName]: target}});
    }
      
  }

      const changeForm = (index,func) => {
        if(func == "add"){
          setData({...data , [index]: { ...data[index] ,formNo : data[index].formNo + 1}})  
        }
        else if(func == "sub"){
          setData({...data , [index]: { ...data[index] ,formNo : data[index].formNo - 1}})  

        }
        
      }

      useEffect(() => {

        const saved=  localStorage.getItem("Data");
        if(saved)
        {
            setData(JSON.parse(saved))

        }
        }, [])      

        useEffect(() => {
          localStorage.setItem("Data", JSON.stringify(data));
        }, [data])
        

        const componentRef = useRef();
        const handlePrint = useReactToPrint({
          content: () => componentRef.current,
        });

  return (
      <>

        <Header />

        <div className="homepage_container">

          {/* Form Container */}
          <div className="form_container">
                <span className="formNo_text">{data[5].formNo + 1 +  " / " + " 5 "}</span>
              {
                (()=>{
                  switch(data[5].formNo)
                  {
                    case 0:
                    return <Form1 data={data} setData = {setData} savedata={savedata}/>
                    break;
                    case 1:
                    return <Form2 data={data} setData = {setData} savedata={savedata}/>
                    break;
                    case 2:
                    return <Form3 data={data} setData = {setData} savedata={savedata}/>
                    break;
                    case 3:
                    return <Form4 data={data} setData = {setData} savedata={savedata}/>
                    break;
                    case 4:
                    return <Form5 data={data} setData = {setData} savedata={savedata}/>
                    break;

                    default: break;
                  }
                })()
              }

              

            

               {/* Button Container */}
                <div className="btn_container">

                    {data[5].formNo === 0 ?
                      ""
                      :
                      <button className="prev_btn"
                        onClick={(e)=>{e.preventDefault(); data[5].formNo !== 0 ? changeForm(5,"sub") : window.alert("Nothings There!")}}>
                        Prev</button>
                    }

                    {data[5].formNo === 4
                      ?
                        ""
                        :
                        <button className="next_btn" 
                        onClick={(e)=>{e.preventDefault(); data[5].formNo < 4 ? changeForm(5,"add") : window.alert("Please Submit")}}>
                        Next
                        </button>
                    }


                </div>

                {/* Submit Button */}
                {/* {data[5].formNo === 3?
                <input type="submit" value="Submit" className="submit_btn"></input>
                :
                ""
                }   */}
          
          </div>

          <div className="template_container">
          <div className="template_changer">
            <button onClick={()=>setTemplateNo(0)} >Template - 1</button>
            <button onClick={()=>setTemplateNo(1)} >Template - 2</button>

          </div>

          <div className="download_container">
                <button onClick={handlePrint}>Download!</button>
            </div>
            {
              templateNo === 0 ? <Template1 data={data} ref={componentRef}/> 
              : <Template2 data={data} ref={componentRef}/>
            }
            

          </div>

        </div>
      </>
    )
  }
  
