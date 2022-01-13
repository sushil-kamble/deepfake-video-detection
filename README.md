# DEEPFAKE VIDEO DETECTION

Python version: 3.9

## For Running the Project

### 1. Clone the repository:

```bash
git clone https://github.com/sushil-kamble/deepfake-video-detection
```

### 2. Go to the root folder and perform the following commands:

root folder: .\backend\

### activate the virtual environment

```bash
python -m venv venv
venv\Scripts\activate
```

### Install required packages

```bash
pip install -r requirements.txt
```

### Run the server

```bash
python manage.py migrate
python manage.py runserver
```

### Installing UI packages:

- head back to the root folder **deepfake-video-detection**
- enter in .\frontend\

<details><summary>If you don't have yarn installed</summary>
<p>

```bash
npm install --global yarn
```

> Remove **yarn.lock** as you will already have **package.lock**

</p>
</details>

### 4. Installing packages

```bash
yarn
```

### 5. Run the application

```bash
yarn start # OR npm run start
```
