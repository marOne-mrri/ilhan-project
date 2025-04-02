# ilhan-project

dotnet app pipeline

## ASP.NET MVC Docker + CI/CD Tasks

### Tasks (in order)

1. Configure Remote SSH

2. Create a new repository and clone it

3. Create an ASP.NET MVC Web App

    ```bash
    dotnet new mvc -au None
    ```

4. Build and run it locally

    ```bash
    dotnet build
    dotnet myapp.dll
    ```

5. Dockerize the app
    create dockerfile and build the image.

    ```bash
    docker build -t myapp .
    ```

6. Run it as a container

    ```bash
    docker run -d -p 8080:8080 --name app myapp:latest
    ```

7. Create the CI pipeline to build and push the Docker image

    ```bash
    docker push myapp:latest
    ```

8. Create the CD pipeline to run the container

    ```bash
    docker run myapp:latest
    ```
