
export function Form1({data ,setData , savedata}) {


  if(!data) {
  return null}
  else{

  return (
    <>
    
        {/* Form 1 */}
        <form className="form">
              
              {/* Form Header */}

              <span className="form_header">Personal Details -</span>

              <label className="label">Full Name :
                <input className="input" type="text" name="name" placeholder="Enter your Full Name" value={!data[0] ? "" : data[0].name}
                onChange={(e)=> savedata(0,e.target.name,e.target.value)} required>
                </input>
              </label>
              <label className="label">Email :
                <input className="input" type="email" name="email" placeholder="Enter your Full Name" value={!data[0] ? "" : data[0].email}
                onChange={(e)=> savedata(0,e.target.name,e.target.value)} required></input>
              </label>
              <label className="label">Date of Birth :
                <input className="input" type="date" name="dob" placeholder="Enter your Full Name" value={!data[0] ? "" : data[0].dob}
                onChange={(e)=> savedata(0,e.target.name,e.target.value)} required></input>
              </label>
              
              <label className="label">Contact Number :
                <input className="input" type="tel" name="contact" placeholder="Enter your Full Name" value={!data[0] ? "" : data[0].contact}
                 onChange={(e)=> savedata(0,e.target.name,e.target.value)} required></input>
              </label>
              <label className="label">About me :
                <textarea type="text" name="about" placeholder="Enter about yourself" value={!data[0] ? "" : data[0].about}
                onChange={(e)=> savedata(0,e.target.name,e.target.value)} required></textarea>
              </label>
              <label className="label">Image : 
                <input className="input" type="file" accept="image/*" name="image" placeholder="Upload your photo here" 
                onChange={(e)=>{
                  console.log(e.target.files[0]) 
                const reader = new FileReader();
                if(e.target.files[0]){
                  reader.readAsDataURL(e.target.files[0]);
                  reader.onloadend=()=>{
                    console.log(reader.result)
                    savedata(0,e.target.name,reader.result)
                }
                }
                } } required>
                </input>
                <img src={ data[0].image ? data[0].image : ""}   alt=".." className="img_upload"></img>
              </label>
                
         
              </form>

    </>
  )
              }
}

export default Form1;