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
    <div className='w-full overflow-hidden overflow-x-auto border-collapse mt-10'>
      <div className='min-w-full divide-y divide-gray-200'>
        <div className='bg-gray-100 flex'>
          <div className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex-1'>Valor em km</div>
          <div className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex-1'>Valor em anos luz</div>
          <div className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex-1'>Data</div>
        </div>
        <div className='max-h-[450px] overflow-y-auto'>
        {history.map((item, index) => (
          <div key={index} className='flex bg-white'>
            <div className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex-1'>{item.input}</div>
            <div className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex-1'>{item.result}</div>
            <div className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex-1'>{item.date.toLocaleString()}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default History;
