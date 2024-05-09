---
title: Плагин для docusaurus генерирующий постоянный url для файлов сохранения
tags: [design, website]
---

Встречая ссылки файлы *Docusaurus* всегда добавляет хэш к названиям файлов и размещает их в assets, что делает не возможным использование постоянных *url* в качестве ссылок.

<!-- truncate -->

Каждый раз когда файл изменяется, генерируется новый url, такой страшный типа:

```
https://awesomefactorio.yrfle.com/assets/files/myfile-1b5ddfaede831bdb645b145312fa83de.zip
```

[Поморочил голову разработчикам](https://github.com/facebook/docusaurus/discussions/10071) на ломаном ынглыше и получил ответ. Потом написал ещё один маленький плагин для сайта, который хостит файлы в *static* без никаких хэшей и ассетов:

```javascript
import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import path from 'path';

interface Options {
  // Add any options here if needed
}

const plugin: Plugin<[Options]> = (options) => {
  async function transformer(tree: any) {
    visit(tree, 'link', (node: any) => {
      if (node.url.endsWith(".zip")) {
        var filename = path.parse(node.url).base;
        node.url = "pathname:///saves/" + filename;
      }
    });
  }
  return transformer;
}

export default plugin;
```

Вот примеры, два на данный момент:

* [Первая сохранёнка](../../website/static/saves/AwesomeFactorio%20-%20Power%20Production.zip)
* [Вторая сохранёнка](../../website/static/saves/AwesomeFactorio%20-%20Resources.zip)

Скоро будет больше...
