if (window.matchMedia("(max-width: 768px)").matches) {
    const container = document.getElementById('portfolio');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const lastItem = portfolioItems[portfolioItems.length - 1];
  
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;
    let isScrolling;
  
    container.addEventListener('mousedown', startScroll);
    container.addEventListener('touchstart', startScroll);
  
    function startScroll(e) {
      isDown = true;
      startX = (e.pageX || e.touches[0].pageX) - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    }
  
    container.addEventListener('scroll', function (event) {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function() {
        checkScrollEnd();
      }, 66);
    }, false);
  
    container.addEventListener('mouseleave', endScroll);
    container.addEventListener('mouseup', endScroll);
    container.addEventListener('touchend', endScroll);
  
    function endScroll() {
      isDown = false;
      container.style.transform = '';
      container.style.transition = 'transform 0.2s';
      setTimeout(() => (container.style.transition = ''), 200);
    }
  
    container.addEventListener('mousemove', moveScroll);
    container.addEventListener('touchmove', moveScroll);
  
    function moveScroll(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = (e.pageX || e.touches[0].pageX) - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
  
      const rubberBandEffect = Math.abs(walk) / 25;
  
      if (container.scrollLeft <= 0) {
        container.style.transform = `translateX(${rubberBandEffect}px)`;
      } else if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.style.transform = `translateX(-${rubberBandEffect}px)`;
      }
    }
  
    function checkScrollEnd() {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        const offset = (container.offsetWidth - lastItem.offsetWidth) / 2;
        container.scrollTo({
            top: 0,
            left: container.scrollWidth - container.offsetWidth + offset,
            behavior: 'smooth'
        });
      }
    }
  }
  