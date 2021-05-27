FROM python:3.6-buster

COPY ./backend  ./work

RUN mkdir live && cd ./work && pip3 install --user -r  requirements.txt
RUN chmod 777 -R ./work

ENV NLTK_DATA="./work/nltk_data"


EXPOSE 80
