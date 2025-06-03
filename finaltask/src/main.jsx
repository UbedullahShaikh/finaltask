import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TrafficLightsimulater from './TrafficLightsimulater.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrafficLightsimulater />
  </StrictMode>,
)
