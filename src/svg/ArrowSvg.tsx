import { FC } from "react"

interface ArrowSvg {
    direction?: "left" | "right"
}

const ArrowSvg :FC<ArrowSvg> = ({direction = 'left'}) => {
    return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 8L3 7.9989M3 7.9989L7.5 3M3 7.9989L7.5 13" stroke="#3F81FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    )
    
}

export default ArrowSvg