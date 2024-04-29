import React, { useState } from 'react'

const Form = () => {

    const [items, setItems] = useState([{
        
        // Add more fields as needed
      }]);
    
      // Function to handle adding a new item field
      const handleAddItem = () => {
        setItems([...items, {
          // Add more fields as needed
        }]);
      };
      const handleRemoveItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
      };

  return (
    <div>
      
        <div className="row mb-5">
                   <div className="col-sm-12">
                       <div className="card">
                           <div className="card-body">
                               <form  >
                                   <div className="row">
                                       <div className="col-12">
                                           <div className="form-heading">
                                               <h4>Invoice Data</h4>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">  
                                           <div className="form-group local-forms">
                                               <label >Invoice Number <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""  />
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">  
                                           <div className="form-group local-forms">
                                               <label >Type(B2C/B2G/B2C) <span className="login-danger">*</span></label>
                                               <select className='form-control select'>
                                                <option >Select</option>
                                                <option value="">B2C</option>
                                                <option value="">B2G</option>
                                                <option value="">B2C</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">  
                                           <div className="form-group local-forms">
                                               <label >Person Type(VATR/NVATR) <span className="login-danger">*</span></label>
                                               <select className='form-control select'>
                                                <option >Select</option>
                                                <option value="">VATR</option>
                                                <option value="">NVATR</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">  
                                           <div className="form-group local-forms">
                                               <label >Invoice Type (STD / PRF/ TRN / CRN / DRN) <span className="login-danger">*</span></label>
                                               <select className='form-control select'>
                                                <option >Select</option>
                                                <option value="">VATR</option>
                                                <option value="">NVATR</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Currency  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder="" />
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">  
                                           <div className="form-group local-forms">
                                               <label >Sequential Order  <span className="login-danger">*</span></label>
                                               <select className='form-control select'>
                                                <option >Select</option>
                                                <option value="">2334</option>
                                                <option value="">5555</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Date  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="date" placeholder="" />
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Time <span className="login-danger">*</span></label>
                                               <input className="form-control" type="time" placeholder="" />
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Transaction(Cash/Bank/Cheque/Card/Credit)<span className="login-danger">*</span></label>
                                               <select className='form-control select'>
                                                <option >Select</option>
                                                <option value="">Cash</option>
                                                <option value="">Bank</option>
                                                <option value="">Cheque</option>
                                                <option value="">Card</option>
                                                <option value="">Credit</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Total Amount <span className="login-danger">*</span></label>
                                               <input className="form-control" type="number" placeholder="" value={0}/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Total VAT Amount <span className="login-danger">*</span></label>
                                               <input className="form-control" type="number" placeholder="" value={0}/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Total Amount Without VAT * <span className="login-danger">*</span></label>
                                               <input className="form-control" type="number" placeholder="" value={0}/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Mauritian Currency (MUR)  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="number" placeholder="" value={0}/>
                                           </div>
                                       </div>

                                     </div>

                                     {/* Seller Data */}
                                     <div className="row" style={{ borderTop: "2px solid"}}>
                                       <div className="col-12 mt-5">
                                           <div className="form-heading">
                                               <h4>Seller Data</h4>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Name  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Trade Name  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >TAN  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >BRN  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Phone Number  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="number" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Business Address  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Reciept Issue (Counter No / Terminal No) <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Cashier ID   <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>

                                       </div>

                                    {/* Buyer DATA */}
                                       <div className="row" style={{ borderTop: "2px solid"}}>
                                       <div className="col-12 mt-5">
                                           <div className="form-heading">
                                               <h4>Buyer Data</h4>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Name  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Buyer Type(VATR/NVTR/EXMP)  <span className="login-danger">*</span></label>
                                               <select className='form-control select'>
                                                <option >Select</option>
                                                <option value="">VATR</option>
                                                <option value="">NVTR</option>
                                                <option value="">EXMP</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >TAN  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >BRN  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Phone Number  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="number" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Business Address  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >National Identity Card Number <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>

                                       </div>

                                        {/* Item DATA */}
                                        {items.map((item, index) => (
                                                <div key={index} className="row" style={{ borderTop: "2px solid"}}>
                                                    <div className="col-12 mt-5">
                                            <div className="form-heading">
                                                <h4>Item Data {index +1}</h4>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="form-group local-forms">
                                                <label >Item Number  <span className="login-danger">*</span></label>
                                                <input className="form-control" type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="form-group local-forms">
                                                <label >Tax code  <span className="login-danger">*</span></label>
                                                <input className="form-control" type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="form-group local-forms">
                                                <label >Nature(Goods/Service)  <span className="login-danger">*</span></label>
                                                <select className='form-control select'>
                                                    <option >Select</option>
                                                    <option value="">Goods</option>
                                                    <option value="">Service</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="form-group local-forms">
                                                <label >Product Code (MRA)  <span className="login-danger">*</span></label>
                                                <input className="form-control" type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="form-group local-forms">
                                                <label >Product Code  <span className="login-danger">*</span></label>
                                                <input className="form-control" type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="form-group local-forms">
                                                <label >Item Description  <span className="login-danger">*</span></label>
                                                <input className="form-control" type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="form-group local-forms">
                                                <label >Quantity  <span className="login-danger">*</span></label>
                                                <input className="form-control" type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="form-group local-forms">
                                                <label >Unit Price <span className="login-danger">*</span></label>
                                                <input className="form-control" type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="form-group local-forms">
                                                <label >Discount <span className="login-danger">*</span></label>
                                                <input className="form-control" type="number" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="form-group local-forms">
                                                <label >BAmount  <span className="login-danger">*</span></label>
                                                <input className="form-control" type="text" placeholder=""/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Amount without VAT   (MUR) <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label > VAT Amount <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                       <div className="col-12 col-md-6 col-xl-3">
                                           <div className="form-group local-forms">
                                               <label >Total Amount  <span className="login-danger">*</span></label>
                                               <input className="form-control" type="text" placeholder=""/>
                                           </div>
                                       </div>
                                                </div>
                                            ))}
                                       <div className="col-12">
                                           <div className="doctor-submit text-end">
                                               <a  onClick={handleAddItem} className="btn btn-success p-3  mb-5 m-2">Add Item</a>
                                               <a  onClick={handleRemoveItem} className="btn btn-danger p-3  mb-5 m-2">Remove Item</a>
                                           </div>
                                           
                                       </div>

           
                                       <div className="col-12">
                                           <div className="doctor-submit text-end">
                                               <button  className="btn btn-primary submit-form me-2">Submit</button>
                                               <button className="btn btn-primary cancel-form">Cancel</button>
                                           </div>
                                       </div>
                               </form>
                           </div>
                       </div>	
                       </div>
                       </div>
    </div>
  )
}

export default Form