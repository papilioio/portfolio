import React, { FC } from 'react'

type Props = {
  size?: number
  color?: string
}

export const Icon: FC<Props> = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={props.size || 32}
            height={props.size || 32}
            fill={props.color || '#000'}
            stroke="none"
            viewBox="0 0 32.61 32.61"
         >
            <path d="M8.41,24.32l7.9-18,7.9,18Z"/>
            <path d="M16.31,1.27a14.95,14.95,0,1,1-5.85,1.18,15,15,0,0,1,5.85-1.18m0-1.27a16.31,16.31,0,1,0,16.3,16.31A16.31,16.31,0,0,0,16.31,0Z"/>
        </svg>
    )
}