import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-671a8.firebaseio.com/'
})