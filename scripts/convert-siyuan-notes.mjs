import { readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @description 处理 Markdown 文件的 frontmatter
 * - 给 title 属性值加上引号
 * @param {string} filePath Markdown 文件路径
 */
function convertFrontmatter(filePath) {
  try {

    // 读取文件内容
    let contentOld = readFileSync(filePath, { encoding: 'utf-8' });

    // 匹配 frontmatter（介于 --- 之间的内容）
    let frontmatterRegExp = /^---\n([\s\S]*?)\n---/;
    let frontmatterMatched = contentOld.match(frontmatterRegExp);
    let frontmatterStr = frontmatterMatched ? frontmatterMatched[1] : '';

    if (!frontmatterStr) {
      console.warn(`文件 ${filePath} 没有找到 frontmatter`);
      return;
    }

    /** @type {Record<string, string>} */
    let frontmatterInfo = {};

    let frontmatterLines = frontmatterStr.split('\n').map((line) => {
      return line.trim();
    }).filter((line) => {
      return line !== '';
    });

    for (let line of frontmatterLines) {

      // 跳过注释行
      if (line.startsWith('#')) {
        continue;
      }

      // 匹配 key: value 格式
      let matched = line.match(/^(\w+):\s*(.*)$/);

      if (!matched) {
        continue;
      }

      let key = matched[1];
      let value = matched[2];

      frontmatterInfo[key] = value;

    }

    let titleInfo = frontmatterInfo['title'];

    // 标题添加引号
    if (!titleInfo.startsWith('"') && !titleInfo.endsWith('"')) {
      frontmatterInfo['title'] = `"${titleInfo.replace(/"/g, '\\"')}"`;
    }

    let frontmatterNew = '---\n' + Object.keys(frontmatterInfo).map((key) => {
      return `${key}: ${frontmatterInfo[key]}`;
    }).join('\n') + '\n---';

    // 替换整个 frontmatter
    let contentNew = contentOld.replace(frontmatterRegExp, frontmatterNew);

    // 写回文件
    writeFileSync(filePath, contentNew, { encoding: 'utf-8', flag: 'w' });

    console.info('处理文件 frontmatter 完成');

  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错：`);
    console.error(String(error));
  }
}

/** 转换 Markdown 表格为 JSON */
function markdownTableToJson(markdownTable = '') {

  // 移除行首尾的管道符号和空格，然后按管道符号分割
  let parseTableRow = (line) => {
    return line
      .replace(/^\||\|$/g, '') // 移除首尾的管道符号
      .replace(/\\/g, '')      // 移除转义符号
      .replace(/<br\/>/g, '')  // 移除换行标签
      .split('|')
      .map(cell => cell.trim());
  };

  // 检查分隔行是否包含至少一个冒号或连字符
  let isValidTableSeparator = (line) => {
    return line.includes('-') && line.includes('|');
  };

  // 按行分割表格
  let lines = markdownTable.trim().split('\n');

  // 解析表头
  let headerLine = lines[0];
  let headers = parseTableRow(headerLine);

  // 解析表头分隔行（第二行），用于验证表格格式
  let separatorLine = lines[1];

  if (!isValidTableSeparator(separatorLine)) {
    throw new Error('无效的 Markdown 表格');
  }

  // 解析数据行
  let dataRows = lines.slice(2).map(line => parseTableRow(line));

  // 转换为 JSON 对象数组
  let jsonArray = dataRows.map(row => {

    let obj = {
      'title': '',
      'slug': '',
      'created-at': '',
      'updated-at': '',
      'is-hide': '',
    };

    headers.forEach((header, index) => {

      let key = header.trim();
      let text = row[index];

      if (typeof obj[key] !== 'undefined') {
        obj[key] = text ? text.trim() : '';
      }

    });

    return obj;

  });

  return jsonArray;

}

(function () {

  console.clear();

  let rootDir = join(__dirname, 'siyuan-notes');
  let indexFilePath = join(rootDir, 'blog.frost-zx.top.md');
  let markdownDir = join(rootDir, 'blog.frost-zx.top');
  let jsonPath = join(rootDir, 'content-list.json');

  let indexContent0 = readFileSync(indexFilePath, { encoding: 'utf-8' });
  let indexContent1 = indexContent0.split('\n').filter((text) => {
    // 只保留表格行
    return text.startsWith('|');
  }).join('\n');

  // 转换为 JSON
  let indexJson = markdownTableToJson(indexContent1);

  // 处理文件
  for (let i = indexJson.length - 1; i >= 0; i--) {

    let item = indexJson[i];
    let oldName = (item['title'] + '.md').replace(/[":<>]/g, '_');
    let oldPath = join(markdownDir, oldName);
    let newName = item['slug'] + '.md';
    let newPath = join(markdownDir, newName);

    if (item['is-hide']) {
      console.warn(`删除文件：${oldName}`);
      rmSync(oldPath);
      indexJson.splice(i, 1);
      continue;
    }

    console.info(`重命名文件：${oldName} -> ${newName}`);
    renameSync(oldPath, newPath);
    convertFrontmatter(newPath);

  }

  // 输出 JSON 文件
  writeFileSync(jsonPath, JSON.stringify(indexJson, null, 2), {
    encoding: 'utf-8',
    flag: 'w',
  });

})();
