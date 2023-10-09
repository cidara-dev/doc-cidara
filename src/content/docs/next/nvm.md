---
title: NVM
description: linux dasar
---

NVM merupakan singkatan dari Node Version Manager. NVM adalah sebuah program yang akan membantu kita menggunakan lebih dari satu versi Nodejs di dalam satu komputer.

## Instalasi NVM

    # menggunakan curl
    cidara@debian:~$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash


next:

    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm


###### Verifikasi

    cidara@debian:~$command -v nvm
    cidara@debian:~$nvm --version

###### Output

    cidara@debian:~$ command -v nvm
                    nvm
    cidara@debian:~$ nvm --version
                    0.39.5

## Cara Pakai

#### Melihat list Nodejs yang ada di server

    cidara@debian:~$nvm ls-remote

###### Output

    cidara@debian:~$v18.12.0   (LTS: Hydrogen)
                    v18.12.1   (LTS: Hydrogen)
                    v18.13.0   (LTS: Hydrogen)
                    v18.14.0   (LTS: Hydrogen)
                    v18.14.1   (LTS: Hydrogen)
                    v18.14.2   (LTS: Hydrogen)
                    v18.15.0   (LTS: Hydrogen)
                    v18.16.0   (LTS: Hydrogen)
                    v18.16.1   (LTS: Hydrogen)
                    v18.17.0   (LTS: Hydrogen)
                    v18.17.1   (LTS: Hydrogen)
                ->     v18.18.0   (Latest LTS: Hydrogen)

#### Update Node ke versi tertentu

    cidara@debian:~$nvm install 12
                    Now using node v12.22.6 (npm v6.14.5)

#### Cek versi Node

    cidara@debian:~$node -v
                    v12.22.6


#### Menggunakan versi Node yg sesuai

    cidara@debian:~$ nvm use 14
                    Now using node v14.18.0 (npm v6.14.15)
#### Menjalankan Aplikasi Node dengan Versi Tertentu

    cidara@debian:~$nvm run v12.13.1  app.js

- **v18.13.1** adalah versi nodejs yang akan digunakan untuk menjalankan app.js
- **app.js** adalah program Nodejs.


#### Menghapus Versi Nodejs

    cidara@debian:~$nvm uninstall v11.10.1


