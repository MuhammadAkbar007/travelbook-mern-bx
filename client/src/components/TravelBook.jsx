import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const TravelBook = () => {

    useEffect(() => { fetchData() }, [])

    const [travels, setTravels] = useState([])
    const [id, setId] = useState('')

    const fetchData = async () => {
        const { data: { travels } } = await axios.get('http://localhost:5000/api/travel')
        setTravels(travels)
    }

    const handleDelete = async e => {
        e.preventDefault()
        await axios.delete(`http://localhost:5000/api/travel/${id}`)
        fetchData()
    }

    return (
        <div className='container'>
            {travels.map(travel =>
                <div className="row mb-3" key={travel._id}>
                    <div className="col-8 offset-2">
                        <div className="card bg-dark text-white">
                            <img src={travel.image}
                                style={{ height: '30rem' }} alt="img" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{travel.title}</h5>
                                <p className="card-text">{travel.descr}</p>
                            </div>
                            <div className="card-footer bg-warning d-flex">
                                <Link to={`/update/${travel._id}`}><button className='btn btn-primary'>Edit</button></Link>
                                <form onSubmit={handleDelete}>
                                    <button type='submit' className='btn btn-danger mx-5' onClick={() => setId(travel._id)}>Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default TravelBook