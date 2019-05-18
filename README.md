# insongly
![in songly](https://github.com/k-pusch/insongly/blob/master/insongly/images/insongly_klein.png "insongly")
<br>

this project visualize your most played 50 songs over the last time.
using vue.js and the spotify api, deployed via surge.

just check it out: [insongly](https://insongly.surge.sh)

## setup
install all dependencies and start localhost

```
cd insongly
yarn install
yarn serve

```

## build
build and bundle all js and css files.

```
yarn run build
```

## deploy via surge
deploy build version via surge. just type in your shell:
```
cd insongly/dist
surge --domain https://insongly.surge.sh
```
