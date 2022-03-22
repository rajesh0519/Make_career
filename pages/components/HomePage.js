import Header from './Header';
import { useState , useEffect , useRef} from 'react'
import Form1 from '../forms/form1'
import Form2 from '../forms/form2'
import Form3 from '../forms/form3'
import Form4 from '../forms/form4'
import Template1 from '../templates/template1'

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
    {formNo: 0,
      educ_slice:1,
    skill_slice:1,
    exp_slice:1,
  }
]);

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

              {/* {
                (()=>{
                  switch(data[4].formNo)
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

                    default: break;
                  }
                })()
              } */}

<Form1 data={data} setData = {setData} savedata={savedata}/>
<Form2 data={data} setData = {setData} savedata={savedata}/>
<Form3 data={data} setData = {setData} savedata={savedata}/>
                    <Form4 data={data} setData = {setData} savedata={savedata}/>
              

            

               {/* Button Container */}
                <div className="btn_container">

                    {data[4].formNo === 0 ?
                      ""
                      :
                      <button className="prev_btn"
                        onClick={(e)=>{e.preventDefault(); data[4].formNo !== 0 ? changeForm(4,"sub") : window.alert("Nothings There!")}}>
                        Prev</button>
                    }

                    {data[4].formNo === 3
                      ?
                        ""
                        :
                        <button className="next_btn" 
                        onClick={(e)=>{e.preventDefault(); data[4].formNo < 3 ? changeForm(4,"add") : window.alert("Please Submit")}}>
                        Next
                        </button>
                    }


                </div>

                {/* Submit Button */}
                {data[4].formNo === 3?
                <input type="submit" value="Submit" className="submit_btn"></input>
                :
                ""
                }  
          
          </div>

          <div className="template_container">
          
          <div className="download_container">
                <button onClick={handlePrint}>Download!</button>
            </div>
            <Template1 data={data} ref={componentRef}/>
            {/* Helol */}
          </div>

        </div>
      </>
    )
  }
  
