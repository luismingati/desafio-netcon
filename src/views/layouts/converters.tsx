import React, { useState } from 'react';
import CardConverter from '../components/card-converter';
import History from '../components/history';

const Converters: React.FC = () => {
  const [KmConversionResult, setKmConversionResult] = useState('');
  const [LyConversionResult, setLyConversionResult] = useState('');
  const [conversionHistory, setConversionHistory] = useState<{ input: string; result: string; date: Date; }[]>([]);

  const addToHistory = (input: string, result: string) => {
    const newEntry = { input, result, date: new Date() };
    setConversionHistory([...conversionHistory, newEntry]);
  };

  const convertLightYearsToKilometers = (lightYears: string) => {
    const km = parseFloat(lightYears) * 9.461e12;
    setKmConversionResult(`${km} km`);
    addToHistory(`${km} km`, `${lightYears} anos-luz`);
    return `${km} km`;
  };

  const convertKilometersToLightYears = (kilometers: string) => {
    const ly = parseFloat(kilometers) / 9.461e12;
    setLyConversionResult(`${ly} anos-luz`);
    addToHistory(`${kilometers} km`, `${ly} anos-luz`);
    return `${ly} anos-luz`;
  };
  return (
    <div>
      <div>
        <CardConverter 
          title="Anos-Luz para Quilômetros"
          onConvert={convertLightYearsToKilometers}
          updateHistory={addToHistory}
          placeholder='Digite o valor em anos-luz'
          result={KmConversionResult}
        />
        <CardConverter 
          title="Quilômetros para Anos-Luz"
          onConvert={convertKilometersToLightYears}
          updateHistory={addToHistory}
          placeholder='Digite o valor em quilômetros'
          result={LyConversionResult}
        />
      </div>
      <History 
        history={conversionHistory}
      />
    </div>
  );
};

export default Converters;