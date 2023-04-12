import './style.css';
import api from '../../api/api';

function DeliteModal({ setOpenDelite, id }) {
    async function handleDelite() {
        try {
            await api.delete(`careers/${id}/`)
            setOpenDelite(false)
        } catch (error) {
            console.log('error')
        }
    }
    return (
        <div className='containerDeliteModal'>
            <div className='deliteModal'>
                <h2>Are you sure you want to delete this item?</h2>
                <div className='containerBtn'>
                    <button className='btn-cancel' onClick={() => setOpenDelite(false)}>Cancel</button>
                    <button className='btn-delete' onClick={() => handleDelite()}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeliteModal;