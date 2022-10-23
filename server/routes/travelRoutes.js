import { Router } from "express";
import { getAllTravels, getTravelById, addTravel, updateTravel, deleteTravel } from "../controllers/travelControllers.js";

export const router = Router()

router.get('/', getAllTravels)
router.get('/:id', getTravelById)
router.post('/add', addTravel)
router.put('/:id', updateTravel)
router.delete('/:id', deleteTravel)