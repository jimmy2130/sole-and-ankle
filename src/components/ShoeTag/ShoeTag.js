import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';

const VARIANT = {
  'on-sale': {
    '--backgroundColor': COLORS.primary,
    '--padding': '7px 9px 9px 10px',
    'text': 'Sale',
  },
  'new-release': {
    '--backgroundColor': COLORS.secondary,
    '--padding': '7px 9px 9px 11px',
    'text': 'Just Released!',
  },
}

const ShoeTag = ({variant}) => {
  if(variant === 'default')
    return null;
  return (
    <Wrapper style={VARIANT[variant]}>
      {VARIANT[variant]['text']}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  background-color: var(--backgroundColor);
  color: ${COLORS.white};
  border-radius: 2px;
  font-weight: ${WEIGHTS.bold};
`;


export default ShoeTag;
