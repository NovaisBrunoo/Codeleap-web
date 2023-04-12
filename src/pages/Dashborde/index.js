import { useEffect, useState } from 'react';
import api from '../../api/api';
import TrashVetor from '../../assets/Vector.svg';
import EditeVetor from '../../assets/bx_bx-edit.svg';
import ModalEdite from '../../components/EditeModal';
import { getItem, clear } from '../../utils/storage';
import './style.css';
import logout from '../../assets/logout.svg'
import DeliteModal from '../../components/DeliteModal';
import { useNavigate } from "react-router-dom";

function Dashborde() {
  const navigate = useNavigate()
  const [id, setId] = useState('');
  const [open, setOpen] = useState(false)
  const [openDelite, setOpenDelite] = useState(false)
  const [control, setControl] = useState('controle')
  const localarray = [];
  const [arrayPost, setArrayPost] = useState([]);
  const user = getItem('token')
  const [formPost, setFormPost] = useState(
    {
      title: '',
      content: ''
    }
  )
  function handleChangeForm(event) {
    setFormPost({ ...formPost, [event.target.name]: event.target.value });
  }

  function clearfrom() {
    setFormPost({
      title: '',
      content: ''
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    event.stopPropagation()
    try {
      await api.post('careers/', {
        username: user,
        title: formPost.title,
        content: formPost.content
      });
      handlepost()
      clearfrom()
    } catch (error) {
      console.log(error);
    }
  }

  async function handlepost() {
    try {
      const { data: { results } } = await api.get('careers/?limit=1000&offset=0');
      localarray.push([...results])
      setArrayPost(results)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (control === 'controle') {
      handlepost()
      setControl('banana')
    }

    if (control === 'banana') {
      setTimeout(() => {
        handlepost()

      }, 10000);
    }
  }, [arrayPost, control])

  function handleModal(e) {
    setId(e.target.id)
    setOpenDelite(true)
  }

  function HandleModalDelete(e) {
    setId(e.target.id)
    setOpen(true)
  }

  function handleLogout() {
    clear()
    navigate('/')
  }
  return (
    <div className='containerDashborde'>
      <div className='bgImg'>
        <div className='container'>
          {open &&
            <ModalEdite
              setOpen={setOpen}
              id={id}
            />}
          {openDelite &&
            <DeliteModal setOpenDelite={setOpenDelite} id={id} />
          }
          <h1>CodeLeap Network</h1>
          <img className='btnLogout' onClick={() => handleLogout()} src={logout} alt='logout page' />
          <div className='containerForm'>
            <form className='formPost' onSubmit={handleSubmit}>
              <h1>What’s on your mind?</h1>
              <label htmlFor='title'>Title</label>
              <input
                className='titleinput'
                type='text'
                placeholder='Hello world'
                value={formPost.title}
                name='title'
                onChange={(e) => handleChangeForm(e)}
              />
              <label htmlFor='Content'>Content</label>
              <textarea
                className='contentinput'
                name="content"
                value={formPost.content}
                placeholder='Content '
                onChange={(e) => handleChangeForm(e)}
                cols="23" rows="4" id="mensagem" wrap="hard">
              </textarea>
              <button className='btn-post'>Create</button>
            </form>
          </div>
          <div className='containerContents'>

            {arrayPost.map(({ title, username, content, id, created_datetime }) => (

              <div className='containerComments' key={id}>

                <div className='containerTitle'>
                  <h2>{title}</h2>
                  {username === user && <div className='vector'>
                    <img id={id} src={TrashVetor} alt='Vector trash' onClick={handleModal} />
                    <img id={id} src={EditeVetor} alt='Vector edite' onClick={HandleModalDelete} />
                  </div>
                  }
                </div>
                <span className='userSpan'>@{username}</span>
                <div className='comments'>
                  <p>
                    {content}
                  </p>

                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default Dashborde