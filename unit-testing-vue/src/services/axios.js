import axios from 'axios'

export function getMessage() {
  return axious.get('http://localhost:3000/message').then(response => {
    return response.data
  })
}