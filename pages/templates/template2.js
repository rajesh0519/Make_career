// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react'


const Template2 = React.forwardRef(({data}, ref) => {

    if(!data) {
        return null;
      }
      else{
    

    return(
        <>

            <div ref={ref} className="t2_container">
                <div className="container2">
                
                    <div className="p_details2">
                        <span className="p_circle2">
                        </span>
                        <img src={data[0].image ? data[0].image : "/favicon.ico"} className="p_img2"></img>

                        <h1 className="name_text2">{data[0].name ? data[0].name : " Full Name "}</h1>

                        <h3>CONTACT</h3>
                        <hr />

                        <span className="contact_header2"><img src="/telephone.png" className="icon2" /> : 
                        <span className="contact_text2">{data[0].contact ? data[0].contact : "1234567890"}</span>
                        </span>
                        
                        <br />

                        <span className="contact_header2"><img src="/mail.png" className="icon2" />  : 
                        <span className="contact_text2">{data[0].email ? data[0].email : "demo@gmail.com"}</span>
                        </span>

                        <br />

                        <span className="contact_header2"><img src="/date-of-birth.png" className="icon2" />  : 
                        <span className="contact_text2">{data[0].dob ? data[0].dob : "2000-01-01"}</span>
                        </span>
                        
                        <h3>SKILLS</h3>
                        <hr />
                        
                        {
                            Array.apply(null, {length: data[5].skill_slice}).map((curElm,index)=>{
                                return(
                                    <span className="skills_container2" key={index}>
                                        <span className="skills_text2">{data[2].skills[index].name !== "" ? data[2].skills[index].name 
                                        : "Computer"}
                                        </span>
                                        
                                        <span className="slider_container2">
                                        <input type="range" min="0" max="3" value={data[2].skills[index].level ? data[2].skills[index].level : 1} className="skill_slider2"></input>
                                        </span>

                                    </span>
                                )
                            }
                            )
                        }
                       


                        

                    </div>

                    <div className="pro_details2">


                    <h3 className="about_me2">ABOUT ME</h3>
                        <hr />

                        <p >{data[0].about ? data[0].about 
                        : "I am a professional creative designer with 8 years of experience in management, advertisement, and computer-aided design. Proven ability to transform client ideas into beautiful design."}</p>            
    
                    
                        <h3>EDUCATION</h3>
                        <hr />

                        {
                            Array.apply(null, {length: data[5].educ_slice}).map((curElm,index)=>{
                                return(
                                    <>
                                    <span  key={index}>
                                        <span className="ed_header2">{data[1].education[index].name ? data[1].education[index].name
                                         : "Borcelle Institute "}</span>
                                        <span className="ed_text2">{data[1].education[index].degree ? data[1].education[index].degree 
                                        : "Master of Graphic Design "}</span>

                                    </span>
                                
                                    </>
                                )
                            })
                        }


                    <h3 >WORK EXPERIENCE</h3>
                    <hr />

                    {
                     
                     Array.apply(null, {length: data[5].exp_slice}).map((curElm,index)=>{
                            return(
                                <>
                                    <span key={index}>
                                        <span  className="exp_details2" >
                                            {data[3].exp[index].name ? data[3].exp[index].name + " / " + data[3].exp[index].duration 
                                            : "Liceria & Co.  /  Oct 2016 - present"}</span>
                                        <span className="exp_headers2" >{data[3].exp[index].work_position ? data[3].exp[index].work_position 
                                        : " Senior Designer "}</span>
                                        <span className="exp_text2">
                                            {data[3].exp[index].work_profile ? data[3].exp[index].work_profile 
                                            : "Incorporated integrated sustainable design solutions into projects, preparing 2D and 3D design drawings" }
                                        </span>
                                    </span>
                                    

                                </>
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
                                            <h3 className="other_heading2">{data[4].other[index].title}</h3>
                                            <hr />
                                            <span className="other_text2">
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

Template2.displayName = "Template2";

export default Template2;

// I am a web developer with 1.5 years of free lancing experience in web development, and database management. Proven ability to transform client ideas into beautiful design webapp.

// Work as a web developer and Database Manager for 1.5 years.
// Developed Website link : www.symbianssports.com
// Language Used : ReactJs , NextJS
// Deployed on : Vercel