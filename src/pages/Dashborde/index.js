import { useEffect, useState } from 'react';
import './style.css';
import TrashVetor from '../../assets/Vector.svg'
import api from '../../api/api';
import EditeVetor from '../../assets/bx_bx-edit.svg'
import { getItem } from '../../utils/storage';


function Dashborde() {
  const [arrayPost, setArrayPost] = useState([]);
  const username = getItem('token')
  const [formPost, setFormPost] = useState(
    {
      title: '',
      content: ''
    }
  )
  function handleChangeForm(event) {
    setFormPost({ ...formPost, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    console.log('entro no submit')
    event.preventDefault()
    try {
      const response = await api.post('/careers/', {
        username,
        title: formPost.title,
        content: formPost.content
      });

      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }


  async function handlepost() {
    try {
      const response = await api.get('/careers/');
      setArrayPost(response.data.results)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handlepost()
  }, [arrayPost])

  return (
    <div className='containerDashborde'>
      <div className='bgImg'>
        <div className='container'>
          <h1>CodeLeap Network</h1>

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
                onChange={(e) => handleChangeForm(e)}
                cols="23" rows="4" id="mensagem" wrap="hard">
              </textarea>
              <button className='btn-post'>Create</button>
            </form>
          </div>
          <div className='containerContents'>

            {arrayPost.map((post) => (

              <div className='containerComments' key={post.id}>

                <div className='containerTitle'>
                  <h2>{post.title}</h2>
                  {post.username === username && <div className='vector'>
                    <img src={TrashVetor} alt='Vector trash' />
                    <img src={EditeVetor} alt='Vector edite' />
                  </div>
                  }
                </div>
                <div className='comments'>
                  <p>
                    {post.content}
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