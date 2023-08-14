import http from '../http-common'

class StoriesDataService {
    getAll() {
        return http.get("/lists");
    }
    
    get(id) {
        return http.get(`/list/${id}`);
    }

    delete(id){
        return http.delete(`/tutorials/${id}`);
    }
    
    deleteAll() {
        return http.delete(`/tutorials`);
    }
    
    findByTitle(title) {
        return http.get(`/list?title=${title}`);
    }
}

export default StoriesDataService();