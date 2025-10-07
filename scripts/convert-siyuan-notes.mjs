import { readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** 转换 Markdown 表格为 JSON */
function markdownTableToJson(markdownTable = '') {

  // 移除行首尾的管道符号和空格，然后按管道符号分割
  let parseTableRow = (line) => {
    return line
      .replace(/^\||\|$/g, '') // 移除首尾的管道符号
      .replace(/\\/g, '')      // 移除转义符号
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
      'created-at': '',
      'is-hide': '',
      'slug': '',
      'title': '',
      'updated-at': '',
    };

    headers.forEach((header, index) => {
      let key = header.trim();
      let text = row[index];
      obj[key] = text ? text.trim() : '';
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
    let oldName = (item['title'] + '.md').replace(/"/g, '_');
    let oldPath = join(markdownDir, oldName);
    let newName = item['slug'] + '.md';
    let newPath = join(markdownDir, newName);

    if (item['is-hide']) {
      console.warn(`删除文件：${oldName}`);
      rmSync(oldPath);
      indexJson.splice(i, 1);
      continue;
    }

    console.warn(`重命名文件：${oldName} -> ${newName}`);
    renameSync(oldPath, newPath);

  }

  // 输出 JSON 文件
  writeFileSync(jsonPath, JSON.stringify(indexJson, null, 2), {
    encoding: 'utf-8',
    flag: 'w',
  });

})();
