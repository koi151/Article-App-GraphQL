import Article from './model/articles.model';
import Category from './model/category.model';

export const resolvers = {
  Query: {
    getListArticle: async () => {
      try {
        const articles = await Article.find({
          deleted: false
        })
        
        return articles;
  
      } catch (error) {
        console.error("Error while fetching category:", error);
        throw new Error("Failed to fetch category");
      }
      
    },

    getArticle: async (_, args) => {
      try {
        const { id } = args;

        const article = await Article.findOne({
          _id: id,
          deleted: false
        })

        return article;

      } catch (error) {
        console.error("Error while fetching article:", error);
        throw new Error("Failed to fetch article");
      }
    },

    getListCategory: async () => {
      try {
        const categories = await Category.find({
          deleted: false
        })

        return categories;

      } catch (error) {
        console.error("Error while fetching categories:", error);
        throw new Error("Failed to fetch categories");
      }
    },

    getCategory: async (_, args) => {
      try {
        const { id } = args;

        const category = await Category.findOne({
          _id: id,
          deleted: false
        })

        return category;

      } catch (error) {
        console.error("Error while fetching category:", error);
        throw new Error("Failed to fetch category");
      }
    }
  },

  Mutation: {
    // Article
    createArticle: async (_, args) => {
      const { article } = args;

      const newArticle = new Article(article);
      await newArticle.save();

      return newArticle;
    },

    deleteArticle: async (_, args) => {
      const { id } = args;

      await Article.updateOne(
        { _id: id }, 
        { 
          deleted: true,
          deletedAt: Date()
        }
      )

      return 'Deleted successfully'
    },

    updateArticle: async (_, args) => {
      const { id, article } = args;

      const updatedArticle = await Article.findOneAndUpdate(
        { 
          _id: id,
          deleted: false
        },
        article,
        { new: true }
      );

      return updatedArticle;
    },

    // Category
    createCategory: async (_, args) => {
      try {
        const { category } = args;

        const newCategory = new Category(category);
        await newCategory.save();

        return newCategory

      } catch (error) {
        console.log('Error occurred while creating category:', error);
      }
    }, 

    deleteCategory: async (_, args) => {
      try {
        const { id } = args;

        await Category.updateOne({
          _id: id,
          deleted: true
        })

        return "Deleted successfully"

      } catch (error) {
        console.log("Error occurred while deleting category");
      }
    },

    updateCategory:async (_, args) => {
      try {
        const { id, category } = args;
        
        const updatedCategory = await Category.findOneAndUpdate(
          {
            _id: id,
            deleted: false
          }, 
          category,
          { new: true }
        );

          return updatedCategory;

      } catch (error) {
        console.log("Error occurred while updating category:", error);
      }
    }

  }
}