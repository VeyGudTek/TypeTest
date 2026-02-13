import { type PageOption, type Results } from '@Models/.'
import { useState } from 'react'
import { Select, Test } from '@Components/.';

export function App() {
  const [currPage, setCurrPage] = useState<PageOption>("home");
  const [results, setResults] = useState<Results | undefined>();

  return (
    <div className="app">
      {currPage === "home" && <Select navigator={setCurrPage}/>}
      {currPage === "0" && <Test testOption={"0"} navigator={setCurrPage}/>}
    </div>
  )
}