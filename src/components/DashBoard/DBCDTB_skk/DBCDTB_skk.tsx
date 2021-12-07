import React from 'react'
import './DBCDTB_skk.css';
import QLTB_CDTB from '../../QLTB_GSM/QLTB_CDTB/QLTB_CDTB';
import QLTB_CDTB_skk from '../../QLTB_GSM/QLTB_CDTB/QLTB_CDTB_sdt/QLTB_CDTB_skk/QLTB_CDTB_skk';


export default function DBCDTB_skk() {
    return (
        <div className="DBCDTB">
            <QLTB_CDTB />
            <QLTB_CDTB_skk />

        </div>
    )
}
