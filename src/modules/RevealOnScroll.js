import ScrollReveal from 'scrollreveal';
ScrollReveal.debug=true;


export default class RevealProjects{

    constructor(className, options){
        this.className = className;
        this.options = options;

        this.setUpReveal();
    }

    setUpReveal(){
        console.log('setting up reveal');
        ScrollReveal().reveal(this.className, this.options);
    }
}