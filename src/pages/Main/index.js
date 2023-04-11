import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Bgvideo from '../../components/Bgvideo';
import Header from '../../components/Header';
import { setItem } from '../../utils/storage';


function Main() {
  const navigate = useNavigate('')
  const [form, setForm] = useState({
    username: ''
  })
  function handleChangeForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleNavi() {
    setItem('token', form.username)
    navigate('/Dashborde')
  }
  return (
    <div className="containerMain">
      <Bgvideo />
      <Header />
      <form className='formMain' onSubmit={() => handleNavi()}>
        <strong>
          Welcome to CodeLeap network!
        </strong>

        <label htmlFor='username'>Please enter your username</label>
        <input
          type='text'
          name='username'
          placeholder='John doe'
          value={form.username}
          onChange={(e) => handleChangeForm(e)}
        />
        {form.username
          ? <button>Enter</button>
          : <button className='btn-notuser'>Enter</button>
        }
      </form>
    </div>
  )
}

export default Main;
