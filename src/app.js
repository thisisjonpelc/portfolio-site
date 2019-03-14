import './styles/main.scss';

import RevealOnScroll from './modules/RevealOnScroll';

const revealProjects = new RevealOnScroll('.project', {duration:1500});
const revealAboutTest = new RevealOnScroll('.about__text', {duration:1500});
const revealPicture = new RevealOnScroll('.about__image', {duration:1500});
console.log('Hello world!');