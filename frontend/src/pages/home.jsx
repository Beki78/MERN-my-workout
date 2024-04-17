import React from 'react'
import { useState, useEffect } from 'react'

function home() {
    const [workouts, setWorkouts] = useState(null)
    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkout()
    },[])
  return (
    <div>
      <div>
        {workouts && workouts.map((workouts)=>(
            <p key={workouts._id}>{workouts.title}</p>
        ))}
      </div>
    </div>
  )
}

export default home
