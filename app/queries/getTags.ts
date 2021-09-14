import db from "db"

const getTags = async () => {
  return await db.tag.findMany()
}

export default getTags()
