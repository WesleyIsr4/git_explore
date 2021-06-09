import { shade } from 'polished';
import styled from 'styled-components';

export const Title = styled.h1`
  max-width: 600px;
  margin-top: 80px;
  border-left: 3px solid #582fe4;

  h1 {
    margin-left: 10px;
    font-size: 48px;
    color: #f0f0f5;
    line-height: 56px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 8px 0 0 8px;

    color: #a3a3a3;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    background: #582fe4;
    border-radius: 0 8px 8px 0;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#582fe4')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 8px;

    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 25%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
