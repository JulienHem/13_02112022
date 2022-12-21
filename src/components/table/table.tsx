import './table.scss';

interface IProps {
    children: any;
}

export default function Table({children}: IProps) {


    return (

        <div className="table-wrapper">

                <div className="table-head">
                    <p style={{width: '10%'}}></p>
                    <p style={{width: '15%'}}>Date</p>
                    <p style={{width: '25%'}}>Description</p>
                    <p style={{width: '20%'}}>Amount</p>
                    <p style={{width: '20%'}}>Balance</p>
                </div>
                <div className="table-body">
                    {children}

                </div>
        </div>
    )
}
