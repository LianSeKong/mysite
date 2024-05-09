const bannerModel = require('./model/bannerModel');

module.exports.findBannerDao = async () => {
    return await bannerModel.findAll()
}

module.exports.updateBannerDao = async (bannerList) => {

    await bannerModel.destroy({
        truncate: true
      });

    await bannerModel.bulkCreate(bannerList);
    return await bannerModel.findAll()
}