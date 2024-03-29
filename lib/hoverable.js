AFRAME.registerComponent('hoverable', {
  init() {
    let el = this.el;

    el.addEventListener('click', () => {
      console.log('clicked', this.data.id);
    });

    el.addEventListener('mouseenter', () => {
      this.previousColor = el.getAttribute('color');
      el.setAttribute('color', this.data.hoverColor);
    });

    el.addEventListener('mouseleave', () => {
      el.setAttribute('color', this.previousColor);
    });
  }
});
