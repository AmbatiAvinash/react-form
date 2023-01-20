import React, {useState, useEffect} from 'react';

const Userform = () => {
  const initialValues = {userID: '', name: '', password: '', address: '', country: '', zipcode: '', email: '', sex: '', language: '', about: ''}
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(form));
    console.log(form);
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;    
    setForm({...form, [name]: value});
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0){
      console.log(form);
    }
  }, [errors])

  const validate = (values) => {

    const errors = {};
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let nameRegex = /^[A-Za-z]+$/
    let zipRegex = /^[0-9]*$/

    if(!values.userID){
      errors.userID = 'User ID is required'
    }else if(values.userID.length < 5 || values.userID.length > 12){
      errors.userID = 'Must be in between 5 and 12'
    }
    if(!values.name){
      errors.name = 'Name is required'
    }else if(!nameRegex.test(values.name)){
      errors.name = 'Must be alphabets only';
    }
    if(!values.password){
      errors.password = 'Password is required'
    }else if(values.password.length < 7 || values.password.length > 12){
      errors.password = 'Must be in between 7 and 12'
    }
    if(!values.country){
      errors.country = 'Country is required'
    }
    if(!values.zipcode){
      errors.zipcode = 'zipcode is required'
    }else if(!zipRegex.test(values.zipcode)){
      errors.zipcode = 'Must be numbers only';
    }
    if(!values.email){
      errors.email = 'email is required'
    }else if(!regex.test(values.email)){
      errors.email = 'Please enter valid email'
    }
    if(!values.sex){
      errors.sex = 'Gender is required'
    }
    if(!values.language){
      errors.language = 'language is required'
    }

    return errors
  }

  return (
    <>
    <h2>Registration form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>User ID: </label>
        <input type='text' name='userID' value={form?.userID} onChange={handleChange}/>
        <p className='error'>{errors?.userID}</p>
      </div>

      <div>
        <label>Name: </label>
        <input type='text' name='name' value={form?.name} onChange={handleChange}/>
        <p className='error'>{errors?.name}</p>
      </div>

      <div>
        <label>Password: </label>
        <input type='password' name='password' value={form?.password} onChange={handleChange}/>
        <p className='error'>{errors?.password}</p>
      </div>

      <div>
        <label>Address: </label>
        <textarea name='address' value={form?.address} row='5' column='10' onChange={handleChange}/>
        
      </div>

      <div>
        <label>Country: </label>
        <select name='country' onChange={handleChange}>
          <option value=''>Select a country </option> 
          <option value='India'>India </option> 
          <option value='USA'>USA </option> 
        </select>
        <p className='error'>{errors?.country}</p>
      </div>

      <div>
        <label>Zipcode </label>
        <input type='text' name='zipcode' value={form?.zipcode} onChange={handleChange}/>
        <p className='error'>{errors?.zipcode}</p>
      </div>

      <div>
        <label>Email: </label>
        <input type='text' name='email' value={form?.email} onChange={handleChange}/>
        <p className='error'>{errors?.email}</p>
      </div>

      <div>
        <label>Sex </label>
        <input type='radio' name='sex' value='Male' onChange={handleChange}/>
        <label>Male</label>

        <input type='radio' name='sex' value='Female' onChange={handleChange}/>
        <label>Female</label>
        
      <p className='error'>{errors?.sex}</p>
      </div>

      <div>
      <label>Language </label>
      <input type='checkbox' name='language' value='English' onChange={handleChange}/>English
      <input type='checkbox' name='language' value='Non-English' onChange={handleChange}/>Non-English
      <p className='error'>{errors?.language}</p>
      </div>

      <div>
        <label>About: </label>
        <textarea name='about' value={form?.about} row='5' column='10' onChange={handleChange}/>
        
      </div>

      <button>Signup</button>
    </form>
    </>
  )
}

export default Userform;