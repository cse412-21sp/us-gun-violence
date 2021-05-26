FROM python:3.6-buster

COPY .  .

RUN pip3 install -r requirements.txt

ENV NLTK_DATA="./nltk_data"

# CMD ["python", "main.py"]

EXPOSE 3000
