import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import SignComponent from './sign'
import InfoComponent from './info'

const App = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    })

    return (
        <Routes>
            <Route path="/" element={<SignComponent user={user} setUser={setUser} darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/user" element={<InfoComponent user={user} darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
    )
}

export default App