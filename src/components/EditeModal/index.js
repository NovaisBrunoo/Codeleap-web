import './style.css';
import api from '../../api/api';
import { useState } from 'react';

function ModalEdite({ setOpen, id }) {
    const [formModal, setFormModal] = useState(
        {
            title: '',
            content: ''
        }
    )

    async function handleSubmit(event) {
        event.preventDefault()
        event.stopPropagation()
        try {
            await api.patch(`careers/${id}/`, {
                title: formModal.title,
                content: formModal.content
            });
            clear()
            setOpen(false)
        } catch (error) {
            console.log(error);
        }
    }
    function clear() {
        setFormModal({
            title: '',
            content: ''
        })
    }
    function handleChangeForm(event) {
        setFormModal({ ...formModal, [event.target.name]: event.target.value });
    }

    return (
        <div className='containerModal'>
            <div className='modal'>
                <h1 className='titleModal'>Edite Item</h1>
                <form className='formEdite' onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        placeholder='Hello world'
                        name='title'
                        onChange={(e) => handleChangeForm(e)}
                        value={formModal.title}

                    />

                    <label htmlFor='Content'>Content</label>
                    <textarea
                        name="content"
                        placeholder='Content here'
                        cols="23" rows="4" id="mensagem" wrap="hard"
                        onChange={(e) => handleChangeForm(e)}
                        value={formModal.content}

                    >
                    </textarea>
                    <div className='containerBtn'>
                        <button className='btn-cancel' onClick={() => setOpen(false)}>Cancel</button>
                        <button className='btn-save'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalEdite