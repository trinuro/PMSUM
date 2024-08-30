'use client';
import { useState } from 'react';

interface highlightCardProp{
    index : Number;
    children : string;
}

export default function Highlight_card({index, children}:highlightCardProp){
    const [showingFront, setShowingFront] = useState(true);

    const handleClick = () =>{
        const current = showingFront
        console.log(current)
        const frontOfCard = document.getElementById(`highlighted-activity-front-${index}`)
        const backOfCard = document.getElementById(`highlighted-activity-back-${index}`)
        // console.log(currentActivityCard?.style.display)
        
        if(showingFront){ 
            setShowingFront(false)
            frontOfCard!.style.display = 'none'// surpress element may be null error
            backOfCard!.style.display = 'block'
        }else{
            setShowingFront(true)
            frontOfCard!.style.display = 'block'
            backOfCard!.style.display = 'none'
        }
        
    }
    return (
        <button onClick={handleClick}>{children}</button>
    )
}
