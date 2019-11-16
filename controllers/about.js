const AboutModel = require('../utils/about');

const about = {};

about.GetAbout = async (req, res) => {
  try {
    const result = await AboutModel.getAbout();
    return res.json({
      success: true,
      message: 'Getting data Successfully.',
      data: result,
    });
  } catch (e) {
    return res.send({ success: false, message: 'An error occur' });
  }
};

about.AddAbout = async (req, res) => {
  try {
    const { body } = req;
    const result = await AboutModel.addAbout(body);
    return res.json({
      success: true,
      message: 'Add about data Successfully.',
      data: result,
    });
  } catch (e) {
    return res.send({ success: false, message: 'An error occur' });
  }
};

about.UpdateAbout = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    delete data.id;
    const result = await AboutModel.updateAbout(id, data);
    return res.json({
      success: true,
      message: 'About Updated Successfully.',
      data: result,
    });
  } catch (e) {
    return res.send({ success: false, message: 'An error occur' });
  }
};

about.DeleteAbout = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await AboutModel.deleteAbout(id);
    return res.json({
      success: true,
      message: 'Delete about Successfully.',
      data: result,
    });
  } catch (e) {
    return res.send({ success: false, message: 'An error occur' });
  }
};

module.exports = about;
