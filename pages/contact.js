import React, {useState} from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [desc, setdesc] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
  
    const data = {phone, name, email, desc};
    if(name!=""&&email!=""&&phone!=""&&desc!=""){ 
    fetch("http://localhost:3000/api/postcontact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }
    ).then(response => response.text())
    .then(data => {
      console.log('Success', data);
      alert("Thanks for contacting us");
      setname("");
      setemail("");
      setphone("");
      setdesc("");
    })
    .catch((error)=>{console.error('Error: ', error)})
  }else{
    alert("Please fill all the fields")
  }
}


  const handleChange = (e)=>{
    if(e.target.name == 'phone'){
      setphone(e.target.value)
    }
    else if(e.target.name == 'name'){
      setname(e.target.value)
    }
    else if(e.target.name == 'desc'){
      setdesc(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
  }

  return (
    <>
    <div className={styles.container}>
    <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
      <div className={styles.mb3}>
    <label htmlFor="name" className={styles.formlabel}>Name</label>
    <input type="text" value={name} onChange={handleChange} className={styles.htmlFormcontrol} id="name" name="name" aria-describedby="emailHelp"/>
  </div>

  <div className={styles.mb3}>
    <label htmlFor="email" className={styles.formlabel}>Email address</label>
    <input type="email" value={email} onChange={handleChange} className={styles.htmlFormcontrol} id="email" name='email' aria-describedby="emailHelp"/>
  </div>

  <div className={styles.mb3}>
    <label htmlFor="phone" className={styles.formlabel}>Phone no</label>
    <input type="phone" value={phone} onChange={handleChange} className={styles.htmlFormcontrol} id="phone" name='phone' aria-describedby="emailHelp"/>
  </div>

  <div className={styles.mb4}>
  <label htmlFor="desc" className={styles.formlabel}>Your Concern: </label>
  <textarea className={styles.input} value={desc} onChange={handleChange} name='desc' id="desc"/>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>

  )
}

export default Contact;
