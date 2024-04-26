import React from 'react'
import { color, motion } from 'framer-motion'


export default function Scrolltriggered() {
    return (

        <>
            <Box color="purple"/>
            <Box color="blue"/>
        </>
    )
}


function Box(color) {
    console.log(color)
    return (
        <motion.div
            className='box'
            style={{
                background: color.color
            }} initial={{
                opacity: 0, scale: 0, x: 600
            }} whileInView={{
                opacity: 1,
                scale: 1,
                x: 0
            }} transition={{
                duration: 0.6
            }}
            animate={{
                x: 100
            }}>

            <h2>Hello World</h2>
        </motion.div>

    );
}