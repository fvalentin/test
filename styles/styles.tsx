import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 20px 40px;
        margin: 0;
        background: #ffffff;
        min-height: 100%;
        font-size: 24px;
        font-family: 'Inter', sans-serif;
      }

      button {
        font-size: 24px;
        font-family: 'Inter', sans-serif;
      }
    `}
  />
);
