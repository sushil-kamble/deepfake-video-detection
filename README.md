# DEEPFAKE VIDEO DETECTION

Python version: 3.9.5

## For Running the Project

### Clone the repository:

```bash
git clone https://github.com/sushil-kamble/deepfake-video-detection
```

## Backend

### 1. Go to the root folder and perform the following commands:

`cd backend\`

### 2. Create and activate the virtual environment

```bash
python -m venv venv
venv\Scripts\activate
```

### 3. Install required packages

```bash
pip install -r requirements.txt
```

### 4. Run the server

```bash
python manage.py migrate
python manage.py runserver
```

## Frontend

- Head back to the root folder **deepfake-video-detection**
- Enter in `cd frontend\`

### 1. Installing packages

```bash
yarn
```

<details><summary>If you don't have yarn installed</summary>
<p>

```bash
npm i
```

> Remove **yarn.lock** as you will already have **package.lock**

</p>
</details>

### 2. Run the application

```bash
yarn start # OR npm run start
```
