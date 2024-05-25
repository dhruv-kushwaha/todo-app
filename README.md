# Todo App

## Techstack used
    **Frontend** : React.js, React Query, React Router, Tailwind CSS
    **Backend** : Express.js, Typescript
    

## Instructions to run the app locally

1. **Clone the repository**
    
    ```bash
    git clone https://github.com/dhruv-kushwaha/todo-app.git
    ```
    
2. **Install the dependencies**
    
    ```bash
    # on the backend terminal
    cd backend
    npm install
    ```
    
    ```bash
    # on a separate terminal 
    cd frontend
    npm install
    ```
    
3. **Run the backend**
    
    ```bash
    # in terminal 1
    cd backend
    npm run start
    ```
    
4. **Configure the frontend to use the local backend**
    
    Currently, the app is using the backend deployed on Render.
    If you wish to use the same then skip this step, it will take a while for the first request because of serverless's cold start problem.
    
    To use the local backend, in `frontend/src/services/global.ts` paste this:
    
    ```tsx
    // Deployed Render Backend URL
    // export const URL = `https://todo-app-y8dw.onrender.com/api/v1`;
    
    // Local Backend URL
    export const URL = `http://localhost:3030/api/v1`;
    ```
    
6. **Run the frontend**
    
    ```bash
    # in terminal 2
    cd frontend
    npm run dev
    ```
