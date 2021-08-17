#!/bin/bash

echo "tools.sh start"

CRTDIR=$(pwd)

cat ./path.conf | while read line
do
	echo "push $line" >> $CRTDIR/2.log
	cd $line
	git push
done
