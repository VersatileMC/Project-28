class Ground{
 constructor(){
    var options1 ={
		isStatic:true,
   }
    this.body = Bodies.rectangle(400,680,800,10,options1);
	World.add(world,this.body);
 }
display(){
 push();
rectMode(CENTER);
rect(400,680,800,10);
 pop();
}
}