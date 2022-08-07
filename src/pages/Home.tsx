import { Component, For } from 'solid-js'
import { repos, setUsername, username } from '../App'
import ReposCard, { Repo } from '../components/ReposCard'

const Home: Component = () => {
  const refetchWithUsername = (e: Event) => {
    e.preventDefault()
    const usernameInput = document.querySelector(
      '#usernameInput'
    ) as HTMLInputElement
    setUsername(usernameInput.value)
  }

  return (
    <div>
      <form
        class="mb-3"
        onSubmit={(e) => {
          refetchWithUsername(e)
        }}
      >
        <input
          type="text"
          class="p-1 align-middle"
          id="usernameInput"
          placeholder="Enter a GitHub username"
          required
        />
        <button class="btn btn-dark ms-3 w-auto">Fetch</button>
      </form>
      <h3>GitHub repos for {username()}</h3>
      <For each={repos()}>
        {(repo: Repo) => {
          return <ReposCard repo={repo} />
        }}
      </For>
    </div>
  )
}

export default Home
