# Use the official NGINX image as the base image
FROM nginx:latest

# Copy your custom configuration file to the NGINX configuration directory
# Uncomment and modify the below line if you have a custom nginx.conf
 COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy static website files to the default NGINX public directory
# Uncomment and modify the below line if you have a static website to serve
 COPY . /usr/share/nginx/html
 

# Expose port 80 to allow external access
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
