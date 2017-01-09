AFRAME.registerComponent('scroll-controls', {
  init() {
    document.addEventListener('wheel', (e) => this.onWheel(e));
  },
  onWheel(e) {
    let el = this.el;
    let position = el.getAttribute('position');

    let directionVector = new THREE.Vector3(0, 0, e.deltaY / 100);

    let rotation = this.el.getAttribute('rotation');
    let rotationEuler = new THREE.Euler(0, 0, 0, 'YXZ');
    if(rotation) {
      rotationEuler.set(THREE.Math.degToRad(rotation.x), THREE.Math.degToRad(rotation.y), 0);
      directionVector.applyEuler(rotationEuler);
    }

    el.setAttribute('position', {
      x: position.x + directionVector.x,
      y: position.y + directionVector.y,
      z: position.z + directionVector.z
    });
  }
});
