import moment from "moment";
import Recommendations from "../helpers/recommendations";
import clsx from "clsx";
import ResultCharts from "./charts";

export default function Results({data = undefined}) {

    return (
        <div>
            <h1 className="text-xl font-bold text-gray-900/80 mb-4">Рекомендации и графики</h1>
            <div>
                <div className="px-4 py-2 font-medium text-gray-900/80 max-w-2xl">
                    <p>{moment(data?.date).format('DD/MM/YYYY, HH:mm')}</p>
                    {/* <p>{"α: " + data?.alpha.toFixed(5)}</p> */}
                    <div className={clsx(`border border-${Recommendations.getColorByAlpha(data?.alpha)} px-2 py-1 rounded-lg leading-tight my-4`)}>
                        <p>{Recommendations.getTextByAlpha(data?.alpha)}</p>
                    </div>
                    <div className="-ml-10">
                        <ResultCharts coordinates={data?.density} capitals={data?.capitals}/>
                    </div>
                    <div>
                        <div className='grid grid-cols-1 py-3 px-6'>
                            <p className='text-center text-lg font-bold text-gray-900/80 mb-4'>Ключевые игроки (20% с наибольшими капиталами):</p>
                            {data?.keyPlayers?.map((item, index) => {
                                return (
                                    <div key={index} className='border-t py-2'>
                                        <p className='text-md text-gray-900/80'>Инвестор{` № ${index + 1} - `}<span className='font-semibold'>{item + ' рублей'} </span></p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}