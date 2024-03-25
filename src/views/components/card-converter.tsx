import { FormEvent, useState } from "react";

interface CardConverterProps {
  title: string,
  placeholder: string,
  onConvert: (input: string) => string,
  result: string,
  updateHistory: (input: string, result: string) => void;
}

const CardConverter: React.FC<CardConverterProps> = ({ title, placeholder, onConvert, result, updateHistory }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleConvert = (e: FormEvent) => {
    e.preventDefault();
    if(parseFloat(input) < 1) {
      setError("Digite um valor maior ou igual a 1");
      return;
    }
    if(!input) {
      setError("Digite um valor numérico");
      return;
    }

    setError('');
    const convertResult = onConvert(input);
    setInput('');
    updateHistory(input, convertResult);
  }
  return(
    <form onSubmit={handleConvert}>
      <h2>{title}</h2>
      <input
        type="number"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit">Converter</button>
      {error && <p>{error}</p>}
      <p>{result}</p>
    </form>
  )
}

export default CardConverter;