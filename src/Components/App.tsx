import { tests, type PageOption, type Results, type TestOption } from '@Models/.'
import { useState } from 'react'
import { Select, Test } from '@Components/.';

export function App() {
  const [currPage, setCurrPage] = useState<PageOption>("home");
  const [results, setResults] = useState<Results | undefined>();

  return (
    <div className="app">
      {currPage === "home" && <Select navigator={setCurrPage}/>}
      {Object.keys(tests).includes(currPage) && <Test testOption={currPage as TestOption} navigator={setCurrPage}/>}
    </div>
  )
}