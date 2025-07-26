import { Search } from "lucide-react";
import { InputContainer, InputField, SearchButton } from "./styled";
import { useRef, useState } from "react";

const CepField = ({ getCepInfo }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const formatCep = (value) => {
    value = value.replace(/\D/g, "");
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    }
    return value;
  };

  const handleChange = (e) => {
    setInputValue(formatCep(e.target.value));
  };

  const handleSearch = () => {
    const cep = inputValue.replace(/\D/g, "");
    if (cep.length === 8) {
      getCepInfo(cep);
    } else {
      alert("Por favor, insira um CEP válido.");
    }
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        placeholder="Digite seu cep..."
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        maxLength={9}
      />
      <SearchButton onClick={handleSearch}>
        <Search />
      </SearchButton>
    </InputContainer>
  );
};

export default CepField;
