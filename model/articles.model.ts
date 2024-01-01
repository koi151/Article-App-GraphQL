import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    avatar: String,
    description: String,
    categoryId: String,
    deleted: {
      type: Boolean,
      default: false
    }
  }
)

const Article = mongoose.model("Article", ArticleSchema, 'articles');

export default Article;