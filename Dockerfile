FROM python:3.6-buster

COPY ./backend  ./work

RUN mkdir live && cd ./work && pip3 install -r requirements.txt
RUN sudo chmod +x ./work/main.py

ENV NLTK_DATA="./work/nltk_data"

CMD ["python", "./work/main.py"]

EXPOSE 80
