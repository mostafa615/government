import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/UsersList'
import { PermisionList} from './permision/PermisionList'
import React from 'react';


const usersBreadcrumbs: Array<PageLink> = [
  {
    title: ' المستخدمين والصلاحيات',
    path: '/apps/user-management/users',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]
const usersBreadcrumbs2: Array<PageLink> = [
  {
    title: ' الصلاحيات',
    path: '/apps/user-management/users',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]
// const PermisionPage1 = () => { return (
//   <Routes>
//    <Route element={<Outlet />}>
//       <Route
//         path='users'
//         element={
//           <>

//             <PageTitle breadcrumbs={usersBreadcrumbs2}> الصلاحيات  </PageTitle>
//             <PermisionList />
//           </>
//         }
//       />
//     </Route>
    
//    </Routes>

  
// )}
const UsersPage = () => {
  
  return (
    
    <React.Fragment>

     <Routes>
      
       <Route element={<Outlet />}>
        <Route
          path='users'
          element={
            <>

              {/* <PageTitle breadcrumbs={usersBreadcrumbs}> المستخدمين  </PageTitle> */}
              <h3>الصلاحيات</h3>

              <PermisionList />

              <h3>المستخدمين</h3>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/user-management/users' />} />
    </Routes>

    </React.Fragment>

  )
}

export default UsersPage
