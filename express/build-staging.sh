#! /usr/bin/bash
echo "Avvio sistema di compilazione"
echo "Creazione Docker Image"
docker "build . -t git/bus-booking-app/express"
clear
echo "Creazione terminata"
echo "Avvio container"
docker run git/bus-booking-app/express