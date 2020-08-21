import path from "path"
import { Actions, CreatePagesArgs } from "gatsby"
//import { Site, SiteSiteMetadataAuthors } from "../types/graphql-types"
// ______________________________________________________
//
type Result = {
  allMarkdownRemark: any
}
export type PageContext = {
  node: {
    node: any
  }
}
// ______________________________________________________
//
const query = `
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          slug
          date
          title
        }
        html
      }
    }
  }
}
`
// ______________________________________________________
//
export const createSlidePages = async ({ graphql, createPage }: {
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage']
}) => {
  const result = await graphql<Result>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }
  const { edges } = result.data.allMarkdownRemark
  if (!edges) {
    throw new Error("undefined edges")
  }

  for (let node of edges) {
    if (node) {
      createPage<PageContext>({
        path: node.node.frontmatter.slug,
        component: path.resolve("src/templates/slide.tsx"),
        context: { node }
      })
    }
  }
}
