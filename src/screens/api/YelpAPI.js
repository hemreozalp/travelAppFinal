import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer gk4EwW9lLOqJ1EJO35EOljDDC0UNDubcub1vqfw0-7uACmZUbL0cmENGwESTQ3vptnDgv_9VFdr4VpIem4UBYlPDZAlH_Tu9BxUT6Rbvbrc7GE-MQQsj3zochsGdZXYx",
  },
});
