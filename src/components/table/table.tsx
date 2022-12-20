import './table.scss';

interface IProps {
    children: any;
}

export default function Table({children}: IProps) {


    return (

        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Balance</th>
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>
        </table>
    )
}
