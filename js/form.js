class Form {
    constructor(){
      this.title = createElement("h2")
      this.input = createInput("Name")
      this.button = createButton("play")
      this.greeting = createElement("h3")
    }
hide() {
 this.input.hide()
 this.button.hide()
 this.greeting.hide() 
}
  display(){
this.title.html("car racing game")
this.title.position(130,20)



this.input.position(130,160);
this.button.position(250,200);
this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount++;
    player.index = playerCount
    player.update();
    player.updateCount(playerCount);

    this.greeting.html("hello " + player.name);
    this.greeting.position(130,160);
});
}

}