<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Your Photos & Videos</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #1e1e2f, #3a0ca3, #f72585);
            background-size: 400% 400%;
            animation: gradientAnimation 10s ease infinite;
            font-family: 'Poppins', sans-serif;
            color: white;
            text-align: center;
            overflow: hidden;
        }

        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .container {
            background: rgba(0, 0, 0, 0.5);
            padding: 40px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        h1 {
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 20px;
        }
        
        .upload-btn {
            display: inline-block;
            padding: 15px 40px;
            font-size: 18px;
            font-weight: 600;
            color: white;
            background: #ff0080;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 0px 4px 15px rgba(255, 0, 128, 0.3);
        }
        
        .upload-btn:hover {
            background: #d6006e;
            transform: scale(1.1);
            box-shadow: 0px 6px 20px rgba(255, 0, 128, 0.5);
        }
        
        .nav-menu {
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .nav-menu a {
            text-decoration: none;
            color: white;
            font-size: 18px;
            padding: 10px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.2);
            transition: 0.3s;
        }

        .nav-menu a:hover {
            background: rgba(255, 255, 255, 0.4);
        }
    </style>
</head>
<body>
    <div class="nav-menu">
        <a href="#">Solutions</a>
        <a href="#">Products</a>
        <a href="#">Platform</a>
        <a href="#">Developers</a>
        <a href="#">Company</a>
    </div>
    <div class="container">
        <h1>Upload Your Photos & Videos</h1>
        <button class="upload-btn" onclick="window.location.href='https://drive.google.com/drive/folders/1ObAoh3j-gUZxsb2TxVgYGwohnminpL4V?usp=drive_link'">
            Upload Now
        </button>
    </div>
</body>
</html>
