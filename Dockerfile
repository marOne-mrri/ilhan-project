FROM bref/php-81-fpm

# Copy your PHP application
COPY . /var/task

# Define the Lambda handler
CMD ["public/index.php"]
