const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout,
} = require ('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

// Define routes for workouts
const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

router.get('/', getWorkouts)

router.get('/:id',getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router