const { findBannerDao, updateBannerDao } = require('../dao/bannerDao');

const { formatResponse, handleDataPattern } = require('../utils/tool.js');
module.exports.findBannerService = async () => {
    const data = await findBannerDao()
    return formatResponse(
        {
            code: 200,
            msg: '成功', 
            data: handleDataPattern(data)
        }
    )
}

module.exports.updateBannerService = async (bannerList) => {

    const data = await updateBannerDao(bannerList)
    
    return formatResponse(
        {
            code: 200,
            msg: '成功', 
            data: handleDataPattern(data)
        }
    )
}