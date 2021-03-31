import Projectile from './projectile';

class ProjectileHandler {
    constructor(startingPosition) {
        this.projectile = this.CreateProjectile(startingPosition);
    }

    CreateProjectile(startingPosition) {
        const angle = Math.random() * Math.PI * 2;
        //Developer notes: It might be better to allow the user to configure the variable below in UI
        const maxVelocity = 45;
        const startVelocity = Math.random() * maxVelocity
        return new Projectile(startingPosition, startVelocity, angle)
    }

    GetCoordinatesAtTime(time) {
        this.projectile.SetPosition(time);
        return this.projectile.coordinates;
    }

    //Handles bouncing on the x axis
    HandleBounceVertical(time, minThreshold = 0) {
        let triggerBounce = false;
        if (this.projectile.GetPositionVertical(time) < minThreshold) {
            triggerBounce = true;
            this.projectile.startVelocityVertical = Math.abs(this.projectile.GetCurrentVelocityVertical(time) * 0.7);
            this.projectile.velocityHorizontal *= 0.7;
            this.projectile.startingPosition = [this.projectile.GetPositionHorizontal(time), 0];
            this.projectile.coordinates = this.projectile.startingPosition;
            this.time = 0;
        }
        return triggerBounce;
    }

    //Handles bouncing on the y axis
    //Developer notes: This function doesn't work yet, there's a few more things to consider when bouncing horizontally. 
    HandleBounceHorizontal(time, minThreshold = 0, maxThreshold = 500) {
        let triggerBounce = false;
        if (this.projectile.GetPositionHorizontal(time) < minThreshold || this.projectile.GetPositionHorizontal(time) > maxThreshold) {
            triggerBounce = true;
            this.projectile.startVelocityVertical = Math.abs(this.projectile.GetCurrentVelocityVertical(time) * 0.7);
            this.projectile.velocityHorizontal *= 0.7;
            this.projectile.startingPosition = [this.projectile.GetPositionHorizontal(time), 0];
            this.projectile.coordinates = this.projectile.startingPosition;
            this.time = 0;
        }
        return triggerBounce;
    }
}

export default ProjectileHandler;