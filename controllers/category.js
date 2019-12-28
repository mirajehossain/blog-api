const CategoryModel = require('../utils/category');

const category = {};

category.GetCategoies = async (req, res) => {
  try {
    const result = await CategoryModel.getCategory();
    return res.json({
      success: true,
      message: 'Getting All Category Successfully.',
      data: result,
    });
  } catch (e) {
    return res.send({ success: false, message: 'An error occur' });
  }
};

category.AddCategory = async (req, res) => {
  try {
    const { body } = req;
    const result = await CategoryModel.addCategory(body);
    return res.json({
      success: true,
      message: 'New Category added Successfully.',
      data: result,
    });
  } catch (e) {
    return res.send({ success: false, message: 'An error occur' });
  }
};

category.UpdateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const result = await CategoryModel.updateCategory(id, body);
    return res.json({
      success: true,
      message: 'Updated Category Successfully.',
      data: result,
    });
  } catch (e) {
    return res.send({ success: false, message: 'An error occur' });
  }
};


category.DeleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CategoryModel.deleteCategory(id);
    return res.json({
      success: true,
      message: 'Deleted Category Successfully.',
      data: result,
    });
  } catch (e) {
    return res.send({ success: false, message: 'An error occur' });
  }
};

module.exports = category;
