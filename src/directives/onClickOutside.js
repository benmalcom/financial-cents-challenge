const clickOutside = {
  mounted(el, binding) {
    function onClickOutside(event) {
      if (el !== event.target || !el.contains(event.target)) {
        binding.value();
      }
    }

    document.addEventListener('click', onClickOutside);
    el._clickOutside = onClickOutside;
  },
  beforeUnmount(el) {
    document.removeEventListener('click', el._clickOutside);
  }
};

export default clickOutside;
