import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import { TimerProvider } from './Context/TimeContext.jsx'

// Rendering the app with BrowserRouter and TimerProvider
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <TimerProvider>
            <App />
        </TimerProvider>
    </BrowserRouter>
)