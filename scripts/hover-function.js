const items = document.querySelectorAll('.items');

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      items.forEach(i => {
        if (i !== item) {
          i.classList.add('blur');
        } else {
          i.classList.add('focus');
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      items.forEach(i => {
        i.classList.remove('blur', 'focus');
      });
    });
  });