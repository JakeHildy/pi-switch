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

## connect to a network

replace network name (ssid) and password in the `wpa_supplicant.conf` file.

## install and run ngrok

https://medium.com/@gaelollivier/connect-to-your-raspberry-pi-from-anywhere-using-ngrok-801e9fd1dd46
> https://medium.com/@gaelollivier/connect-to-your-raspberry-pi-from-anywhere-using-ngrok-801e9fd1dd46 > https://ngrok.com/download

1. Run these commands to download and install
   wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip
   unzip ngrok-stable-linux-arm.zip
   ./ngrok --version

2. Set AuthToken
   `./ngrok authtoken <urauthtoken>`

3. Fire up server
   `./ngrok http https://localhost:<port>`

## other commands

> check architecture for pi:
> `uname -m`

Shut down the Raspberry Pi properly with the command:
sudo shutdown -h now
