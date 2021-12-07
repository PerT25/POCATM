import React from 'react'
import './DBCDTB_themsdt.css';
import QLTB_CDTB from '../../QLTB_GSM/QLTB_CDTB/QLTB_CDTB';
import QLTB_CDTB_themsdt from '../../QLTB_GSM/QLTB_CDTB/QLTB_CDTB_sdt/QLTB_CDTB_themsdt/QLTB_CDTB_themsdt';


export default function DBCDTB_themsdt() {
    return (
        <div className="DBCDTB">
            <QLTB_CDTB />
            <QLTB_CDTB_themsdt />

        </div>
    )
}
