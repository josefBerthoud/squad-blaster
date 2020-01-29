import React from 'react';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
`;

const FormBlock = styled.div`
  display: inline-block;
`;

const FlexInput = styled.input`
  display: flex;
  flex-direction: column;
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const CharFormStyling = styled.div`
  width: 50%;
`;

const PartyFormStyling = styled.div`
  width: 50%;
`;
const FormFlex = styled.form`
  display: inline-block;
`

export {
  FlexWrapper,
  FormBlock,
  FlexInput,
  AppWrapper,
  CharFormStyling,
  PartyFormStyling,
  FormFlex,
};