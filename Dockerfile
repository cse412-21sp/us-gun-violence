# FROM python:3.6-buster
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.6

COPY ./backend  ./app

# RUN apt update &&  apt-get install libcap2-bin  -y
# RUN setcap 'cap_net_bind_service=+ep' ./work/main.py

# RUN mkdir live && cd ./work && python -m pip install -r requirements.txt
# RUN chmod 777 -R ./work

RUN python -m pip install -r ./app/requirements.txt

ENV NLTK_DATA="./app/nltk_data"

# EXPOSE 8080
