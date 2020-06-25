const showElements = (element: Element[]) => {
  element.forEach(value => value.classList.remove('d-none'));
};

export { showElements };
