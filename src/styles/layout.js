import styled from 'styled-components';

// define breakpoints
const MOBILE_BREAKPOINT = '550px';
const NARROW_BREAKPOINT = '740px';
const NORMAL_BREAKPOINT = '1280px';

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(1rem, 1fr)
    minmax(auto, ${NORMAL_BREAKPOINT})
    minmax(1rem, 1fr);

  > * {
    grid-column: 2;

    ${({
      // @ts-ignore
      full,
    }) => full && `grid-column: 1 / -1;`}
  }

  @media (min-width: ${MOBILE_BREAKPOINT}) {
    grid-template-columns:
      minmax(1rem, 1fr)
      minmax(auto, ${MOBILE_BREAKPOINT})
      minmax(1rem, 1fr);
  }

  @media (min-width: ${NARROW_BREAKPOINT}) {
    grid-template-columns:
      minmax(1rem, 1fr)
      minmax(auto, ${NARROW_BREAKPOINT})
      minmax(1rem, 1fr);
  }

  @media (min-width: ${NORMAL_BREAKPOINT}) {
    grid-template-columns:
      minmax(2rem, 1fr)
      minmax(auto, ${NORMAL_BREAKPOINT})
      minmax(2rem, 1fr);
  }
`;

export const CmpContainer = styled.div`
  padding: 0 2rem;
`;
