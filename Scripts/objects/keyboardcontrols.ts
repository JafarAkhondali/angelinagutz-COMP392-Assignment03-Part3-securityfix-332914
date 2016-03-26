//Source file name: keyboardcontrols.ts
//Author: Angelina Gutierrez and Elaine Mae Vallarino
//Last Modified by: Angelina Gutierrez
//Date last Modified: March 21, 2016
//Program description: The class for implementing keyboard controls
//Revision History: https://github.com/Flame2Ashes/COMP392-Assignment03-Part3/commits/master

module objects {
    // KeyboardControls Class +++++++++++++++
    export class KeyboardControls {
        // PUBLIC INSTANCE VARIABLES ++++++++++++
        public moveForward: boolean;
        public moveBackward: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;
        public jump: boolean;
        public enabled: boolean;
        // CONSTRUCTOR ++++++++++++++++++++++++++    
        constructor() {
            this.enabled = false;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }

        //PUBLIC METHODS
        public onKeyDown(event: KeyboardEvent): void {
            switch (event.keyCode) {
                case 38: //Up Arrow
                case 87: //W Key
                    this.moveForward = true;
                    break;
                case 37: //Left Arrow
                case 65: //A Key
                    this.moveLeft = true;
                    break;
                case 40: //Down Arrow
                case 83: //S Key
                    this.moveBackward = true;
                    break;
                case 39: //Right Arrow
                case 68: //D Key
                    this.moveRight = true;
                    break;
                case 32: //Spacebar
                    this.jump = true;
                    break;
            }
        }

        public onKeyUp(event: KeyboardEvent): void {
             switch (event.keyCode) {
                case 38: //Up Arrow
                case 87: //W Key
                    this.moveForward = false;
                    break;
                case 37: //Left Arrow
                case 65: //A Key
                    this.moveLeft = false;
                    break;
                case 40: //Down Arrow
                case 83: //S Key
                    this.moveBackward = false;
                    break;
                case 39: //Right Arrow
                case 68: //D Key
                    this.moveRight = false;
                    break;
                case 32: //Spacebar
                    this.jump = false;
                    break;
            }

        }
    }
}