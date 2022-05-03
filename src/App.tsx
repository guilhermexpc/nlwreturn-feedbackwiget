function Potato(props) {
  return <button className="bg-violet-500 px-4 h-10 rounded text-red-400 hover:bg-violet-700 transition-colors">Send</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <h1>64</h1>
      <Potato text="test" />
      <Potato text="OK" />
    </div>

  )
}

export default App
