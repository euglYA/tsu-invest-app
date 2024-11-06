import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import InvestAPI from '../helpers/investments';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import IndexedDB from '../../api/IndexedDB';

const Capitals = (props) => {
    const {
        onSave = () => { },
    } = props;

    const [numbers, setNumbers] = useState([]);
    const [inputValue, setInputValue] = useState('');


    const addNumber = () => {
        const num = parseFloat(inputValue);
        if (num > 1) {
            setNumbers([...numbers, num]);
            onSave([...numbers, num])
            setInputValue('');
        }
    };

    const removeNumber = (index) => {
        const newNumbers = numbers.filter((_, i) => i !== index);
        setNumbers(newNumbers);
        if (newNumbers?.length === 0) {
            onSave(undefined)
        } else {
            onSave(newNumbers)
        }
    };

    return (
        <div className="w-full max-w-md min-w-sm p-4 border rounded-lg shadow-md h-fit relative">
            <h1 className="text-xl font-bold mb-4 text-gray-900/80">Инвестиции</h1>

            <div className="flex mb-4">
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-grow border border-gray-300 rounded-lg p-2 mr-2"
                    placeholder="Введите сумму инвестиции"
                    onKeyPress={(e) => e.key === 'Enter' && addNumber()}
                />
                <button
                    onClick={addNumber}
                    className="bg-blue-500 hover:bg-blue-400 text-white px-2 py-1 rounded-lg transition-all ease-in-out duration-200"
                >
                    <PlusIcon className='w-6 h-6'/>
                </button>
            </div>
            
            <ul className="mb-4 grid grid-cols-2 gap-x-8 gap-y-4">
                {numbers.map((num, index) => (
                    <li key={index} className="flex justify-between items-center border-b py-2">
                        <span className='text-gray-500 font-semibold text-sm'>{num}</span>
                        <button
                            onClick={() => {
                                removeNumber(index);
                            }}
                            className={clsx("text-red-500 hover:text-red-700 transition-all ease-in-out duration-200")}
                        >
                            <TrashIcon className='w-6 h-6'/>
                        </button>
                    </li>
                ))}
            </ul>
            <p className={clsx(`${numbers.length > 1 && 'hidden'}`, 'absolute bottom-0 right-[1px] italic text-[13px] font-medium text-gray-500')}>должно быть два и более значений</p>

        </div>
    );
};

const Investors = (props) => {
    const {
        onSave = () => {},
        disabled = false,
    } = props;
    const [value, setValue] = useState(undefined);

    return (
        <div className="w-full max-w-md min-w-sm p-4 border rounded-lg shadow-md max-h-52">
            <h1 className="text-xl font-bold mb-4 text-gray-900/80">Количество инвесторов</h1>

            <div className="flex mb-4">
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="flex-grow border border-gray-300 rounded-lg p-2 mr-2"
                    placeholder="Введите количество инвесторов"
                />
            </div>

            <div className={clsx(`${(value == undefined || value === '') && 'hidden'}`, 'w-full flex items-center justify-center')}>
                <button
                    onClick={() => {
                        if (value > 1) {
                            onSave(value)
                        }
                    }}
                    className={clsx("bg-[#0070b9] hover:bg-[#0070b9]/80 transition-all ease-in-out duration-200 text-white px-4 py-2 rounded-lg font-semibold")}

                >
                    {disabled === false ? `Далее` : `Перерисовать`}
                </button>
            </div>
        </div>
    );
}

export default function Main() {
    const [chartData, setChartData] = useState(undefined);
    const [coordinates, setCoordinates] = useState(undefined)
    const [keyPlayers, setKeyPlayers] = useState(undefined);
    const [alpha, setAlpha] = useState(undefined);

    const handleDrawAndSave = async (value) => {
        setChartData({...chartData, investors: value});
        let obj = InvestAPI.analyzeInvestorCapital(chartData?.capitals, +value);
        setCoordinates(obj?.density)
        let keyPlayersTemp = obj?.keyPlayers?.map((item, index) => {
            return {
                value: item,
                index: index
            }
        })
        setKeyPlayers(keyPlayersTemp)
        setAlpha(obj?.alpha)
        await IndexedDB.addItem('investment', {
            date: new Date(),
            capitals: chartData?.capitals,
            investors: value,
            coordinates: obj?.density,
            alpha: obj?.alpha,
            keyPlayers: keyPlayersTemp
        })
    }

    return (
        <div>
            <h1 className='text-gray-900/80 text-3xl font-semibold'>Главная</h1>
            <div className='flex w-full gap-6 w-xl mx-auto mt-8 gap-y-8 flex-col'>
                <div className='w-full flex gap-6 justify-start max-lg:flex-col max-lg:items-center'>
                    <Capitals disabled={chartData?.capitals !== undefined} 
                        onSave={(value) => {
                            setChartData({...chartData, capitals: value});
                            if (chartData?.capitals === undefined) {
                                setCoordinates(undefined)
                            }
                        }}
                    />

                    {chartData?.capitals !== undefined && chartData?.capitals.length > 1 && (
                        <Investors disabled={chartData?.investors !== undefined} onSave={handleDrawAndSave}/>
                    )}
                </div>


                {coordinates && chartData?.capitals && (
                    <div className='flex gap-6 justify-start items-start max-xl:flex-col max-xl:items-center'>
                        <div className='w-full max-w-2xl border shadow-md rounded-lg pr-4 py-4'>
                            <p className='text-center text-xl font-bold text-gray-900/80 mb-4'>Прогнозируемый капитал</p>
                            <ResponsiveContainer width='100%' height={300}>
                                <AreaChart data={coordinates}>
                                    <XAxis
                                        dataKey="x"
                                        scale="log"
                                        domain={['auto', 'auto']}
                                        tickFormatter={(tick) => Math.floor(tick)}
                                        type="number"
                                    />
                                    <YAxis />
                                    <Tooltip  />
                                    <Area type="monotone" dataKey="y" stroke="orange" fill="orange" fillOpacity={0.7} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className='grid grid-cols-1 border rounded-lg shadow-md py-3 px-6'>
                            <p className='text-center text-lg font-bold text-gray-900/80 mb-4'>Ключевые игроки (20% с наибольшими капиталами):</p>
                            {keyPlayers?.map((item, index) => {
                                return (
                                    <div key={index} className='border-t py-2'>
                                        <p className='text-md text-gray-900/80'>Инвестор{` № ${index + 1} - `}<span className='font-semibold'>{item?.value}</span></p>
                                    </div>
                                );
                            })

                            }
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
}