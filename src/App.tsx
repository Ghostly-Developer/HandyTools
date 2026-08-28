import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import ToolWorkspace from './tools/ToolWorkspace.tsx'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-content">
        <ToolWorkspace />
      </main>
      <Footer />
    </div>
  )
}

export default App
