const ProductsModel = require("../models/product.model");

exports.allProducts = async (req, res) => {
  try {
    const { limit, sort, page } = req.query;

    const pageSize = parseInt(limit) || 10;
    const sortBy = sort || 'createdAt';
    const currentPage = parseInt(page) || 1;
    const skip = (currentPage - 1) * pageSize;

    const products = await ProductsModel.find({})
      .sort({ [sortBy]: 1 })
      .limit(pageSize)
      .skip(skip);

    const totalCount = await ProductsModel.countDocuments({});
    const totalPages = Math.ceil(totalCount / pageSize);

    return res.send({
      products: products,
      totalPages: totalPages,
      totalCount: totalCount
    });
  } catch (err) {
    console.log(err);
    return res.send({ message: err.message });
  }
};
