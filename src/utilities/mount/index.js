import { render } from 'react-dom';

const mount = (component) => {
  const container = document.querySelector('body > div') || (() => {
    const container = document.createElement('div');
    document.querySelector('body').appendChild(container);
    return container;
  })();

  render(component, container);
};

export default mount;
