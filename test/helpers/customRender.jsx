import { createTheme, ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';
import React from 'react';

import theme from '../../src/theme';

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={createTheme(theme)}>{children}</ThemeProvider>;
};

const createCustomRender = (renderMethod) => (renderBody, providersProps, options) =>
  renderMethod(renderBody, {
    ...options,
    wrapper: ({ children }) => {
      const WrapperComponent = options?.wrapper;
      return WrapperComponent ? (
        <AllTheProviders {...providersProps}>
          <WrapperComponent>{children}</WrapperComponent>
        </AllTheProviders>
      ) : (
        <AllTheProviders {...providersProps}> {children}</AllTheProviders>
      );
    }
  });

// eslint-disable-next-line testing-library/render-result-naming-convention
const customRender = createCustomRender(render);

// eslint-disable-next-line import/prefer-default-export
export { customRender as render };
