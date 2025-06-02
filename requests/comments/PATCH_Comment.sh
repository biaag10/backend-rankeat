# source ./requests/comments/PATCH_Comment.sh

# Atualiza um comentário com token válido
curl --request PATCH \
  --url 'http://localhost:3000/comments/update/683dee0ffd2626f706f4e19d' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODJiZjBlNzdlYjdmNzNiZDI5ODMxN2IiLCJpYXQiOjE3NDg4ODc2OTksImV4cCI6MTc0ODg5MTI5OX0.Hg0I_bsZBT5OfYD9h03WjkcEG5O_EPRJ3SEkcBhu6rY' \
  --header 'Content-Type: application/json' \
  --data '{
    "comment": "Atualizado: comida ainda melhor na segunda visita!"
  }'
