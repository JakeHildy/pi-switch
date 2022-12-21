## connect pi to network

drag & drop ssh and wpa_supplicant.conf file onto pi boot ssd.

## installing node

`https://www.golinuxcloud.com/install-nodejs-and-npm-on-raspberry-pi/`

download node

> here has all the node versions: https://github.com/sdesalas/node-pi-zero

`wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v16.3.0.sh | bash`

install node
`sudo apt install nodejs`

test
`node --version`
`npm --version`

## installing git

`sudo apt update`
`sudo apt install git`

## clone pi-switch repo

`git clone https://github.com/JakeHildy/pi-switch.git`

## other commands

> check architecture for pi:
> `uname -m`
