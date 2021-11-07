/**
* @description : simulating kind of snow shooter using principles of work done for Fireworks
*                and the use of particles system
*
* @author cxts  <couchaux.thomas@gmail.com>
* @github https://github.com/cxTs
* @date 27/02/2020
* @required Particle.js, Draw.js, misc.js, Vector.js
* @param {VOID}
* @return {VOID}
*
**/

// particle system setting
let fireworks = [];
let nbFirework = 1  ;
// populating fireworks
for(let i = 0; i < nbFirework; i++) {
    fireworks.push(new Particle(getRandom(width), height + getRandom(40)));
}




/**
* @description : called by window.requestAniamtionFrame(), draw the entire animation on canvas
* @param NONE
* @return {VOID}
*
**/
function draw() {

    fireworks.push(new Particle(getRandom(width), height + 100));

    clear();
    for(let i = fireworks.length - 1; i >= 0; i--) {
        let yg = getRandomFloat(.4);
        let g = new Vector(0, yg);
        fireworks[i].applyForce(g);
        fireworks[i].update();
        fireworks[i].show(ctx, fireworks[i].size);
        // changing size of the firework during the trip
        fireworks[i].size *= 1.02;
        if(fireworks[i].pos.x > (width / 2) + 100) {
            fireworks[i].pos.x *= .9995;
        }
        if(fireworks[i].pos.x < (width / 2) + 100) {
            fireworks[i].pos.x *= 1.0009;
        }
        // getting rid off fireworks that are out of sight
        if(fireworks[i].pos.y > height + 200) {
            fireworks.splice(i,1);
        }

    }
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
