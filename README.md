A better backend. Deployed at https://techrental.herokuapp.com/

# API Documentation

## User Endpoints

### POST - Register a User 
`https://techrental.herokuapp.com/auth/register`

```
 {
          "first_name": "User",
          "last_name": "McUser",
          "email": "user@gmail.com",
          "password": "password",
          "city": "Jersey City",
          "state": "NJ",
          "zip": "01234"
        }
```

### POST - Login 
`https://techrental.herokuapp.com/api/auth/login`
```
{
"email": "user@gmail.com",
"password": "password"
}
```

### GET by User ID **requires token in header**
`https://techrental.herokuapp.com/api/auth/user/:id` 

### PUT- Edit User Info **requires token in header**
`https://techrental.herokuapp.com/api/auth/user/:id`

### DEL- Delete User **requires token in header**
`https://techrental.herokuapp.com/api/auth/user/:id`

## Tech Endpoints

### GET All Tech Listings 
`https://techrental.herokuapp.com/api/tech`

### GET Tech by ID 
`https://techrental.herokuapp.com/api/tech/:id`

### GET Tech by User 
`https://techrental.herokuapp.com/api/tech/user/:id`

### POST New Tech **requires token in header**
`https://techrental.herokuapp.com/api/tech`
```
  {
    "user_id": 2,
    "title": "Ladder",
    "description": "Donizzle mah nizzle dui. Fizzle risizzle boofron, 
    elementum consectetizzle, sollicitudizzle in, consequat imperdizzle,
    turpis.",
    "make": "Ladders R Us",
    "model": "L10FT",
    "img_url": "ladderpic.jpg",
    "daily_cost": 15,
    "available": true,
    "condition": "Good",
    "category":  "Ladders & Scaffolding"
  }
  ```

### PUT Edit a Tech Listing **requires token in header**
`https://techrental.herokuapp.com/api/tech/:id` 

## Rental Endpoints  **ALL REQUIRE TOKEN**

### GET All Rental Bookings
`https://techrental.herokuapp.com/api/rentals`

### GET By Rental ID 
`https://techrental.herokuapp.com/api/rentals/:id`

### GET By Renter's UserId 
`https://techrental.herokuapp.com/api/rentals/renter/:id`

### GET By Owner's UserId 
`https://techrental.herokuapp.com/api/rentals/owner/:id`
### DEL Rental Bookings
`https://techrental.herokuapp.com/api/rentals/:id`

### PUT Edit Rental Bookings
`https://techrental.herokuapp.com/api/rentals/:id`

### POST 
`https://techrental.herokuapp.com/api/rentals` 
Schema looks like:
  ```{
          start_date: "2019-11-20",
          end_date: "2019-11-22",
          total_cost: 24,
          tech_id: 3,
          renter_id: 1
        }```
