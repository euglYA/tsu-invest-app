import clsx from "clsx";
import moment from "moment";
import { useState } from "react";
import Modal from "../modals/modal";
import Recommendations from "../helpers/recommendations";

export default function List(props) {
    const [modalInfo, setModalInfo] = useState(undefined)    

    if (props?.data == undefined || props?.data?.length == 0 ) {
        return (
            <div>
                <p>В истории ещё нет записей</p>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 w-full gap-3">
            {props.data?.map((item, index) => {
                if (item == undefined) {
                    return null;
                }
                return (
                    <button 
                        key={index} 
                        className={clsx(`bg-${Recommendations.getColorByAlpha(item?.alpha)}`, "w-full max-w-3xl h-28 shadow-lg rounded-lg font-medium px-4 py-2 text-gray-900/80 relative hover:shadow-none transition-all ease-in-out duration-300")}
                        onClick={() => {setModalInfo(item)}}    
                    >
                        
                        <p>{moment(item?.date).format('DD/MM/YYYY, HH:mm')}</p>
                        <p>{"α: " + item?.alpha.toFixed(5)}</p>
                    </button>
                )
            })}
            <Modal isOpen={modalInfo && true} onClose={() => {setModalInfo(undefined)}}>
                <div className="px-4 py-2 font-medium text-gray-900/80 max-w-2xl">
                    <p>{moment(modalInfo?.date).format('DD/MM/YYYY, HH:mm')}</p>
                    <p>{"α: " + modalInfo?.alpha.toFixed(5)}</p>
                    <div className={clsx(`border border-${Recommendations.getColorByAlpha(modalInfo?.alpha)} px-2 py-1 rounded-lg leading-tight my-4`)}>
                        <p className="pb-2 font-bold">Рекомендация</p>
                        <p>{Recommendations.getTextByAlpha(modalInfo?.alpha)}</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}