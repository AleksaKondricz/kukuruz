import React, {useState} from 'react';
import {IconCirclePlus, IconCircleMinus} from '@tabler/icons'
import './styles/Accordion.scss';

export interface AccordionProps {

}

export const Accordion = ({ }: AccordionProps) => {
    const [isActive, setIsActive] = useState(false)
    const classNames = ``
    return (
        <div className='accordion-wrapper'>
            <div className='accordion-box'>
                <h2>An Accordion</h2>
                <p>This is an accordion elemnet. One of the best ways of showing neadly data which may interest your end user. Perfect for using it as FAQ section.</p>
                <div className='accordion-item'>
                    <h4> <span onClick={()=>setIsActive(!isActive)}>{isActive ?<IconCircleMinus fill='#000' color='#fff'/> : <IconCirclePlus fill='#000' color='#fff'/>}</span> What is an accordion?</h4>
                    {isActive && <p> In web design, an accordion is a type of menu that displays a list of headers stacked on top of one another. When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content.</p>}
                </div>
                <div className='accordion-item'>
                    <h4> <span onClick={()=>setIsActive(!isActive)}>{isActive ?<IconCircleMinus fill='#000' color='#fff'/> : <IconCirclePlus fill='#000' color='#fff'/>}</span> What are the best use cases for using an accordion?</h4>
                    {isActive && <p> In web design, an accordion is a type of menu that displays a list of headers stacked on top of one another. When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content.</p>}
                </div>
            </div>
        </div>
    )
}
