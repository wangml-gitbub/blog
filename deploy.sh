#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 意思为将 master 构建后的代码合并到gh-pages分支上，然后在 gh-pages 分支上部署~
git push -f git@github.com:wangmeiling/vitepress-demo-mondaylab.git master:gh-pages

cd -