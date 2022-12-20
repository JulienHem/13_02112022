import {mockedBalanceData} from "../../mockedData/balance";
import BalanceItem from "../balanceItem/balanceItem";
import Balance from "../../models/balance";
import {useEffect, useState} from "react";

export default function BalanceList() {

    const [balanceData, setBalanceData] = useState<Balance[]>([]);

    useEffect(() => {
        setBalanceData(mockedBalanceData);
    }, [])

    return (
        <div>
            {
                <>
                    <BalanceItem balance={balanceData[0]} />
                    <BalanceItem balance={balanceData[1]} />
                    <BalanceItem balance={balanceData[2]} />
                </>

            }
        </div>
    )
}
