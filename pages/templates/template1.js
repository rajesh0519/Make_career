// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react'


const Template1 = React.forwardRef(({data}, ref) => {

    if(!data) {
        return null;
      }
      else{
    

    return(
        <>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


            <div ref={ref} className="t1_container">
                <div className="container">
                
                    <div className="p_details">
                        <span className="p_circle">
                        <img src={data[0].image ? data[0].image : "/favicon.ico"} className="p_img"></img>
                        </span>

                        <h3 className="about_me">ABOUT ME</h3>
                        <hr />
                      
                        <p>{data[0].about ? data[0].about 
                        : "I am a professional creative designer with 8 years of experience in management, advertisement, and computer-aided design. Proven ability to transform client ideas into beautiful design."}</p>            

                        <h3>EDUCATION</h3>
                        <hr />

                        {
                            Array.apply(null, {length: data[5].educ_slice}).map((curElm,index)=>{
                                return(
                                    <>
                                    <span  key={index}>
                                        <span className="ed_header">{data[1].education[index].name ? data[1].education[index].name
                                         : "Borcelle Institute "}</span>
                                        <span className="ed_text">{data[1].education[index].degree ? data[1].education[index].degree 
                                        : "Master of Graphic Design "}</span>

                                    </span>
                                
                                    </>
                                )
                            })
                        }


                        <h3>CONTACT</h3>
                        <hr />

                        <span className="contact_header"><img src="/icons8-call-50.png" className="icon" /> : 
                        <span className="contact_text">{data[0].contact ? data[0].contact : "1234567890"}</span>
                        </span>
                        
                        <br />

                        <span className="contact_header"><img src="/icons8-mail-50.png" className="icon" />  : 
                        <span className="contact_text">{data[0].email ? data[0].email : "demo@gmail.com"}</span>
                        </span>

                        <br />

                        <span className="contact_header"><img src="/icons8-birth-date-50.png" className="icon" />  : 
                        <span className="contact_text">{data[0].dob ? data[0].dob : "2000-01-01"}</span>
                        </span>

                    </div>

                    <div className="pro_details">

                    <h1 className="name_text">{data[0].name ? data[0].name : " Full Name "}</h1>

                    <h3>WORK EXPERIENCE</h3>
                    <hr />

                    {
                     
                     Array.apply(null, {length: data[5].exp_slice}).map((curElm,index)=>{
                            return(
                                <>
                                    <span key={index}>
                                        <span  className="exp_details" >
                                            {data[3].exp[index].name ? data[3].exp[index].name + " / " + data[3].exp[index].duration 
                                            : "Liceria & Co.  /  Oct 2016 - present"}</span>
                                        <span className="exp_headers" >{data[3].exp[index].work_position ? data[3].exp[index].work_position 
                                        : " Senior Designer "}</span>
                                        <span className="exp_text">
                                            {data[3].exp[index].work_profile ? data[3].exp[index].work_profile 
                                            : "Incorporated integrated sustainable design solutions into projects, preparing 2D and 3D design drawings" }
                                        </span>
                                    </span>
                                    

                                </>
                            )
                        }
                        )
                    }



                    <h3>SKILLS</h3>
                    <hr />
                    
                    {
                        Array.apply(null, {length: data[5].skill_slice}).map((curElm,index)=>{
                            return(
                                <span className="skills_container" key={index}>
                                    <span className="skills_text">{data[2].skills[index].name !== "" ? data[2].skills[index].name 
                                    : "Computer"}
                                    </span>
                                    
                                    <span className="slider_container">
                                      <input type="range" min="0" max="3" value={data[2].skills[index].level} className="skill_slider"></input>
                                    </span>

                                  </span>
                            )
                        }
                        )
                    }

                  

                        {
                            Array.apply(null, {length: data[5].other_slice}).map((curElm,index)=>{
                                return(
                                    <>
                                        {
                                            data[4].other[index].title === "" ? "" : 
                                            <>
                                            <h3 className="other_heading">{data[4].other[index].title}</h3>
                                            <hr />
                                            <span className="other_text">
                                                {data[4].other[index].text}
                                            </span>
                                            </>
                                            
                                        }
                                        
                                    </>
                                )
                            })
                        }

                        

                    </div>

                </div>
            </div>

        </>
    )
                }
});

Template1.displayName = "Template1";

export default Template1;

// I am a web developer with 1.5 years of free lancing experience in web development, and database management. Proven ability to transform client ideas into beautiful design webapp.

// Work as a web developer and Database Manager for 1.5 years.
// Developed Website link : www.symbianssports.com
// Language Used : ReactJs , NextJS
// Deployed on : Vercel