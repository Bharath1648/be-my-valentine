import { useState } from "react"
import Landing from "./pages/Landing"
import Proposal from "./pages/Proposal"
import Accepted from "./pages/Accepted"
import BackgroundMusic from "./components/BackgroundMusic"

function App() {
  const [page, setPage] = useState("landing")
  const [audioUnlocked, setAudioUnlocked] = useState(false)

  const goToProposal = () => {
    setAudioUnlocked(true)
    setPage("proposal")
  }

  return (
    <>
      <BackgroundMusic page={page} audioUnlocked={audioUnlocked} />

      {page === "landing" && <Landing setPage={goToProposal} />}
      {page === "proposal" && <Proposal setPage={setPage} />}
      {page === "accepted" && <Accepted />}
    </>
  )
}

export default App
