import mediaQuery from 'css-mediaquery';

function createMatchMedia(width, ref) {
  const listeners = [];
  return (query) => {
    const instance = {
      matches: mediaQuery.match(query, {
        width
      }),
      // Mocking matchMedia in Safari < 14 where MediaQueryList doesn't inherit from EventTarget
      addListener: (listener) => {
        listeners.push(listener);
      },
      removeListener: (listener) => {
        const index = listeners.indexOf(listener);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      }
    };
    ref.push({
      instance,
      listeners
    });
    return instance;
  };
}

export default createMatchMedia;
