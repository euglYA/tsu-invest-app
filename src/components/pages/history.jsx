import { useEffect, useState } from "react";
import IndexedDB from "../../api/IndexedDB";
import List from "../history/list";

export default function History() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            let arr = await IndexedDB.getItems('investment');
            console.log(arr);
            arr = arr?.sort((a, b) => b.date - a.date)
            setData(arr)
        }
        fetchData();
    }, [])

    return (
        <div className="px-4 py-2">
            <h1 className="text-4xl font-semibold">История</h1>
            <div className="my-4 w-full">
                <List data={data}/>
            </div>
        </div>
    );
}