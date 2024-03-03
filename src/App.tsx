import { Routes, Route, Navigate } from 'react-router-dom'
import { ComingSoon } from './pages'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/coming-soon" element={<ComingSoon />} />
            </Routes>
            <Navigate to="/coming-soon" />
        </div>
    )
}

export default App
