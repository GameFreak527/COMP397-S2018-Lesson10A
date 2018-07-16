module objects{
    export class Plane extends objects.GameObject{

        //Constructor
        constructor(){
            super("plane");
        }

        //Private Methods

        private _checkbounds():void{
            //check right boundary
            if(this.x >)
        }

         // public methods
         public Start():void {
             this.regX = this.halfWidth;
             this.regY = this.halfHeight;
             this.y = 430;

        }

        public Update():void {
            this.x = managers.Game.Stage.mouseX;

        }

        public Reset():void {

        }
    }
}