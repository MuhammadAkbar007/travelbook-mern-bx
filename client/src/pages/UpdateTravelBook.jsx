import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateTravelBook = () => {

    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')
    const [image, setImage] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    const fetchData = async _ => {
        const { data } = await axios.get(`http://localhost:5000/api/travel/${id}`)
        setTitle(data.travel.title)
        setDescr(data.travel.descr)
        setImage(data.travel.image)
    }

    useEffect(_ => {
        fetchData()
    }, [])

    const handleUpdate = async e => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/api/travel/${id}`, { title, descr, image })
        navigate('/')
    }

    return (
        <div className="container mt-2 bg-dark rounded text-white p-5">
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id='title' name='title' placeholder='Title' value={title}
                        onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="descr" className="form-label">Description</label>
                    <input type="text" className="form-control" id='descr' name='descr' placeholder='Description' value={descr}
                        onChange={e => setDescr(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id='image' name='image' placeholder='Image URL' value={image}
                        onChange={e => setImage(e.target.value)} />
                </div>
                <button className="btn btn-success" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UpdateTravelBook