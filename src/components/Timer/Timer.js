import React, {useEffect, useState} from 'react'

import { Button } from 'react-bootstrap'
import beep from '../../assets/sounds/beep.mp3'
import useSound from 'use-sound'

export const Timer = (props) => {

    const [seconds, setSeconds] = useState(props.secs)
    const [minutes, setMinutes] = useState(props.mins)
    const [on, setOn] = useState(false)
    // const [blink, setBlink] = useState(false)
    const [hide, setHide] = useState(false)

    const [beepActive] = useSound(
        beep, {volume: 1}
    )
  
    let timer
    useEffect(() => {
        if (on) {
            if (minutes === 0 && seconds === 0) {
                beepActive()
                stop()
            }
            timer = setInterval(() => {
                setSeconds(seconds - 1)
                
                if (seconds === 0 && minutes === 0) {
                    setMinutes(0)
                    setSeconds(0)
                    clearInterval(timer)
                }

                if (seconds === 0) {
                setMinutes(minutes - 1)
                setSeconds(59)
                }
                
                
            }, 1000)
        }
      return () => clearInterval(timer)
    })

    const restart = () => {
        setMinutes(props.mins)
        setSeconds(props.secs)
        setOn(false)
    }

    const stop = () => {
        setOn(false)
    }
    
    const start = () => {
        setOn(true)
        timer = setInterval(() => {
            setSeconds(seconds - 1)
            
            if (seconds === 0 && minutes === 0) {
                setMinutes(0)
                setSeconds(0)
                clearInterval(timer)
            }
    
            if (seconds === 0) {
              setMinutes(minutes - 1)
              setSeconds(59)
            }
            
            
          }, 1000) 
    }

    
    return (
        
        <div className='black '>

            <h1 className='flame text-center'>{props.title} Timer</h1>
            <h2 className='white text-center'><span style={{hidden: {hide}}}>{minutes<10 ? `0${minutes}` : minutes}</span> : {seconds<10? `0${seconds}` : seconds} <Button onClick={restart}>Restart</Button></h2> 
            
            <div className='d-flex justify-content-center py-1'>
                <Button onClick={start} className="btn btn-success mx-3">Start</Button>
                <Button onClick={stop} className="btn btn-danger mx-3">Stop</Button>
            </div>
            
        </div>
    )
}
