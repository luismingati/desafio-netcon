import React from 'react';

interface HistoryProps {
  input: string;
  result: string;
  date: Date;
}

interface HistoryArrayProps {
  history: HistoryProps[];
}

const History: React.FC<HistoryArrayProps> = ({ history }) => {
  return (
    <div className='flex flex-col'>
      {history.map((item, index) => (
        <div key={index} className='flex gap-6 border'>
          <p>Valor em km: {item.input}</p>
          <p>Valor em anos luz: {item.result}</p>
          <p>Date: {item.date.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
