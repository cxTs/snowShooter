/**
*
* @description : [...]
*
* @author Thomas Couchaux  <thomas.couchaux@gmail.com>
* @github https://github.com/cxTs
* @date 27/02/2020
* @required : Particle.js, Vector.js
* @param {NUMBER}  x : value of x position
* @param {NUMBER}  y : value of y position
* @return {OBJECT}  : a particle object
*
*/

function Particle(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, -15);
    this.acc = new Vector(0, 0);
    this.size = 1;

    // apply a force
    this.applyForce = function(force) {
        this.acc.add(force);
    }

    // update (acceleration algorithm)
    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    // draw the particle on the canvas
    this.show = function(ctx, size) {
        this.pos.display(ctx, size);
    }
}
