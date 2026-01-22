
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodosProvider } from './context/Todos.tsx'

createRoot(document.getElementById('root')!).render(
  <TodosProvider>
    <App />
  </TodosProvider>,
)
