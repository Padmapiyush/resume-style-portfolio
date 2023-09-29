window.addEventListener('load', function () {
    adjustContainerSize();
    window.addEventListener('resize', adjustContainerSize);
  });
  
  function adjustContainerSize() {
    var container = document.getElementById('myContainer');
    var maxWidth = element.offsetWidth; // Get the current width
    var maxHeight = maxWidth * 1.5; // Set the maximum height based on the width
  
    container.style.width = containerWidth + 'px';
    container.style.height = containerHeight + 'px';
  }