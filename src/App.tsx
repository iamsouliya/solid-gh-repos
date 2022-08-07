import { Route, Routes } from 'solid-app-router'
import { Component, createEffect, createSignal } from 'solid-js'
import Nav from './components/Nav'
import Home from './pages/Home'
import SavedRepos from './pages/SavedRepos'

const [username, setUsername] = createSignal('iamsouliya')
const [repos, setRepos] = createSignal([])

createEffect(async () => {
  const res = await fetch(
    `https://api.github.com/users/${username()}/repos?sort=created`
  )
  setRepos(await res.json())
})

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedrepos" element={<SavedRepos />} />
      </Routes>
    </div>
  )
}

export { username, setUsername, repos, setRepos }
export default App
