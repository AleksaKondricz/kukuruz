import React, {useState} from 'react';
import {IconCirclePlus, IconCircleMinus} from '@tabler/icons'
import { accordionDataMock } from './mocks/accordianDataMock';
import './styles/Accordion.scss';

export interface AccordionProps {

}

export const Accordion = ({ }: AccordionProps) => {
    const [isActive, setIsActive] = useState(null)

    const handleToggle = (id:any) => {
        if(isActive === id){
            setIsActive(null)
            return false
        }
        setIsActive(id)
    }

    return (
        <div className='accordion-wrapper'>
            <div className='accordion-box'>
                <h3>An Accordion</h3>
                <p>This is an accordion element. One of the best ways of showing neadly data which may interest your end user. Perfect for using it as FAQ section.</p>
                {accordionDataMock.map(
                    accord => (
                        <div className='accordion-item' key={accord.id}>
                        <h4> <span onClick={()=>handleToggle(accord.id)}>{isActive === accord.id ?<IconCircleMinus fill='#000' color='#fff'/> : <IconCirclePlus fill='#000' color='#fff'/>}</span> {accord.question}</h4>
                        {isActive === accord.id && <p>{accord.answer}</p>}
                    </div>
                    )
                )}

            </div>
        </div>
    )
}
