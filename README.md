<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar Example</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* Additional styling for the navigation menu */
        .nav-menu {
            display: none;
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 100vh;
            background-color: white;
            box-shadow: -2px 0 5px rgba(0,0,0,0.1);
            padding: 20px;
        }
        .nav-menu.active {
            display: block;
        }
    </style>
</head>
<body>
    <nav class="flex justify-between p-4 bg-purple-600 text-white">
        <div>
            <img src="assets/logo/wppool.svg" alt="WPPOOL Logo" />
        </div>
        <div class="flex justify-between items-center gap-3">
            <div class="border p-3 rounded-full">
                <img src="assets/icons/share.svg" alt="Share Icon" />
            </div>
            <button class="mr-3 text-sm p-4 border rounded-[124px] bg-green-500 text-white">
                Download the 2024 Report
            </button>
            <div id="menuIcon">
                <img src="assets/icons/menu.svg" alt="Menu Icon" />
            </div>
        </div>
    </nav>
    
    <div id="navMenu" class="nav-menu">
        <button id="closeMenu" class="text-gray-500 mb-4">
            <img src="assets/icons/close.svg" alt="Close Icon" />
        </button>
        <ul class="text-black space-y-4">
            <li><a href="#">The WPPOOL Index</a></li>
            <li><a href="#">All Companies</a></li>
            <li><a href="#">Potential Future Listings</a></li>
            <li><a href="#">State of USA</a></li>
            <li><a href="#">Stories & Ideas</a></li>
            <li><a href="#">About WPPOOL</a></li>
            <li><a href="#">WPPOOL Portfolio Companies</a></li>
            <li><a href="#" class="text-blue-500">Visit WPPOOL</a></li>
        </ul>
    </div>

    <script>
        // JavaScript to handle menu toggle
        document.getElementById('menuIcon').addEventListener('click', function() {
            document.getElementById('navMenu').classList.toggle('active');
        });

        document.getElementById('closeMenu').addEventListener('click', function() {
            document.getElement
