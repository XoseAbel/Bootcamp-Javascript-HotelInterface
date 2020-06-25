const hideElements = (element: Element[]) => {
  element.forEach(value => value.classList.add('d-none'));
};

export { hideElements };
