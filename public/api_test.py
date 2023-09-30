import requests

image_path = "C:\\zPython\\hackatthon\\kindnesscaptured\\public\\logo.jpeg"
with open(image_path, 'rb') as image_file:
    image = image_file.read()

header = {'Content-Type': 'image/jpeg'}
files = {'file': open(image_path, 'rb')}
aws_url = 'https://6w0m2blvwb.execute-api.us-east-1.amazonaws.com/prod/images'

response = requests.put(
    url=aws_url,
    data=files,
    headers=header,
    verify=False
)

ab = response.status_code
print(ab)
cd = response.text
print(cd)
ef = response.reason
print(ef)
