//Source file name: mousecontrols.ts
//Author: Angelina Gutierrez and Elaine Mae Vallarino
//Last Modified by: Angelina Gutierrez
//Date last Modified: March 25, 2016
//Program description: The class for implementing mouse controls
//Revision History: https://github.com/Flame2Ashes/COMP392-Assignment03-Part3/commits/master
var objects;
(function (objects) {
    // MouseControls Class +++++++++++++++
    var MouseControls = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++
        function MouseControls() {
            this.enabled = false;
            this.sensitivity = 0.1;
            this.yaw = 0;
            this.pitch = 0;
            document.addEventListener('mousemove', this.OnMouseMove.bind(this), false);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        MouseControls.prototype.OnMouseMove = function (event) {
            this.yaw = -event.movementX * this.sensitivity;
            this.pitch = -event.movementY * this.sensitivity * 0.1;
        };
        return MouseControls;
    }());
    objects.MouseControls = MouseControls;
})(objects || (objects = {}));

//# sourceMappingURL=mousecontrols.js.map
