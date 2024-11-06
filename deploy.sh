git add .
git commit -m '-'
git push

# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
yarn build
# 进入生成的文件夹，这里是默认的路径，可以自定义
cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:js-helloworld/Blogs.git master:blogs

cd -