# Sử dụng python:3.9 làm base image
FROM python:3.9

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file requirements.txt vào container
COPY requirements.txt .

# Cài đặt các thư viện cần thiết
RUN pip install --no-cache-dir -r requirements.txt

# Sao chép toàn bộ mã nguồn ứng dụng vào container
COPY . .

# Thiết lập biến môi trường để Flask chạy trên cổng 5000
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Mở cổng 5000
EXPOSE 5000

# Lệnh chạy ứng dụng Flask
CMD ["flask", "run"]