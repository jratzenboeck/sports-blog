#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run prod

# generate sitemap.xml
npm run generate:sitemap

# submit sitemap to google
curl http://www.google.com/ping?sitemap=https://sports.jratzenboeck.com/sitemap.xml

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'sports.jratzenboeck.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jratzenboeck/sports-blog.git master:gh-pages

cd -