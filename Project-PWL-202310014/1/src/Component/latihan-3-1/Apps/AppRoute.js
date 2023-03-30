import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from '../Layouts/Layout'
import Home from '../Modules/components/Home/Home'
import Explore from '../Modules/components/Explore/Explore'
import Messages from '../Modules/components/Messages/Messages'
import Feeds from '../Modules/components/Explore/Widgets/Feeds'
import Reels from '../Modules/components/Explore/Widgets/Reels'
import FYP from '../Modules/components/Explore/Widgets/FYP'
import Profiles from '../Modules/components/Profile/Profile'
import Login from '../Modules/components/Login/Login'
import Error from '../Layouts/components/Errors/Error'


export default function AppRoute() {
    const routeLine = [
        {   
            path: 'home', 
            element: Home
        },
        {   
            path: 'explore', 
            element: Explore, 
            subExplore: [
                {   path: 'feeds', element: Feeds},
                {   path: 'reels', element: Reels},
                {   path: 'fyp', element: FYP},
            ]},
        {   
            path: 'messages', 
            element: Messages
        },
        {   path: 'profile', 
            element: Profiles
        },
    ]

    return (
        <Routes>
            {routeLine.map((v) => (
                <Route 
                    path={v.path}
                    element={<Layouts><v.element /></Layouts>} 
                >
                    {v.subExplore && v.subExplore.map(routeChild => (
                        <Route path={routeChild.path} element={<routeChild.element />} />
                    ))}
                </Route>
            ))}
            <Route index element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Layouts><Error /></Layouts>}></Route>
        </Routes>
    )
}