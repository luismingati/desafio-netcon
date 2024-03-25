import { FormEvent, useState } from "react";

interface CardConverterProps {
  title: string,
  placeholder: string,
  onConvert: (input: string) => {inputValue: string, resultValue: string},
  result: string,
  updateHistory: (input: string, result: string) => void;
}

const CardConverter: React.FC<CardConverterProps> = ({ title, placeholder, onConvert, result, updateHistory }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleConvert = (e: FormEvent) => {
    e.preventDefault();
    if(!input) {
      setError("Digite um valor numérico");
      return;
    }
    if(parseFloat(input) < 1) {
      setError("Digite um valor maior ou igual a 1");
      return;
    }
    
    setError('');
    const { inputValue, resultValue } = onConvert(input);
    setInput('');
    updateHistory(inputValue, resultValue);
  }

  return(
    <form onSubmit={handleConvert} className="flex flex-col flex-1 min-w-96 max-w-lg">
      <h2 className="font-bold text-xl">{title}</h2>
      <input
        type="number"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-2 py-2 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
      />
      {error && <p className="border border-red-600 text-red-500 text-xs rounded-md px-1 py-1 mt-1 inline-block">{error}</p>}
      <button type="submit" className=" bg-green-600 mt-3 rounded-md text-white px-2 py-2">Converter</button>
      <div className="border mt-2 p-3 rounded-md">
        <h3 className="font-bold text-lg ">Resultado:</h3>
        <p>{result}</p>
      </div>
    </form>
  )
}

export default CardConverter;