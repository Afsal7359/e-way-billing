import React from 'react'

const View = () => {
  return (
    <div className='m-5 mb-5'>
        <div className='text-center'>
            <h4>KEEh6 CLEAN Ltd</h4>
            <h6>Suh6rem Square</h6>
            <h6>Sookdeo Bissoondoyal Street</h6>
            <h6>h6hone No.: (230)210 7025, Fax No.: (230)213 6758,Email: info@keeh6cleanltd.com</h6>
            <h6>Business Registration No.: C07018975</h6>
            <h6>Vat Registration No.: VAT20169612	</h6><br />
            <h4>VAT INVOICE</h4>
        </div>
        <div className='d-flex'>
            <h6 style={{color:"black", fontWeight:"500"}}>DEPARTMENT</h6>
            <h6  className='ms-5'>22CLEAN</h6>
        </div>
        <div className='d-flex'>
            <h6 style={{color:"black", fontWeight:"500"}}>CUSTOMER REF.</h6>
            <h6  className='ms-5'>SI014542</h6>
        </div>
        <div className='d-flex mb-5' >
            <h6 style={{color:"black", fontWeight:"500"}}>OUR REF:</h6>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div>
        <h6>CUSTOMER</h6>
        <h6>JUPITER CORPORATE SERVICES LIMITED</h6>
        <h6>6TH FLOOR, ST LOUIS BUSINESS CENTrE</h6>
        <h6>CNR DESROCHES & ST LOUIS StrEETS</h6>
        <h6>PORT LOUIS</h6>
        <h6>TEL NO.: 214 6313</h6>
        <h6>BUSINESS REG NO.: C20173918</h6>
        <h6>VAT REG NO.: 27822157</h6>
    </div>
    <div >
        <h6>DELIVER TO</h6>
        <h6>JUPITER CORPORATE SERVICES LIMITED</h6>
        <h6>6TH FLOOR, ST LOUIS BUSINESS CENTER</h6>
        <h6>CNR DESROCHES & ST LOUIS StrEETS</h6>
        <h6>PORT LOUIS</h6>
    </div>
    <div >
        <h6>DELIVER TO</h6>
        <h6>JUPITER CORPORATE SERVICES LIMITED</h6>
        <h6>6TH FLOOR, ST LOUIS BUSINESS CENTER</h6>
        <h6>CNR DESROCHES & ST LOUIS StrEETS</h6>
        <h6>PORT LOUIS</h6>
    </div>
</div>

        <div className='d-flex mt-5 mb-4'>
            <h6>CONTACT</h6>
            <h6 className='ms-5'>ANASI HENRI</h6>
        </div>

        <div className='mt-4 mb-5'>
        <table style={{ width: "100%", tableLayout: "fixed" }}>
    <colgroup>
        <col style={{ width: "10%" }} />
        <col style={{ width: "30%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "15%" }} />
        <col style={{ width: "25%" }} />
    </colgroup>
    <tr>
        <th><h6>CODE</h6></th>
        <th style={{ width: "30%" }}><h6>DESCRIPTION</h6></th>
        <th><h6>QTY</h6></th>
        <th><h6>UOM</h6></th>
        <th><h6>UNIT PRICE</h6></th>
        <th><h6>AMOUNT (EXCL VAT)</h6></th>
    </tr>
    <tr style={{ borderTop: "solid 1px", borderBottom: "solid 1px", marginTop: "2em" }}>
    <td style={{ padding: "15px" }}></td>
    <td style={{ padding: "15px", width: "30%" }}><h6>CLAIM FOR PROVISION OF CLEANING SERVICES AT JUPITER CORPORATE SERVICES LIMITED THE PERIOD 13TH MARCH 2024 TO 12TH APRIL 2024</h6></td>
    <td style={{ padding: "15px" }}><h6>1</h6></td>
    <td style={{ padding: "15px" }}></td>
    <td style={{ padding: "15px" }}><h6>9500.00</h6></td>
    <td style={{ padding: "15px" }}><h6>9500.00</h6></td>
</tr>
</table>

        </div>

        <div className='d-flex justify-content-end'>
            <h6>SUBTOTAL </h6>
            <h6  className='ms-5'>9,500.00</h6>
        </div>
        <div className='d-flex justify-content-end'>
            <h6>15% VAT </h6>
            <h6  className='ms-5'>1,425.00</h6>
        </div>
        <div className='d-flex justify-content-end'>
            <h6>TOTAL </h6>
            <h6 className='ms-5'>10,925.00</h6>
        </div>

        <div>
            <h6>Payment should be made a least 30 Days from Date of Invoice. Overdue accounts will be subject to interest at the rate of 1% per month from</h6>
            <h6>the date the amount is due up till final payment. In the event of recovery of amount due through an Attorney-at-law, the Attorney s commission of</h6>
      <h6>10% plus VAT thereon shall be borne by the client together with all other related legal costs, including but not limited to fees of legal advisers</h6>
       </div>

    </div>
  )
}

export default View