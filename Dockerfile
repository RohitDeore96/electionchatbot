# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy your static project files to the Nginx serving directory
COPY . /usr/share/nginx/html

# Expose port 8080 to match your gcloud command
EXPOSE 8080

# Change Nginx default configuration to listen on port 8080 instead of 80
RUN sed -i 's/listen  *80;/listen 8080;/g' /etc/nginx/conf.d/default.conf

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
