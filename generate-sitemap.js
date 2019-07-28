const fs = require('fs');

// intialize resulting string with XML header information
let sitemapXml =
  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
const lastMod = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
// foreach directory inside the docs folder (not recursive)
fs.readdirSync('docs', { withFileTypes: true })
  .filter(directoryOrFile => directoryOrFile.isDirectory())
  .forEach(directory => {
    sitemapXml += `<url>
        <loc>https://sports.jratzenboeck.com/${directory.name}</loc>
        <lastmod>${lastMod}</lastmod>
      </url>`;
  });
//      create url entry with current datetime for lastmod and https://sports.jratzenboeck.com/<folder-name> to the string
// add XML footer (closing tag for urlset) to string
sitemapXml += '</urlset>';
// write string to file docs/.vuepress/dist/sitemap.xml
// eslint-disable-next-line no-console
fs.writeFile('docs/.vuepress/dist/sitemap.xml', sitemapXml, error => console.log(error));
