import { useState } from "react"
import Landing from "./pages/Landing"
import Proposal from "./pages/Proposal"
import Accepted from "./pages/Accepted"

function App() {
  const [page, setPage] = useState("landing")

  return (
    <>
      {page === "landing" && <Landing setPage={setPage} />}
      {page === "proposal" && <Proposal setPage={setPage} />}
      {page === "accepted" && <Accepted />}
    </>
  )
}

export default App
