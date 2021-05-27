FROM python:3.6-buster

COPY ./backend  ./work


RUN apt update &&  apt-get install libcap2-bin  -y

RUN setcap 'cap_net_bind_service=+ep' ./work/main.py

RUN mkdir live && cd ./work && pip3 install -r  requirements.txt
RUN chmod 777 -R ./work

ENV NLTK_DATA="./work/nltk_data"


EXPOSE 80
