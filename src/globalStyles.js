import { css } from '@emotion/react';

export const globalStyles = css`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #1e1e1e;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .MuiButton-containedPrimary {
    background-color: #e82127;
    color: #ffffff;
    transition: background-color 0.3s ease;
  }

  .MuiButton-containedPrimary:hover {
    background-color: #c51e22;
  }

  .MuiTypography-h4 {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
  }

  .MuiTypography-body1 {
    font-size: 1rem;
    line-height: 1.6;
  }
`;