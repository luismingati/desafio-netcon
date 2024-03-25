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
  }

  const convertLightYearsToKilometers = (lightYears: string) => {
    const km = parseFloat(lightYears) * 9.461e12;
    setKmConversionResult(`${km} km`);

    return { inputValue: km.toString(), resultValue: lightYears };
  };
  
  const convertKilometersToLightYears = (kilometers: string) => {
    const ly = parseFloat(kilometers) / 9.461e12;
    setLyConversionResult(`${ly} anos-luz`);
    return { inputValue: kilometers, resultValue: ly.toString() };
  };

  return (
    <div className='mx-10'>
      <div className='flex w-full flex-wrap justify-center mt-10  gap-10'>
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