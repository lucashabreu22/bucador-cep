import styled from "styled-components";

export const PageTitle = styled.h1`
  color: white;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transform: translateY(-60%);
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const PageContainer = styled.div`
  box-sizing: border-box;
  background: linear-gradient(to bottom, #195353, #60569a);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding: 0 15px;
  font-size: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ResultadoCepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ResultadoCepInfo = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 350px;
  h2 {
    margin-bottom: 10px;
    text-align: center;
    color: #252525;
  }
  p {
    margin: 5px 0;
  }
  strong {
    color: #7ab2d4;
  }
  .not-found-message {
    color: #252525;
    font-weight: bold;
    text-align: center;
    transform: translateY(20%);
  }
  .resultado-cep {
    text-align: left;
    width: 100%;
    p {
      margin: 5px 0;
    }
    strong {
      color: #195353;
    }
  }
`;
