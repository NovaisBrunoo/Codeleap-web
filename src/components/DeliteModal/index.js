import './style.css';

function DeliteModal({ setOpenDelite, id }) {
    console.log(id)
    return (
        <div className='containerDeliteModal'>
            <div className='deliteModal'>
                <h2>Are you sure you want to delete this item?</h2>
                <div className='containerBtn'>
                    <button className='btn-cancel' onClick={() => setOpenDelite(false)}>Cancel</button>
                    <button className='btn-delete'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeliteModal;