//Source file name: mousecontrols.ts
//Author: Angelina Gutierrez and Elaine Mae Vallarino
//Last Modified by: Angelina Gutierrez
//Date last Modified: March 21, 2016
//Program description: The class for implementing mouse controls
//Revision History: https://github.com/Flame2Ashes/COMP392-Assignment03-Part3/commits/master

module objects {
    // MouseControls Class +++++++++++++++
    export class MouseControls {
        // PUBLIC INSTANCE VARIABLES +++++++++
        public sensitivity: number;
        public yaw: number; // look left and right - y-axis
        public pitch: number; // look up and down - x-axis
        public enabled: boolean;
        
        // CONSTRUCTOR +++++++++++++++++++++++
        constructor() {
            this.enabled = false;
            this.sensitivity = 0.1;
            this.yaw = 0;
            this.pitch = 0;
            
            document.addEventListener('mousemove', this.OnMouseMove.bind(this), false);
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        public OnMouseMove(event: MouseEvent):void {
            this.yaw = -event.movementX * this.sensitivity;
            
            this.pitch = -event.movementY * this.sensitivity * 0.1;
        }
    }
}