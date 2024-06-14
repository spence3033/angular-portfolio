# Angular-Portfolio Summary

This respository is the code for my portfolio but the Github Page hosting this website is on another respository [github.com/spence3033/portfolio](https://github.com/spence3033/portfolio).

To view the hosted portfolio click this link [https://spence3033.github.io/portfolio/](https://spence3033.github.io/portfolio/).

## Github Pages Development Tips

URL paths don't act the way you would expect on Github Pages. You normally get 404 errors when this happens. To fix this follow these 2 steps:

1. In index.html, change <base href="/"> to <base href="/portfolio/"> or whatever the respository name is that is being hosted.
2. If you reference something from your `/assets` folder, you must use relative paths like `./assets` for the URL to work properly on Github Pages.
