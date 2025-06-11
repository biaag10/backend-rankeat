# source ./requests/comments/PATCH_Comment.sh

# Atualiza um comentário com token válido
curl --request PATCH \
  --url 'http://localhost:3000/comments/update/684971e8102e24d1467404a2' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDk2NDMwOTAsImV4cCI6MTc0OTY0NjY5MH0.J4q3eXkoQs_J-3TlMV-BzMzHax0I_4B-a3SkIb5Ji5s' \
  --header 'Content-Type: application/json' \
  --data '{
           "dishes": [{"name": "Spaghetti Carbonara", "price": "29.99", "rating": 5, "comment": "Ainda melhor do que antes!", "photoUrl": "https://example.com/spaghetti-carbonara.jpg"}]
         }'
