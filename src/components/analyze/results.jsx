import moment from "moment";
import Recommendations from "../helpers/recommendations";
import clsx from "clsx";
import ResultCharts from "./charts";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Results({data = undefined}) {
    const componentRef = useRef();

    const handleDownloadPdf = async () => {
        const element = componentRef.current;
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('result.pdf');
    };

    return (
        <div ref={componentRef}>
            <h1 className="text-xl font-bold text-gray-900/80 mb-4">Рекомендации и графики</h1>
            <div>
                <div className="px-4 py-2 font-medium text-gray-900/80 max-w-2xl">
                    <p>{moment(data?.date).format('DD/MM/YYYY, HH:mm')}</p>
                    {/* <p>{"α: " + data?.alpha.toFixed(5)}</p> */}
                    <div className={clsx(`border px-2 py-1 rounded-lg leading-tight my-4`)} style={{borderColor: data?.alpha > 3 ? "#86efac" : data?.alpha > 2 ? "#fdba74" : "#fca5a5",}}>
                        <p>{Recommendations.getTextByAlpha(data?.alpha)}</p>
                    </div>
                    <div className="-ml-10">
                        <ResultCharts coordinates={data?.density} capitals={data?.capitals}/>
                    </div>
                    <div>
                        <div className='grid grid-cols-1 py-3 px-6'>
                            <p className='text-center text-lg font-bold text-gray-900/80 mb-4'>Ключевые игроки (20% с наибольшими капиталами):</p>
                            <div className='grid grid-cols-1 max-h-96 overflow-y-auto'>
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
                    <div className="w-full flex items-center justify-end mt-6 mb-2">
                        <button onClick={handleDownloadPdf} className="transition-colors ease-in-out mt-3 inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:mt-0 sm:w-auto">
                            Сохранить в PDF
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}