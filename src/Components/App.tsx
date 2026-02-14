import { tests, type PageOption, type ResultsDto, type TestOption } from '@Models/.'
import { useState } from 'react'
import { Results, Select, Test } from '@Components/.';

export function App() {
  const [currPage, setCurrPage] = useState<PageOption>("home");
  const [results, setResults] = useState<ResultsDto | undefined>();

  return (
    <div className="app">
      {currPage === "home" &&                   <Select navigator={setCurrPage}/>}
      {currPage === "results" &&                <Results results={results} resultSetter={setResults} navigator={setCurrPage}/>}
      {Object.keys(tests).includes(currPage) && <Test testOption={currPage as TestOption} resultSetter={setResults} navigator={setCurrPage}/>}
    </div>
  )
}