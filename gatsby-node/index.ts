import { GatsbyNode } from "gatsby"
import { createSlidePages } from './createPages'
// ______________________________________________________
//
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => Promise.all([
  await createSlidePages({ graphql, createPage })
])
