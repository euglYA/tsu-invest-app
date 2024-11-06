import clsx from "clsx";
import moment from "moment";
import { useState } from "react";
import Modal from "../modals/modal";
import Recommendations from "../helpers/recommendations";
import Results from "../analyze/results";

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
        <div className="grid grid-cols-1 w-full gap-6">
            {props.data?.map((item, index) => {
                if (item == undefined) {
                    return null;
                }
                return (
                    <button 
                        key={index} 
                        className={clsx(`bg-${Recommendations.getColorByAlpha(item?.alpha)}`, "w-full max-w-3xl h-28 shadow-sm rounded-lg font-medium px-4 py-2 text-gray-900/80 relative hover:shadow-xl transition-all ease-in-out duration-300")}
                        onClick={() => {setModalInfo(item)}}    
                    >
                        
                        <p>{moment(item?.date).format('DD/MM/YYYY, HH:mm')}</p>
                        <p>{"α: " + item?.alpha.toFixed(5)}</p>
                    </button>
                )
            })}
            <Modal isOpen={modalInfo && true} onClose={() => {setModalInfo(undefined)}}>
                <div className="px-4 py-2 font-medium text-gray-900/80 max-w-2xl">
                    <Results data={modalInfo}/>
                </div>
            </Modal>
        </div>
    );
}