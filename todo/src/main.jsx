import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import './index.css'
import RTK from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RTK />
    </Provider>
  </StrictMode>
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import  store  from './store.js';
// import { Provider } from 'react-redux';
// import './index.css'
// import RTK from './Rtk.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//     <RTK />
//     </Provider>
//   </StrictMode>
// )

