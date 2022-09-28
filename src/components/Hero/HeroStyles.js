import styled from 'styled-components';

export const LeftSection = styled.div`
  a {
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
  }
  a:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  width: 100%;
  padding-bottom: 130px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;