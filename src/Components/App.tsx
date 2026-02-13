import { type PageOption } from '@Models/Page'
import { useState } from 'react'
import { Select, Test } from '@Components/.';

export function App() {
  const [currPage, setCurrPage] = useState<PageOption>("home");


  return (
    <div className="app">
      {currPage === "home" && <Select setPage={setCurrPage}/>}
      {currPage === "0" && <Test pageOption={"0"} navigateBack={() => setCurrPage("home")}/>}
    </div>
  )
}