
( ( )  =>  {
  const  mobileMenu = document.querySelector('.js-menu-container');
  const  openMenuBtn = document.querySelector('.js-open-menu');
  const  closeMenuBtn = document.querySelector('.js-close-menu');
  const  toggleMenu  =  ( )  =>  {
    const  isMenuOpen  =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', ! isMenuOpen) ;
    mobileMenu.classList.toggle('is-open');
    
    const  scrollLockMethod  =  ! isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll' ;
    bodyScrollLock[scrollLockMethod](document.body); 
  };
  
  openMenuBtn.addEventListener ('click' , toggleMenu);
  closeMenuBtn.addEventListener ('click' , toggleMenu);

  // Закриваємо мобільне меню на більш широких екранах
  // у разі зміни орієнтації пристрою.
  // Закривати мобільне меню на широких екранах, якщо орієнтація пристрою змінюється
  window . matchMedia ('(min-width: 768px)') . addEventListener ( 'change' ,  e  =>  {
    if  ( ! e . matches )  return ;
    mobileMenu.classList . remove ( 'is-open' );
    openMenuBtn.setAttribute ( 'aria-expanded', false );
    bodyScrollLock.enableBodyScroll(document.body); 
  } ) ;
} ) ( ) ;
