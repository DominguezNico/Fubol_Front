import axios from 'axios'

const CLUB_REST_API_URL = 'http://localhost:8080/obtenerClubes' ;

class ClubService {

        obtenerClubes(){
            axios.get(CLUB_REST_API_URL);
        }
}

export default new ClubService()
