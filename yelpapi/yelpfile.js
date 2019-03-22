import axios from 'axios'

const YELP_API_KEY = 'ggpM0gvjU4N5p9WHe0U8j9cIpE66QXDQrK_HiM6ZsFD_fw7ZKbTpRrl4KbuPcPX4IO1wrXYMKpEnmn4hBeIyEkO7o5QSB0M4ea65JAwGtGVy8GtMDxGWZ7ro9CSUXHYx'

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
})

const getCoffeeShops = userLocation => {
  return api
    .get('/businesses/search', {
      //params={'term':'bookstore', 'location':'New York City'}    //ORIGINAL
      params: {
        //limit: 10,
        //categories: 'coffee,coffeeroasteries,coffeeshops',
        categories: 'restaurants,food',    //Determines yelp categories
      
        ...userLocation,
      },
    })
    //tags for marker, connects to map or ymapview and have to list how they will show in marker
    .then(res =>
      res.data.businesses.map(business => {
        return {      
          name: business.name,
          coords: business.coordinates,
          phone: business.phone,
          city: business.location.display_address,
          rating: business.rating,
        }
      })
    )
    .catch(error => console.error(error))
}

export default {
  getCoffeeShops,
}