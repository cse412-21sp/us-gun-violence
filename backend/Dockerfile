FROM python:3.6-buster

COPY .  ./work

RUN mkdir live && cd ./work && pip3 install -r requirements.txt

ENV NLTK_DATA="./nltk_data"

# CMD ["python", "main.py"]

EXPOSE 3000
