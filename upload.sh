#!/bin/sh
chmod 000 .git
ncftp -u v127008 -p T0mate ftp://v127008.kasserver.com << EOF
cd madagassisch.de/mitenyMalagasy
prompt
mput -r *
rm *.sh
ls
EOF
chmod 755 .git
