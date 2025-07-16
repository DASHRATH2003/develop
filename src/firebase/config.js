import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDNZHnhqmw_bJ6YPGWsZ9Y3Q9XHHVWqPJE",
  authDomain: "innomatrics-careers.firebaseapp.com",
  projectId: "innomatrics-careers",
  storageBucket: "innomatrics-careers.appspot.com",
  messagingSenderId: "458796011294",
  appId: "1:458796011294:web:3f4b5e9b8b8b8b8b8b8b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get storage instance with CORS configuration
const storage = getStorage(app);

// Set CORS configuration for storage
const corsSettings = {
  origin: ['http://localhost:3000', 'https://innomatrics-careers.web.app'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 3600
};

export { storage, corsSettings }; 