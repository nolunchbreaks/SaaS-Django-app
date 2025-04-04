 # Use a smaller base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc libssl-dev && \
    rm -rf /var/lib/apt/lists/*

# Copy only the requirements file to leverage caching
COPY requirements.txt .

# Install Python dependencies
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt


# Copy project files
COPY . .

# Expose the Django port
EXPOSE 8000

# Set entrypoint
ENTRYPOINT ["gunicorn", "myproject.wsgi:application", "--bind", "0.0.0.0:8000"]
