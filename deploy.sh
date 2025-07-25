# On main

# Check if a commit message was passed
if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  echo "Usage: $0 \"Your commit message\""
  exit 1
fi

npm run build

# Switch to deploy
git checkout deploy

rm -r assets/ index.html vite.svg

cp -r dist/* .
git add assets/ index.html vite.svg



git commit -m "$1"
#git push origin deploy --force

# Go back to coding
git checkout main