import React from 'react'
import Home from '../pages/Home'
import Applyments from '../pages/Applyments'
import NewApplyment from '../pages/NewApplyment'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/applyments' element={<Applyments />} />
                <Route path='/applyments/new' element={<NewApplyment />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes