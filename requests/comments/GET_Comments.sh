# source ./requests/comments/GET_Comments.sh

# Busca de todos os comentários (rota pública)
curl --request GET \
  --url 'http://localhost:3000/comments/get' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDg4ODc2OTksImV4cCI6MTc0ODg5MTI5OX0.Hg0I_bsZBT5OfYD9h03WjkcEG5O_EPRJ3SEkcBhu6rY' \

