import React, { FC } from 'react'

import { useAnimationFrame } from '@util/animationHelper'

type Props = {
    width?: number | string,
    height?: number,
    color?: string
    numberOfPoints?: number,
}


const initPoints = (numberOfPoints?) => {
    let _points = []
    const _numPoints = numberOfPoints || 10
    _points.push(0.0 + ',' + 240.0)
    for (let i = 0; i < _numPoints; i++) {
        const maxY = 32 * (i / (_numPoints / 2))
        const x = (890 / _numPoints) * i
        const y = 240 + (Math.random() * maxY - Math.random() * maxY)
        _points.push(x.toFixed(2) + ',' + y.toFixed(2))
    }
    _points.push(890 + ',' + 240)
    return _points
}

const createCurve = (points) => {
    let curves = []
    for (let i = 0; i < points.length; i++) {
        const _p = points[i]
        let _c = ''
        if (i == 0) {
            _c = 'M' + _p
        // } else if (i < points.length - 2) {
        //     if (i % 2 > 0) {
        //         _c = 'S' + _p
        //     } else {
        //         _c = _p
        //     }
        // } else if (i < points.length - 1) {
        //     _c = 'S' + _p
        } else {
            _c = _p
        }

        curves.push(_c)
    }
    return curves
}

const movePoints = (p:string[], np:string[]) => {
    let _newPoints = []
    for (let i = 0; i < p.length; i++) {
        const _cx = p[i].split(',')[0]
        const _cy = p[i].split(',')[1]
        const _nx = np[i].split(',')[0]
        const _ny = np[i].split(',')[1]
        const newX: number = Number(_cx + (Number(_nx) - Number(_cx)) * 0.1)
        const newY: number = Number(_cy + (Number(_ny) - Number(_cy)) * 0.1)
        _newPoints.push(newX + ',' + newY)
    }
    // console.log(_newPoints)
    return _newPoints
}

export const SimpleLine: FC<Props> = (props: Props) => {
    let points = initPoints()
    let nextPoints = initPoints()
    let curves = points
    const [count, setCount] = React.useState(0)
    useAnimationFrame(deltaTime => {
        // Pass on a function to the setter of the state
        // to make sure we always have the latest state
        setCount(prevCount => (prevCount + deltaTime * 0.01) % 100)
        if (deltaTime > 2000) {
            nextPoints = initPoints()
        }
        curves = movePoints(points,nextPoints)
    })

    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg"
            width="100%"
            // height={props.height || 480}
            fill="none"
            stroke={props.color || '#FFF'}
            strokeWidth="1.0"
            strokeMiterlimit="10"
            viewBox="0 0 890 480"
        >
            <path d={ createCurve( curves ).join(' ')} />
        </svg>
        
        <div>{Math.round(count)}</div>
        </>
    )
}
