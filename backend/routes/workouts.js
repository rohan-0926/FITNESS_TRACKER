const express = require('express')
const {getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout} = require('../controllers/workoutController')
const requireAuth = require("../middleware/requireAuth")

const router = express.Router()
router.use(requireAuth)

// GET ALL WORKOUTS
router.get('/',getWorkouts)

//GET A SINGLE WORKOUT
router.get('/:id',getWorkout)

//POST A NEW WORKOUT
router.post('/',createWorkout)

//DELETE A WORKOUT
router.delete('/:id',deleteWorkout)

//UPDATE A WORKOUT
router.patch('/:id',updateWorkout)

module.exports = router