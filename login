curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email":"anoosha@test.com","password":"Password@123"}'

Output:
{"message":"User logged in successfully","authtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMWQyIn0sImlhdCI6MTY5MDAwMDAwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}
