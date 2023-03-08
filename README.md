# Image Generator AI

<a href="https://image-generator.pages.dev/" target="_blank" style="background: #fff !important; height: 40px !important;width: 140px !important;">Live Site</a>

Image Generator AI is Powerful Image Generator Web App used to create and download imaginative and visually stunning images and and share them with the community.

![](https://media.licdn.com/dms/image/C562DAQEnkD1G6mD4Xg/profile-treasury-image-shrink_800_800/0/1675446384751?e=1678903200&v=beta&t=C0N47COU8Px9b9ePAr-_VDZUfpOluCnFEjtocuGqYI8)

<a href="https://www.buymeacoffee.com/lalshubham" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 140px !important;" ></a>

### Feel free to fork this repo and add some new features to it.

# Setup

Step 1: Clone or Fork this repo.

### `BACKEND PART`

Step 2: Open your terminal in VsCode or any other software and navigate to this repo folder.

Step 3: Then execute `npm install` command on the terminal. This will install necessary backend dependencies mentioned in `package.json`.

Step 4: Create a new `.env` file in the same directory. Mentioned below are some environment variables which you have to create.

```
PORT = 8080
OPENAI_API_KEY = 'YOUR_OPENAI_KEY'
MONGODB_URL = 'YOUR_MONGODB_URL'
CLOUDINARY_CLOUD_NAME = 'YOUR_CLOUDINARY_CLOUD_NAME'
CLOUDINARY_API_KEY = 'YOUR_CLOUDINARY_API_KEY'
CLOUDINARY_API_SECRET = 'YOUR_CLOUDINARY_API_SECRET'
```

Step 5: After adding the above mentioned variables to your .env file execute `npm run dev` command. This will start local backend server on your local area network.

### `FRONTEND PART`

Step 6: Then open another terminal and navigate to `frontend` folder.

Step 7: Then execute `npm install` command on the terminal. This will install necessary frontend dependencies mentioned in `frontend/package.json`.

Step 8: Create a new `.env` file in the same directory. Mentioned below is the only environment variables which you have to create.

```
VITE_BACKEND_URL = http://localhost:8080
NODE_VERSION = 16.14.1 (Optional)
```

Step 9: After adding the above mentioned variable to your .env file execute `npm run dev` command. This will start local frontend server on your local area network.
