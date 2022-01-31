StarWars = (function() {
  
  /* 
   * Constructor
   */
  function StarWars(args) {
    this.el = $(args.el);
    
    // Música que se inicia al empezar la animación.
    this.audio = this.el.find('audio').get(0);
    
    // Comienzo de la animación.
    this.start = this.el.find('.start');
    
    this.animation = this.el.find('.animation');
    
    // Nos devuelve a la pantalla inicial.
    this.reset();

    // Comienza la animación al hacer click.
    this.start.bind('click', $.proxy(function() {
      this.start.hide();
      this.audio.play();
      this.el.append(this.animation);
    }, this));
    
    // Cuando el audio termina, nos devuelve a la pantalla inicial.
    $(this.audio).bind('ended', $.proxy(function() {
      this.audio.currentTime = 0;
      this.reset();
    }, this));
  }
  
  /*
   * Resetea la animación y nos devuelve a la pantalla inicial
   */
  StarWars.prototype.reset = function() {
    this.start.show();
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };

  return StarWars;
})();

new StarWars({
  el : '.starwars'
});