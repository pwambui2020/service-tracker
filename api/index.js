const services = [
  {
    "id": "1",
    "name": "ms-subreg-image-upload",
    "uptime": "10%"
  },
  {
    "id": "2",
    "name": "ms-subreg-kyc",
    "uptime": "20%"

  },
  {
    "id": "3",
    "name": "ms-subreg-auth",
    "uptime": "30%"

  },
  {
    "id": "4",
    "name": "ms-subreg-messenger",
    "uptime": "40%"
  },
  {
    "id": "5",
    "name": "ms-subreg-registration",
    "uptime": "50%"

  },
  {
    "id": "6",
    "name": "ms-subreg-crm",
    "uptime": "30%"

  },
]
export const getServiceList = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(services)
    }, 1000);
  })
}