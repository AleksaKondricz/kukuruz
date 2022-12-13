import React from 'react'
import { Meta} from '@storybook/react'
import { Accordion } from '../Accordion';
import '../styles/Accordion.scss';

//meta data with the type Meta for our Accordion component;
const meta: Meta = {
    title: 'Accordion',
    component: Accordion,
    argTypes: {

        children: {
            defaultValue: 'Default Accordion'
        }
    }
}

export default meta;




//Sizes of Accordion
export const AccordionExample = () => (

        <Accordion />


)


