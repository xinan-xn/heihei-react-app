import Axios from 'axios'

const http = Axios.create({
baseURL:"https://data.miaov.com/"
})

function getData(){
    return http.get('/lecturer/lists')
}
export default getData