# source ./requests/comments/POST_Comment.sh

# Criação de comentário com token válido
curl --request POST \
  --url 'http://localhost:3000/comments/create' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDg4ODc2OTksImV4cCI6MTc0ODg5MTI5OX0.Hg0I_bsZBT5OfYD9h03WjkcEG5O_EPRJ3SEkcBhu6rY' \
  --header 'Content-Type: application/json' \
  --data '{
    "restaurantId": "4d90ae2ffa943704d63e37c6",
    "comment": "Comida maravilhosa, voltarei com certeza!"
  }'
