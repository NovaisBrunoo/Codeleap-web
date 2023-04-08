import { useState } from 'react';
import './style.css';
import TrashVetor from '../../assets/Vector.svg'
import EditeVetor from '../../assets/bx_bx-edit.svg'


function Dashborde() {
  const [formPost, setFormPost] = useState(
    {
      title: '',
      content: ''
    }
  )
  function handleChangeForm(event) {
    setFormPost({ ...formPost, [event.target.name]: event.target.value });
  }
  return (
    <div className='containerDashborde'>
      <div className='bgImg'>
        <div className='container'>
          <h1>CodeLeap Network</h1>

          <form className='formPost'>
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
              name="mensagem"
              onChange={(e) => handleChangeForm(e)}
              cols="23" rows="4" id="mensagem" wrap="hard">
            </textarea>
            <button className='btn-post'>Create</button>
          </form>

          <div className='containerComments'>
            <div className='containerTitle'>
              <h2>My First Post at CodeLeap Network!</h2>
              <div className='vector'>
                <img src={TrashVetor} alt='Vector trash' />
                <img src={EditeVetor} alt='Vector edite' />
              </div>
            </div>
            <div className='comments'>
              <p>
                turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget
              </p>

            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default Dashborde