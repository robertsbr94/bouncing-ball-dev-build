class Projectile {

    constructor(startingPosition, startVelocity, angle) {
        /*
        ATTRIBUTES
        startingPosition      - the original coordinates of the projectile, should be updated with every bounce
        coordinates           - the current coordinates of the object in motion
        prevCoordinates       - the coordinates immediately prior to the existing coordinates. Used to measure displacement
        startVelocityVertical - the starting velocity in the vertical direction
        velocityHorizontal    - the constant velocity in the horizontal direction
        angle                 - the angle from vertical at which the object is projected
        */
        this.startingPosition = startingPosition;
        this.coordinates = startingPosition;
        this.prevCoordinates = startingPosition;
        this.startVelocityVertical = startVelocity * Math.sin(angle);
        this.velocityHorizontal = startVelocity * Math.cos(angle);
        this.angle = angle;
        this.accelerationVertical = -9.8;
    }

    GetCurrentVelocityVertical(time) {
        return this.startVelocityVertical + this.accelerationVertical * time;
    }

    SetPosition(time) {
        this.prevCoordinates = this.coordinates;
        this.coordinates = [this.GetPositionHorizontal(time), Math.abs(this.GetPositionVertical(time))];
    }

    GetPositionVertical(time) {
        return this.startingPosition[1] + (time * this.startVelocityVertical + 0.5 * this.accelerationVertical * time ** 2);
    }

    GetPositionHorizontal(time) {
        return this.startingPosition[0] + (time * this.velocityHorizontal);
    }
}

export default Projectile;