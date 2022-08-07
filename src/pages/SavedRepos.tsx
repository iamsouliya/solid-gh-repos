import { Component, createSignal, For } from 'solid-js'
import ReposCard, { Repo } from '../components/ReposCard'


const repoFromLocalStorage = JSON.parse(localStorage.getItem('savedRepos') || '[]')
const [savedRepos, setSavedRepos] = createSignal(repoFromLocalStorage as Repo[])

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>Your saved repos</h2>
      <For each={savedRepos()}>
        {(repo: Repo) => {
          return <ReposCard repo={repo} />
        }}
      </For>
    </div>
  )
}

export { setSavedRepos, savedRepos }

export default SavedRepos
