
 
function PermisionList(){
   return (
<div id="kt_app_content" className="app-content  flex-column-fluid ">
    
           
     <div id="kt_app_content_container" className="app-container  container-fluid ">
        
 <div className="card card-flush ">
 <div className="card-header mt-6">
     <div className="card-title">
         <div className="d-flex align-items-center position-relative my-1 me-5">
            {/* <i className="ki-outline ki-magnifier fs-3 position-absolute ms-5"></i>               */}
              {/* <input type="text" data-kt-permissions-table-filter="search" className="form-control form-control-solid w-250px ps-13" placeholder="Search Permissions"/> */}
        </div>
         
    </div>
 
     <div className="card-toolbar">
         <button type="button" className="btn btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_permission">
            <i className="ki-outline ki-plus-square fs-3"></i>                اضافة صلاحية جديدة
        </button>
     </div>
 </div>
 
 <div className="card-body pt-0">
     <div id="kt_permissions_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="table-responsive"><table className="table align-middle table-row-dashed fs-6 gy-5 mb-0 dataTable no-footer" id="kt_permissions_table">
        <thead>
            <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
              <th className="min-w-125px sorting"   aria-controls="kt_permissions_table"    aria-label="Name: activate to sort column ascending" style={{width: "203.625px;"}}>العنوان</th>
              <th className="min-w-250px sorting_disabled"    aria-label="Assigned to" style={{width: "443.8px;"}}>   الصلاحيات</th><th className="min-w-125px sorting"   aria-controls="kt_permissions_table"    aria-label="Created Date: activate to sort column ascending" style={{width: "195.038px;"}}> تاريخ الاضافة  </th>
              <th className="text-end min-w-100px sorting_disabled" aria-label="Actions" style={{width: "119.238px;"}}>العمليات</th></tr>
        </thead>
        <tbody className="fw-semibold text-gray-600">

                                
                        <tr className="odd">
                    <td>User Management</td>
                    <td>
                                                        <a href="/metronic8/demo31/../demo31/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                                                </td>
                    <td data-order="2023-05-05T11:30:00+03:00">
                        05 May 2023, 11:30 am                        </td>
                    <td className="text-end">
                        <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                            <i className="ki-outline ki-setting-3 fs-3"></i>                            </button>
                        <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                            <i className="ki-outline ki-trash fs-3"></i>                            </button>
                    </td>
                </tr><tr className="even">
                    <td>Content Management</td>
                    <td>
                                                        <a href="/metronic8/demo31/../demo31/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                                                        <a href="/metronic8/demo31/../demo31/apps/user-management/roles/view.html" className="badge badge-light-danger fs-7 m-1">Developer</a>
                                                        <a href="/metronic8/demo31/../demo31/apps/user-management/roles/view.html" className="badge badge-light-success fs-7 m-1">Analyst</a>
                                                        <a href="/metronic8/demo31/../demo31/apps/user-management/roles/view.html" className="badge badge-light-info fs-7 m-1">Support</a>
                                                        <a href="/metronic8/demo31/../demo31/apps/user-management/roles/view.html" className="badge badge-light-warning fs-7 m-1">Trial</a>
                                                </td>
                    <td data-order="2023-06-24T18:05:00+03:00">
                        24 Jun 2023, 6:05 pm                        </td>
                    <td className="text-end">
                        <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                            <i className="ki-outline ki-setting-3 fs-3"></i>                            </button>
                        <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                            <i className="ki-outline ki-trash fs-3"></i>                            </button>
                    </td>
                </tr><tr className="odd">
                    <td>Financial Management</td>
                    <td>
                                                        <a href="/metronic8/demo31/../demo31/apps/user-management/roles/view.html" className="badge badge-light-primary fs-7 m-1">Administrator</a>
                                                        <a href="/metronic8/demo31/../demo31/apps/user-management/roles/view.html" className="badge badge-light-success fs-7 m-1">Analyst</a>
                                                </td>
                    <td data-order="2023-11-10T14:40:00+02:00">
                        10 Nov 2023, 2:40 pm                        </td>
                    <td className="text-end">
                        <button className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_update_permission">
                            <i className="ki-outline ki-setting-3 fs-3"></i>                            </button>
                        <button className="btn btn-icon btn-active-light-primary w-30px h-30px" data-kt-permissions-table-filter="delete_row">
                            <i className="ki-outline ki-trash fs-3"></i>                            </button>
                    </td>
                </tr>    </tbody>
    </table></div><div className="row"><div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"><div className="dataTables_length" id="kt_permissions_table_length"><label><select name="kt_permissions_table_length" aria-controls="kt_permissions_table" className="form-select form-select-sm form-select-solid"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div><div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"><div className="dataTables_paginate paging_simple_numbers" id="kt_permissions_table_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="kt_permissions_table_previous"><a href="#" aria-controls="kt_permissions_table" data-dt-idx="0"  className="page-link"><i className="previous"></i></a></li><li className="paginate_button page-item active"><a href="#" aria-controls="kt_permissions_table" data-dt-idx="1"  className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="kt_permissions_table_next"><a href="#" aria-controls="kt_permissions_table" data-dt-idx="2"  className="page-link"><i className="next"></i></a></li></ul></div></div></div></div>
 </div>
 </div>
 
<div className="modal fade" id="kt_modal_add_permission"   aria-hidden="true">
 <div className="modal-dialog modal-dialog-centered mw-650px">
     <div className="modal-content">
         <div className="modal-header">
             <h2 className="fw-bold"> اضافة صلاحية جديدة</h2>
 
             <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-permissions-modal-action="close">
                <i className="ki-outline ki-cross fs-1"></i>                </div>
         </div>
 
        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
             <form id="kt_modal_add_permission_form" className="form fv-plugins-bootstrap5 fv-plugins-framework" action="#">
                 <div className="fv-row mb-7 fv-plugins-icon-container">
                     <label className="fs-6 fw-semibold form-label mb-2">
                        <span className="required">   اسم الصلاحية</span>

                        <span className="ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Permission names is required to be unique." data-kt-initialized="1">
                            <i className="ki-outline ki-information fs-7"></i>                            </span>
                    </label>
 
                     <input className="form-control form-control-solid" placeholder="ادخل الصلاحية الجديدة   " name="permission_name"/>
                 <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
 
                 {/* <div className="fv-row mb-7">
                     <label className="form-check form-check-custom form-check-solid me-9">
                        <input className="form-check-input" type="checkbox" value="" name="permissions_core" id="kt_permissions_core"/>
                        <span className="form-check-label" >
                            Set as core permission
                        </span>
                    </label>
                 </div> */}
 
                 {/* <div className="text-gray-600">Permission set as a <strong className="me-1">Core Permission</strong> will be locked and <strong className="me-1">not editable</strong> in future</div> */}
 
                 <div className="text-center pt-15">
                    {/* <button type="reset" className="btn btn-light me-3" data-kt-permissions-modal-action="cancel">
                          
                    </button> */}

                    <button type="submit" className="btn btn-primary" data-kt-permissions-modal-action="submit">
                        <span className="indicator-label">
                            حفظ
                        </span>
                        <span className="indicator-progress">
                            Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                    </button>
                </div>
             </form>
         </div>
     </div>
 </div>
 </div>
 <div className="modal fade" id="kt_modal_update_permission"   aria-hidden="true">
 <div className="modal-dialog modal-dialog-centered mw-650px">
     <div className="modal-content">
         <div className="modal-header">
             <h2 className="fw-bold">Update Permission</h2>
 
             <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-permissions-modal-action="close">
                <i className="ki-outline ki-cross fs-1"></i>                </div>
         </div>
 
         <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
             
 <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
     <i className="ki-outline ki-information fs-2tx text-warning me-4"></i>      
<div className="d-flex flex-stack flex-grow-1 ">
         <div className=" fw-semibold">
            
                                <div className="fs-6 text-gray-700 "><strong className="me-1">Warning!</strong> By editing the permission name, you might break the system permissions functionality. Please ensure you're absolutely certain before proceeding.</div>
                        </div>
     
        </div>
 </div>
 
            <form id="kt_modal_update_permission_form" className="form fv-plugins-bootstrap5 fv-plugins-framework" action="#">
                 <div className="fv-row mb-7 fv-plugins-icon-container">
                     <label className="fs-6 fw-semibold form-label mb-2">
                        <span className="required">Permission Name</span>

                        <span className="ms-2" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Permission names is required to be unique." data-kt-initialized="1">
                            <i className="ki-outline ki-information fs-7"></i>                            </span>
                    </label>
               
                    <input className="form-control form-control-solid" placeholder="Enter a permission name" name="permission_name"/>
                   
                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
            
                <div className="text-center pt-15">
                    <button type="reset" className="btn btn-light me-3" data-kt-permissions-modal-action="cancel">
                        Discard
                    </button>

                    <button type="submit" className="btn btn-primary" data-kt-permissions-modal-action="submit">
                        <span className="indicator-label">
                            Submit
                        </span>
                        <span className="indicator-progress">
                            Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                    </button>
                </div>
         
            </form>
        
        </div>
        
    </div>
    
</div>
 
</div>
        </div>
   
</div>  
)
}



export  {PermisionList}
