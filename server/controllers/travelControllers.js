import travelModel from "../models/travelModel.js"

export const getAllTravels = async (req, res) => {
    try {
        const travels = await travelModel.find()
        res.status(200).json({ message: 'Success', travels: travels.reverse() })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message, error })
    }
}

export const getTravelById = async (req, res) => {
    try {
        const travel = await travelModel.findById(req.params.id)
        if (!travel) res.status(404).json({ message: 'Not found' })
        res.status(200).json({ message: 'Success', travel })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message, error })
    }
}

export const addTravel = async (req, res) => {
    try {
        const { title, image, descr } = req.body
        if (!title || !image || !descr) res.status(404).json({ message: "Items can't be empty" })
        const newTravel = await travelModel.create({ title, image, descr })
        res.status(201).json({ message: 'Created', newTravel })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message, error })
    }
}

export const updateTravel = async (req, res) => {
    try {
        const { title, image, descr } = req.body
        const editingTravel = await travelModel.findByIdAndUpdate(req.params.id, { title, image, descr })
        res.status(200).json({ message: 'Updated', editingTravel })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message, error })
    }
}

export const deleteTravel = async (req, res) => {
    try {
        await travelModel.findByIdAndRemove(req.params.id)
        res.status(200).json({ message: 'Deleted' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message, error })
    }
}