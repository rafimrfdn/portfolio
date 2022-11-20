import { useEffect } from 'react';

const useMixitup = () => {
  let linkwork;

  useEffect(() => {
    let mixerPortfolio = mixitup('.work__container', {
      selectors: {
        target: '.work__card',
      },
      animation: {
        duration: 300,
      },
    });

    /* Link active work */
    linkwork = document.querySelectorAll('.work__item');
    linkwork.forEach((i) => i.addEventListener('click', activeWork));
  }, []);

  function activeWork() {
    linkwork.forEach((i) => i.classList.remove('active-work'));
    this.classList.add('active-work');
  }
};

export default useMixitup;
