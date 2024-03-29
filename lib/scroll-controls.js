// TODO move to separate repo
AFRAME.registerComponent('scroll-controls', {
  schema: {
    speed: {
      default: 10
    },
    fly: {
      default: false
    }
  },
  init() {
    document.addEventListener('wheel', (e) => this.onWheel(e));
  },
  onWheel(e) {
    let el = this.el;
    let position = el.getAttribute('position');

    let directionVector = new THREE.Vector3(0, 0, e.deltaY / (1000 / this.data.speed));

    let rotation = this.el.getAttribute('rotation');
    let rotationEuler = new THREE.Euler(0, 0, 0, 'YXZ');
    if(rotation) {
      rotationEuler.set(THREE.Math.degToRad(rotation.x), THREE.Math.degToRad(rotation.y), 0);
      directionVector.applyEuler(rotationEuler);
    }

    el.setAttribute('position', {
      x: position.x + directionVector.x,
      y: position.y + this.data.fly ? directionVector.y : 0,
      z: position.z + directionVector.z
    });
  }
});
