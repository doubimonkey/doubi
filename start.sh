pkill -9 nginx
nginx
forever stopall
forever start /home/doubi/doubi/weixin/bin/www;
forever start /home/doubi/doubi/website/bin/www;
forever start /home/doubi/doubi/blog/bin/www;
