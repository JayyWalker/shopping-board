import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { BiSearch } from "react-icons/bi"

const SearchRow = () => {
  return (
    <section className="bg-white p-6">
      <div
        className="rounded-3xl border-black flex content-center bg-gray-100 border-gray-300"
        style={{ borderWidth: 1 }}
      >
        <div className="flex">
          <BiSearch className="h-8 m-3 self-center w-8 text-gray-500" />
        </div>
        <form className="flex-1">
          <input
            type="search"
            name="search"
            placeholder="Search for an item"
            className="font-bold text-2xl h-full w-2/3 focus:outline-none bg-gray-100 placeholder-gray-500 text-gray-800"
          />
        </form>
      </div>
    </section>
  )
}

const Home: BlitzPage = () => {
  return (
    <>
      <SearchRow />
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
