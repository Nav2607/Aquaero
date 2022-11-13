class Form{
    constructor(){
        this.button = createButton("Play");
        this.title = createElement('h1');

    }
    display(){
        this.title.html("AQUAERO");
        this.title.position(200,100);
        this.button.position(250,150);

        this.button.mousePressed(()=> {
            this.button.hide();
            this.title.hide();
            gameState = PLAY;
    
        });
    }
   
}