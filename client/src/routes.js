import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { BookInfoPage } from './pages/BookInfoPage'
import { DocumentViewPage } from './pages/DocumentViewPage'
import { DocumentsPage } from './pages/DocumentsPage'
import { FindPage } from './pages/FindPage'
import { ForumListPage } from './pages/ForumListPage'
import { ForumMessagePage } from './pages/ForumMessagePage'
import { MainPage } from './pages/MainPage'
import { NewsPage } from './pages/NewsPage'
import { NewsInfoPage } from './pages/NewsInfoPage'
import { RegisPage } from './pages/RegisPage'
import ProfilePage from './views/ProfilePage/ProfilePage'
/*import {  } from './src/pages'
import {  } from './src/pages'
import {  } from './src/pages'
import {  } from './src/pages'*/

export const useRoutes = (isAuthenticated) =>  {
    if (isAuthenticated){
        return(
        <Routes>
            <Route path = "/bookinfo"
                element = {<BookInfoPage />} 
            />
            <Route path = "/documentview" 
                element = {<DocumentViewPage />}
            />
            <Route path = "/documents" 
              element =  { <DocumentsPage />}
            />
            <Route path = "/find"  element =  
               { <FindPage />}
            />
            <Route path = "/forums"  element =  
                {<ForumListPage />}
            />
            <Route path = "/forums/:id"  element =  
                {<ForumMessagePage />}
            />
            <Route path = "/main"  element =  
                {<MainPage />}
            />
            <Route path = "/news"  element =  
               { <NewsPage />}
            />
            <Route path = "/newsinfo"  element =  
                {<NewsInfoPage />}
            />
            <Route path = "/profile-page"  element =  
                {<ProfilePage /> }
            /> 
         </Routes>)     
    }
    return (
        <Routes>
            <Route path = "/auth" element = {<AuthPage />} />
            <Route path = "/regis"  element =  
                {<RegisPage /> }
            /> 
        </Routes>
    )
}
//<Navigate to ="/main"/>