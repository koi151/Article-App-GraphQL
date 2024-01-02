import Article from './model/articles.model';

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!"
    },

    getListArticle: async () => {
      const articles = await Article.find({
        deleted: false
      })
      return articles;
    },

    getArticle: async (_, args) => {
      const { id } = args;

      const article = await Article.findOne({
        _id: id,
        deleted: false
      })
      return article;
    }
  },

  Mutation: {
    createArticle: async (_, args) => {
      const { article } = args;

      const newArticle = new Article(article);
      await newArticle.save();

      return newArticle;
    }
  }
}