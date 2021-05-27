FROM python:3.6-buster

COPY ./backend  ./work

RUN mkdir live && cd ./work && pip3 install -r requirements.txt
RUN chmod 777 ./work/main.py

ENV NLTK_DATA="./work/nltk_data"


EXPOSE 80
