import { modifier } from 'ember-modifier';

export default modifier(function eocSidebarTrigger(element, [effect]) {

  function resetMenu() {
    let container = document.getElementById( 'st-container' );
    container.classList.remove('st-menu-open');
  }

  function bodyClickFn() {
    resetMenu();
    document.removeEventListener( 'click', bodyClickFn );
  }

  function triggerSidebar(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    let container = document.getElementById( 'st-container' );
    container.className = 'st-container'; // clear
    container.classList.add(effect);
    setTimeout( function() {
      container.classList.add('st-menu-open');
    }, 25 );
    document.addEventListener('click', bodyClickFn);
  }

  element.addEventListener('click', triggerSidebar);

  return () => {
    element.removeEventListener('click', triggerSidebar);
  }
});
