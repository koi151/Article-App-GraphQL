import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Article {
    id: ID,
    title: String
    avatar: String,
    description: String,
  }

  type Category {
    id: ID,
    title: String
    avatar: String,
  }

  type Query {
    getListArticle: [Article],
    getArticle(id: ID): Article,

    getListCategory: [Article],
    getCategory(id: ID): Article,
  }


  input ArticleInput {
    title: String,
    avatar: String,
    description: String,
  }

  input CategoryInput {
    title: String,
    avatar: String
  }

  type Mutation {
    createArticle(article: ArticleInput): Article,
    deleteArticle(id: ID): String,
    updateArticle(id: ID, article: ArticleInput): Article,

    createCategory(category: CategoryInput): Category,
    deleteCategory(id: ID): String,
    updateCategory(id: ID, category: CategoryInput): Category,
  }
`;