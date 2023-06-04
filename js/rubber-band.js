if (window.matchMedia("(max-width: 1440px)").matches) {
  const container = document.getElementById('portfolio');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const lastItem = portfolioItems[portfolioItems.length - 1];

  let startX = 0;
  let startY = 0;
  let scrollLeft = 0;
  let isDown = false;
  let isHorizontalScroll = null;

  container.addEventListener('mousedown', startScroll);
  container.addEventListener('touchstart', startScroll);
  container.addEventListener('mousemove', moveScroll);
  container.addEventListener('touchmove', moveScroll);
  container.addEventListener('mouseup', endScroll);
  container.addEventListener('touchend', endScroll);
  container.addEventListener('scroll', checkScrollEnd);

  function startScroll(e) {
    isDown = true;
    startX = (e.pageX || e.touches[0].pageX) - container.offsetLeft;
    startY = e.pageY || e.touches[0].pageY;
    scrollLeft = container.scrollLeft;
    isHorizontalScroll = null; 
  }

  function moveScroll(e) {
    if (!isDown) return;

    const x = (e.pageX || e.touches[0].pageX) - container.offsetLeft;
    const y = e.pageY || e.touches[0].pageY;
    const walk = (x - startX) * 1;
    const rubberBandEffect = Math.abs(walk) / 25;

    if (isHorizontalScroll === null) {
      const isMoreHorizontal = Math.abs(x - startX) > Math.abs(y - startY);
      isHorizontalScroll = isMoreHorizontal;
    }

    if (isHorizontalScroll) {
      container.scrollLeft = scrollLeft - walk;

      if (container.scrollLeft <= 0) {
        container.style.transform = `translateX(${rubberBandEffect}px)`;
      } else if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.style.transform = `translateX(-${rubberBandEffect}px)`;
      } else {
        container.style.transform = 'none';
      }
    }
  }

  function endScroll() {
    isDown = false;
    container.style.transform = 'none';
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
