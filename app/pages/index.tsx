import { Suspense } from "react"
import { BlitzPage, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import { BiSearch } from "react-icons/bi"
import getTags from "app/queries/getTags"

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

const Tag = ({ name }) => {
  return (
    <span className="bg-gray-900 mr-3 px-4 py-2 rounded-3xl text-gray-100 hover:bg-gray-500 hover:text-white">
      {name}
    </span>
  )
}

const TagsStrip = ({ tags }) => {
  return (
    <section className="bg-white pb-6 pt-3 px-6">
      {tags.map((tag) => (
        <Tag key={tag.id} name={tag.name} />
      ))}
    </section>
  )
}

const TagsWrapper = () => {
  // @ts-ignore
  const [tags] = useQuery(getTags, {})

  return <TagsStrip tags={tags} />
}

const Home: BlitzPage = () => {
  return (
    <>
      <SearchRow />
      <Suspense fallback={<div>Loading tags...</div>}>
        <TagsWrapper />
      </Suspense>
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
