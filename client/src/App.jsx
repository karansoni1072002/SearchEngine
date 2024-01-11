import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import ResultsPage from './components/ResultsPage'
import LoadingOverlay from './components/LoadingOverlay'

function App() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState()
  const [resultsUsedToSummarize, setResultsUsedToSummarize] = useState()

  const [summaryText, setSummaryText] = useState()
  const [loading, setLoading] = useState(false)

  const searchData = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/search', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input })
    })

    const data = await res.json();
    const resultData = data.results;
    const summaryData = data.summary.summary_text;
    const firstFiveResults = resultData.slice(0, 5);
    console.log(resultData);
    console.log(summaryData);
    setResults(resultData)
    setSummaryText(summaryData)
    setResultsUsedToSummarize(firstFiveResults);
    setLoading(false);
  }

  return (
    <>
      <div className={!results ? "h-screen w-full bg-myBG font-mulish" : "w-full h-full bg-myBG font-mulish"}>
        {loading ? (
          <LoadingOverlay />
        ) : (
          <div className=""></div>
        )
        }
        {!results ? (
          <SearchBar searchData={searchData} input={input} setInput={setInput} />
        ) : (
          <ResultsPage searchData={searchData} input={input} setInput={setInput} summaryText={summaryText} resultsUsedToSummarize={resultsUsedToSummarize} results={results} />
        )
        }
      </div >
    </>
  )
}

export default App
