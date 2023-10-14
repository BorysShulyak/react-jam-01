import createMatchMedia from './createMatchMedia';

const mockMatchMedia = (width) => {
  const matchMediaInstances = [];
  const fakeMatchMedia = createMatchMedia(width, matchMediaInstances);
  // jsdom does not implement window.matchMedia
  if (window.matchMedia === undefined) {
    window.matchMedia = fakeMatchMedia;
    window.matchMedia.restore = () => {
      delete window.matchMedia;
    };
  } else {
    jest.spyOn(window, 'matchMedia').mockImplementation(fakeMatchMedia);
  }
};

export default mockMatchMedia;
