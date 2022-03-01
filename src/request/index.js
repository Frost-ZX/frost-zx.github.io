import request from './request';

/**
 * @description 获取正文内容文件
 * @param {object} options
 * @param {string} options.category 分类名称
 * @param {string} options.itemName 内容名称
 */
export const getContentFile = (options) => {

    const {
        category,
        itemName,
    } = options;

    if (category && itemName) {
        return request({
            url: `/contents/${category}/${itemName}.md`,
            method: 'get',
        });
    } else {
        return Promise.reject();
    }

};
