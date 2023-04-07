import { useState } from 'react';
import Header from '../../components/Header';
import './style.css';

function Dashborde() {
    const [formPost, setFormPost] = useState(
        {
            title: ''
        }
    )
    return (
        <div className='containerDashborde'>
            <div className='bgImg'>
            </div>
            <Header />
            <div className='container'>
                <div className='containerTitle'>
                    <h1>CodeLeap Network</h1>
                </div>

                <div className='containerPost'>
                    <form className='formPost'>
                        <label htmlFor='title'>Title</label>
                        <input
                            className='titleinput'
                            type='text'
                            placeholder='Hello world'
                            value={formPost.title}
                            name='title'
                        />
                        <label htmlFor='Content'>Content</label>
                        <input
                            className='contentinput'
                            type='text'
                            placeholder='Content here'
                            value={formPost.title}
                            name='content'
                        />
                    </form>

                </div>
            </div>

        </div>
    );
}

export default Dashborde 