curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email":"anoosha@test.com","password":"Password@123"}'

Output:
{"message":"User logged in successfully","token":"eyJhbG..."}
