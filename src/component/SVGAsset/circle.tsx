import React, { FC } from 'react'

type Props = {
  size?: number
  color?: string
}

export const CircleLarge: FC<Props> = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={props.size || 360}
            height={props.size || 360}
            fill={props.color || '#000'}
            stroke="none"
            viewBox="0 0 360 360"
         >
            <circle cx="180" cy="180" r="180"/>
        </svg>
    )
}