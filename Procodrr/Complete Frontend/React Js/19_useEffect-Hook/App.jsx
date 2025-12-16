import Header from "./components/Header"
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import './App.css'
import CountriesContainer from "./components/CountriesContainer"
import { useState } from "react"


const App = () => {
  const [query, setQuery] = useState('')
  return (
    <>
    <Header />
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery}/>
        <SelectMenu />
      </div>
      <CountriesContainer query={query}/>
    </main>
    </>
  )
}

export default App
