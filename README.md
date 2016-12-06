if you have guard error, run next command echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

bundle

For MySQL installation on Linux distributive:
1) sudo apt-get install mysql-server mysql-client libmysqlclient-dev;
2) enter your password, as 'password';

create db
1) rake db:create;
2) rake db:migrate;
