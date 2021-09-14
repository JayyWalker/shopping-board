import db from "./index"
import { Tag } from "@prisma/client"

const createTags = async () => {
  const tagsInput: Tag[] = [
    // @ts-ignore
    {
      name: "Bed",
    },
    // @ts-ignore
    {
      name: "Workstation",
    },
  ]

  await db.tag.createMany({
    data: tagsInput,
  })
}

const createItems = async () => {}

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  // for (let i = 0; i < 5; i++) {
  //   await db.project.create({ data: { name: "Project " + i } })
  // }

  await createTags()
}

export default seed
