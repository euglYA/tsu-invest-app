import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import InvestAPI from '../js-calculations/InvestAPI';
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Legend } from '@headlessui/react';
import clsx from 'clsx';

const Capitals = (props) => {
    const {
        onSave = () => { },
        disabled = false,
    } = props;

    const [numbers, setNumbers] = useState([]);
    const [inputValue, setInputValue] = useState('');


    const addNumber = () => {
        const num = parseFloat(inputValue);
        if (num > 1) {
            setNumbers([...numbers, num]);
            setInputValue('');
        }
    };

    const removeNumber = (index) => {
        const newNumbers = numbers.filter((_, i) => i !== index);
        setNumbers(newNumbers);
    };

    return (
        <div className="w-full max-w-md min-w-sm p-4 border rounded-lg shadow-md h-fit">
            <h1 className="text-xl font-bold mb-4 text-gray-900/80">Инвестиции</h1>

            <div className="flex mb-4">
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-grow border border-gray-300 rounded-lg p-2 mr-2"
                    placeholder="Enter a number greater than 1"
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
                                if (!disabled) removeNumber(index);
                            }}
                            className={clsx(`${disabled && "hidden"}`, "text-red-500 hover:text-red-700 transition-all ease-in-out duration-200")}
                        >
                            <TrashIcon className='w-6 h-6'/>
                        </button>
                    </li>
                ))}
            </ul>

            <div className='w-full flex items-center justify-center'>
                <button
                    onClick={() => {
                        onSave(numbers)
                    }}
                    className={clsx(`${disabled && "hidden"}`, "bg-[#0070b9] hover:bg-[#0070b9]/80 transition-all ease-in-out duration-200 text-white px-4 py-2 rounded-lg font-semibold")}
                >
                    Далее
                </button>
            </div>

        </div>
    );
};

const Investors = (props) => {
    const {
        onSave = () => {},
        disabled = false,
    } = props;
    const [value, setValue] = useState(0);

    return (
        <div className="w-full max-w-md min-w-sm p-4 border rounded-lg shadow-md max-h-52">
            <h1 className="text-xl font-bold mb-4 text-gray-900/80">Количество инвесторов</h1>

            <div className="flex mb-4">
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="flex-grow border border-gray-300 rounded-lg p-2 mr-2"
                    placeholder="Enter a number greater than 1"
                />
            </div>

            <div className='w-full flex items-center justify-center'>
                <button
                    onClick={() => {
                        onSave(value)
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
    return (
        <div>
            <h1 className='text-gray-900/80 text-3xl font-semibold'>Главная</h1>
            <div className='flex w-full gap-6 w-xl mx-auto mt-8 gap-y-8'>
                <Capitals disabled={chartData?.capitals !== undefined} onSave={(value) => {
                    setChartData({...chartData, capitals: value});
                }}/>
                {chartData?.capitals !== undefined && (
                    <Investors disabled={chartData?.investors !== undefined} onSave={(value) => {
                        setChartData({...chartData, investors: value});
                        let obj = InvestAPI.analyzeInvestorCapital(chartData?.capitals, +value);
                        setCoordinates(obj?.density)
                        obj = obj?.keyPlayers?.map((item, index) => {
                            return {
                                value: item,
                                index: index
                            }
                        })
                        setKeyPlayers(obj)
                    }}/>
                    )
                }

                {coordinates && (
                    <div>
                        <ResponsiveContainer width={800} height={500}>
                            <AreaChart data={coordinates}>
                                <XAxis
                                    dataKey="x"
                                    scale="log"
                                    domain={['auto', 'auto']}
                                    tickFormatter={(tick) => tick.toFixed(0)}
                                    type="number"
                                />
                                <YAxis />
                                <Tooltip  />
                                <Area type="monotone" dataKey="y" stroke="orange" fill="orange" fillOpacity={0.7} />
                            </AreaChart>
                        </ResponsiveContainer>
                        <ResponsiveContainer width={800} height={500}>
                            <BarChart data={keyPlayers}>
                                <XAxis
                                    dataKey="index"
                                    domain={['auto', 'auto']}
                                    tickFormatter={(tick) => tick.toFixed(0)}
                                    type="number"
                                />
                                <YAxis />
                                <Tooltip  />
                                <Bar type="monotone" dataKey="y" stroke="orange" fill="orange" fillOpacity={0.7} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                )}
            </div>
        </div>
    );
}


// import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
// import InvestAPI from "../js-calculations/InvestAPI";
// import { Legend } from "@headlessui/react";

// export default function Main() {
//     const investorCapital = [10000, 50000, 250000, 120000, 45000, 3000000];
//     let predicted = InvestAPI.analyzeInvestorCapital(investorCapital, 100);
//     predicted = predicted.map((item, index) => {
//         return {
//             x: index,
//             y: Math.floor(item)
//         }
//     })
//     return (
//         <div>
//             <ResponsiveContainer width={800} height={500}>
//                 <LineChart
//                     width={'100%'}
//                     data={predicted}
//                     margin={{
//                         top: 5,
//                         right: 0,
//                         left: 0,
//                         bottom: 5,
//                     }}
//                 >
//                     {/*<CartesianGrid strokeDasharray="3 3"/>*/}
//                     <XAxis dataKey='x'/>
//                     <YAxis dataKey='y'/>
//                     <Tooltip/>
//                     <Legend/>
//                     <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth={2} dot={null} connectNulls={false}/>
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     )
// }