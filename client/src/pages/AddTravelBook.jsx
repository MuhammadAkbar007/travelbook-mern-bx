import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddTravelBook = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        await axios.post('http://localhost:5000/api/travel/add', { title, descr, image })
        navigate('/')
    }

    return (
        <div className="container mt-2 bg-dark rounded text-white p-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id='title' name='title' placeholder='Title'
                        onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="descr" className="form-label">Description</label>
                    <input type="text" className="form-control" id='descr' name='descr' placeholder='Description'
                        onChange={e => setDescr(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id='image' name='image' placeholder='Image URL'
                        onChange={e => setImage(e.target.value)} />
                </div>
                <button className="btn btn-success" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddTravelBook