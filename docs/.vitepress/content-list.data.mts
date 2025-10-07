import { createContentLoader } from 'vitepress';

import contentList from './content-list.json';

/** 文章信息列表 */
type ContentList = {
  'created-at': string;
  'is-hide': string;
  'slug': string;
  'title': string;
  'updated-at': string;
  'url': string;
}[];

/** 文章信息列表，按日期分类 */
type ContentListByDateArray = {
  year: string;
  items: {
    month: string;
    items: ContentList;
  }[];
}[];

/** 文章信息列表，按日期分类（格式：`{ 年: { 月: [] } }`）*/
type ContentListByDateObject = Record<string, Record<string, ContentList>>;

/** 文章信息列表，按 slug 分类 */
type ContentListBySlug = Record<string, ContentList[number]>

let contentListFull: ContentList = JSON.parse(JSON.stringify(contentList));
let contentListByDateArray: ContentListByDateArray = [];
let contentListByDateObject: ContentListByDateObject = {};
let contentListBySlug: ContentListBySlug = {};

for (let i = 0; i < contentListFull.length; i++) {

  let item = contentListFull[i];
  let date = new Date(item['created-at']);
  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1);

  contentListBySlug[item.slug] = item;

  // 初始化年数据
  if (!contentListByDateObject[year]) {
    contentListByDateObject[year] = {};
  }

  // 初始化月数据
  if (!contentListByDateObject[year][month]) {
    contentListByDateObject[year][month] = [];
  }

  // 放到对应的月数据中
  contentListByDateObject[year][month].push(item);

}

// 将 contentListByDateObject 数据转换为数组
for (let yearStr in contentListByDateObject) {

  let yearList = contentListByDateObject[yearStr];
  let children: ContentListByDateArray[number]['items'] = [];

  contentListByDateArray.push({
    year: yearStr,
    items: children,
  });

  for (let monthStr in yearList) {
    children.push({
      month: monthStr,
      items: yearList[monthStr],
    });
  }

  // 按月份降序排序
  children.sort((a, b) => {
    return Number(b.month) - Number(a.month);
  });

}

// 按年份降序排序
contentListByDateArray.sort((a, b) => {
  return Number(b.year) - Number(a.year);
});

export default createContentLoader('content/*.md', {
  excerpt: false,
  includeSrc: false,
  render: false,
  transform(rawData) {

    if (rawData.length !== Object.keys(contentListBySlug).length) {
      throw new Error('文章信息列表数据不完整');
    }

    // 提取信息
    rawData.forEach((item) => {

      let slug = item.url.replace(/(^\/content\/|\.html$)/g, '');
      let data = contentListBySlug[slug];

      // 更新数据
      if (data) {
        data.url = item.url;
      }

    });

    return {
      contentListByDate: contentListByDateArray,
    };

  },
});
