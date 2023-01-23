import {create} from '@storybook/theming';
import brandImage from './kukuruz-logo.svg';

export default create({
    base: 'light',
    brandTitle: 'Kukuruz UI',
    brandUrl: 'https://example.com',
    brandImage: brandImage,
    brandTarget: '_self',
})