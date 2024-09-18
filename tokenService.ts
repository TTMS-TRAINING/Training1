class TokenService {
    constructor(request, baseURL) {
      this.request = request;
      this.baseURL = baseURL;
    }
  
    // Method to fetch the token
    async getToken() {
      const response = await this.request.post(`${this.baseURL}auth`, {
        data: { username: "admin", password: "password123" },
      });
  
      const { token } = await response.json();
      return token;
    }
  }
  
  export default TokenService;