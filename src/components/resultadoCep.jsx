import { ResultadoCepContainer, ResultadoCepInfo } from "./styled";
import { useState, useEffect } from "react";

const ResultadoCep = ({ cepInfo }) => {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    if (!cepInfo || Object.keys(cepInfo).length === 0 || cepInfo.erro) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 5000);
      return () => clearTimeout(timer);
    } else {
      setShowError(true);
    }
  }, [cepInfo]);

  if (!cepInfo || Object.keys(cepInfo).length === 0) {
    return null;
  }

  if (cepInfo.erro) {
    if (!showError) return null;
    return (
      <ResultadoCepContainer>
        <ResultadoCepInfo>
          <h2 className="not-found-message">CEP Não encontrado!</h2>
        </ResultadoCepInfo>
      </ResultadoCepContainer>
    );
  }
  return (
    <ResultadoCepContainer className="resultado-cep-container">
      {cepInfo && Object.keys(cepInfo).length > 0 ? (
        <ResultadoCepInfo className="resultado-cep">
          <h2>CEP Encontrado!</h2>
          <p>
            <strong>CEP:</strong> {cepInfo.cep}
          </p>
          {cepInfo.logadouro && (
            <p>
              <strong>Logradouro:</strong> {cepInfo.logradouro}
            </p>
          )}
          {cepInfo.bairro && (
            <p>
              <strong>Bairro:</strong> {cepInfo.bairro}
            </p>
          )}
          {cepInfo.localidade && (
            <p>
              <strong>Cidade:</strong> {cepInfo.localidade}
            </p>
          )}
          {cepInfo.uf && (
            <p>
              <strong>Estado:</strong> {cepInfo.uf}
            </p>
          )}
          {cepInfo.complemento && (
            <p>
              <strong>Complemento:</strong> {cepInfo.complemento}
            </p>
          )}
        </ResultadoCepInfo>
      ) : (
        <ResultadoCepInfo className="resultado-cep">
          <h2>CEP não encontrado ou inválido</h2>
        </ResultadoCepInfo>
      )}
    </ResultadoCepContainer>
  );
};

export default ResultadoCep;
