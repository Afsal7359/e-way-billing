import React, { useState } from 'react'
import searchicon from '/src/assets/img/icons/search-normal.svg';
import addicon from '/src/assets/img/icons/plus.svg';
import refreshicon from '/src/assets/img/icons/re-fresh.svg';
import pdficon from '/src/assets/img/icons/pdf-icon-01.svg';
import TXticon from '/src/assets/img/icons/pdf-icon-02.svg';
import csvicon from '/src/assets/img/icons/pdf-icon-03.svg';
import Excelicon from '/src/assets/img/icons/pdf-icon-04.svg';
import Form from './Form';

const Table = () => {

    const [formvisible,setFormvisible]=useState(false)
    const [tablevisible,setTablevisible]=useState(true)

    

    const handlesubmit=()=>{
        try {
            setFormvisible(true)
            setTablevisible(false)
        } catch (error) {
            console.log(error);
        }
    }
    const handleclicktable =()=>{
        try {
            setFormvisible(false)
            setTablevisible(true)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
           { formvisible &&<button
            className="btn btn-primary submit-form mb-3  "
            onClick={handleclicktable}
          >
            View Table
          </button>}
      {tablevisible&&  <div className="row">
        <div className="col-sm-12">
        
            <div className="card  card-table show-entire">
              <div className="card-body">
                <div className="page-table-header mb-2">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="doctor-table-blk">
                        <h3>Bank List</h3>
                        <div className="doctor-search-blk">
                          <div className="top-nav-search table-search-blk">
                            <form>
                              <input type="text" className="form-control" placeholder="Search here" />
                              <a className="btn">
                                <img src={searchicon} alt="" />
                              </a>
                            </form>
                          </div>
                          <div className="add-group">
                            <a  className="btn btn-primary add-pluss ms-2" onClick={()=>handlesubmit()}>
                              <img src={addicon} alt="" />
                            </a>
                            {/* <a href="javascript:;" className="btn btn-primary doctor-refresh ms-2">
                              <img src={refreshicon} alt="" />
                            </a> */}
                          </div>
                          <a type='button' className=" me-2" >
                        {/* <img src={pdficon} alt="" /> */}
                        <input
                        className='form-control'
                          type="date"
                          required
                        />
                      </a>
                      <a type='button'  className=" me-2">
                        {/* <img src={TXticon} alt="" /> */}
                        <input
                          // {...register('toMonth', { required: 'Please select a month' })}
                        className='form-control'
                          type="date"
                          required
                        />
                        
                        </a>

                      <button className=" btn btn-primary submit-form m-3" >
                          Submit
                      </button>
                      <a href="javascript;">
                        <img src={Excelicon} alt="" />
                      </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto text-end float-end ms-auto download-grp">
                      <a href="javascript:;" className="me-2">
                        {/* <img src={pdficon} alt="" /> */}
                      </a>
                      <a href="javascript:;" className="me-2">
                        {/* <img src={TXticon} alt="" /> */}
                      </a>
                      <a href="javascript:;" className="me-2">
                        {/* <img src={csvicon} alt="" /> */}
                      </a>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table border-0 custom-table comman-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>No</th>
                      {/* <th>Bank ID</th> */}
                      <th>Tax Code</th>
                      <th>Nature</th>
                      <th>Product Code</th>
                      <th>Item Decription</th>
                      <th>Quantity</th>
                      <th>Unit price</th>
                      <th>Discount</th>
                      <th>Amount</th>
                      <th>VAT Amount</th>
                      <th>Total Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>1</td>
                    <td>T01</td>
                    <td>Goods</td>
                    <td>202356</td>
                    <td >Lorem ipsum Lorem ipsum </td>
                    <td>01</td>
                    <td>15</td>
                    <td>15</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                            
                              <a className="dropdown-item" 
                                >
                                <i className="fa-solid fa-pen-to-square m-r-5"></i> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient"
                              >
                                <i className="fa fa-trash-alt m-r-5"></i> Delete
                              </a>
                              <a
                                className="dropdown-item"
                               
                              >
                                <i className="fa fa-eye m-r-5"></i> View
                              </a>
                            </div>
                          </div>
                        </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>T01</td>
                    <td>Goods</td>
                    <td>202356</td>
                    <td>Lorem ipsum Lorem ipsum</td>
                    <td>01</td>
                    <td>15</td>
                    <td>15</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                            
                              <a className="dropdown-item" 
                                >
                                <i className="fa-solid fa-pen-to-square m-r-5"></i> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient"
                              >
                                <i className="fa fa-trash-alt m-r-5"></i> Delete
                              </a>
                              <a
                                className="dropdown-item"
                               
                              >
                                <i className="fa fa-eye m-r-5"></i> View
                              </a>
                            </div>
                          </div>
                        </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>T01</td>
                    <td>Goods</td>
                    <td>202356</td>
                    <td>Lorem ipsum Lorem ipsum </td>
                    <td>01</td>
                    <td>15</td>
                    <td>15</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                            
                              <a className="dropdown-item" 
                                >
                                <i className="fa-solid fa-pen-to-square m-r-5"></i> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient"
                              >
                                <i className="fa fa-trash-alt m-r-5"></i> Delete
                              </a>
                              <a
                                className="dropdown-item"
                               
                              >
                                <i className="fa fa-eye m-r-5"></i> View
                              </a>
                            </div>
                          </div>
                        </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>T01</td>
                    <td>Goods</td>
                    <td>202356</td>
                    <td>Lorem ipsum Lorem ipsum </td>
                    <td>01</td>
                    <td>15</td>
                    <td>15</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                            
                              <a className="dropdown-item" 
                                >
                                <i className="fa-solid fa-pen-to-square m-r-5"></i> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient"
                              >
                                <i className="fa fa-trash-alt m-r-5"></i> Delete
                              </a>
                              <a
                                className="dropdown-item"
                               
                              >
                                <i className="fa fa-eye m-r-5"></i> View
                              </a>
                            </div>
                          </div>
                        </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>T01</td>
                    <td>Goods</td>
                    <td>202356</td>
                    <td>Lorem ipsum Lorem ipsum </td>
                    <td>01</td>
                    <td>15</td>
                    <td>15</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td className="text-end">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                            
                              <a className="dropdown-item" 
                                >
                                <i className="fa-solid fa-pen-to-square m-r-5"></i> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_patient"
                              >
                                <i className="fa fa-trash-alt m-r-5"></i> Delete
                              </a>
                              <a
                                className="dropdown-item"
                               
                              >
                                <i className="fa fa-eye m-r-5"></i> View
                              </a>
                            </div>
                          </div>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>}

      {formvisible && <Form/>}
    </div>
  )
}

export default Table