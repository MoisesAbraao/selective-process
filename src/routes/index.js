import React from 'react'
import Home from '../pages/Home'
import Applyments from '../pages/Applyments'
import NewApplyment from '../pages/NewApplyment'
import Applyment from '../pages/Appyment'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/applyments' element={<Applyments />} />
                <Route path='/applyments/new' element={<NewApplyment />} />
                <Route path='/applyment/:id' element={<Applyment />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes