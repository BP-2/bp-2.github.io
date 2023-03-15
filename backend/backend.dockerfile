FROM python:3.10-alpine

WORKDIR /app

COPY ./requirements.txt /app/
RUN pip install -r requirements.txt

COPY ./app /app
ENV PYTHONPATH=/app

CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80" ]