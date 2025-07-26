import PageTitleComponent from "./components/pageTitle";
import CepField from "./components/cepField";
import { PageContainer } from "./components/styled";
import { useState } from "react";
import axios from "axios";
import ResultadoCep from "./components/resultadoCep";

function App() {
  const [cepInfo, setCepInfo] = useState([]);

  const getCepInfo = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      setCepInfo(data);
    } catch (error) {
      console.error(error);
      setCepInfo([]);
    }
  };

  return (
    <PageContainer>
      <PageTitleComponent />
      <CepField getCepInfo={getCepInfo} />
      <ResultadoCep cepInfo={cepInfo} />
    </PageContainer>
  );
}

export default App;
