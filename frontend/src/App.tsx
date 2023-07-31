import Layout from "./components/layout"
import Hero from "./components/hero/Hero"

function App() {

  return (
    <Layout>
      <Hero />
      <section style={{height: "100vh", backgroundColor: "red"}}></section>
    </Layout>
  )
}

export default App
