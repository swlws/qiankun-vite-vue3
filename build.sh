#!/bin/bash

root=$(pwd)
echo $root

rm -rf $root/docs

cd $root/main-app && pnpm build
cd $root/app-01 && pnpm build
cd $root/app-02 && pnpm build

mkdir -p $root/docs/sub/

mv $root/main-app/dist/* $root/docs
mv $root/app-01/dist $root/docs/sub/app-01
mv $root/app-02/dist $root/docs/sub/app-02
