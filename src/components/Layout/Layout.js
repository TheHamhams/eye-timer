import { Col, Container, Row } from 'react-bootstrap'

import React from 'react'
import { Timer } from '../index'

const timerBase = 20
const breakBase = 20
const zero = 0

const tips = [
  ["Take eye breakBase.", "Throughout the day, give your eyes a break by looking away from your monitor. Try the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for at least 20 seconds."],
  ["Blink often to refresh your eyes.", "Many people blink less than usual when working at a computer, which can contribute to dry eyes. Blinking produces tears that moisten and refresh your eyes. Try to make it a habit to blink more often when looking at a monitor."],
  ["Check the lighting and reduce glare.", "Bright lighting and too much glare can strain your eyes and make it difficult to see objects on your monitor. The worst problems are generally from sources above or behind you, including fluorescent lighting and sunlight. Consider turning off some or all of the overhead lights."],
  ["Check the lighting and reduce glare.", "If you need light for writing or reading, use an adjustable desk lamp. Close blinds or shades, and avoid placing your monitor directly in front of a window or white wall. Place an anti-glare cover over the screen."],
  ["Adjust your monitor.", "Position your monitor directly in front of you about an arm's length away so that the top of the screen is at or just below eye level. It also helps to have a chair you can adjust."],
  ["Use a document holder.", "If you need to refer to print material while you work on your computer, place it on a document holder. Some holders are designed to be placed between the keyboard and the monitor; others are placed to the side. Find one that works for you. The goal is to reduce how much your eyes need to readjust and how often you turn your neck and head."],
  ["Adjust your screen settings.", "Enlarge the type for easier reading. And adjust the contrast and brightness to a level that's comfortable for you."]
]

export const Layout = () => {
  const tipNum = Math.floor(Math.random() * tips.length)

  
  return (
    <div className='background'>
      <Container className='black rounded mt-5'>
       <h1 className='text-center flame mt-5'>Eye Timer</h1>
      </Container>
      

      
      <Container className='d-flex p-5 my-5'>
        <Container>
          <Row className='d-flex'>
            <Col className='rounded black mx-5 p-3'>
              <Timer title={'Work'} mins={timerBase} secs={zero}/>
            </Col>

            <Col className='rounded black mx-5 p-3'>
              <Timer title={'Break'} mins={zero} secs={breakBase}/>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className='black py-3 my-5 rounded'>
        <h2 className='flame text-center'>Mayo Clinic Tip</h2>
        <p className='white text-center my-3'><strong>{tips[tipNum][0]}</strong></p> 
        <br />
        <p className='white text-center'>{tips[tipNum][1]}</p>
      </Container>
    </div>
  )
}
