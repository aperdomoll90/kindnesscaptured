import json
import requests
import warnings

warnings.filterwarnings("ignore")

image_path = "C:\\zPython\\hackatthon\\kindnesscaptured\\public\\logo.jpeg"
image_path = "C:\\zPython\\hackatthon\\kindnesscaptured\\public\\furniture\\queen_matt_01.jpg"
with open(image_path, 'rb') as image_file:
    image = image_file.read()

header  = {'Content-type': 'image/jpeg'}
payload = {'image': image}
aws_url = 'https://6w0m2blvwb.execute-api.us-east-1.amazonaws.com/prod/images'

response = requests.put(
    url=aws_url,
    data=image,
    headers=header,
    verify=False
)

ab = response.status_code
cd = response.reason
print(f"{ab} | {cd}")
ef = response.text
print(ef)

# 200 | OK
if ab == 200:
    key = response.json()['Key']
    print(key)
else:
    print("Failed")
    key = None

if key:
    validarion_url='https://6w0m2blvwb.execute-api.us-east-1.amazonaws.com/prod/rekognize'
    header = {'Content-Type': 'application/json'}
    payload = json.dumps({"key": key})
    donate_response = requests.post(
        validarion_url,
        data=payload,
        headers=header,
        verify=False
    )
    ab = donate_response.status_code
    cd = donate_response.reason
    print(f"{ab} | {cd}")
    ef = donate_response.text
    print(ef)
