
http://localhost:1234/

List of issue and there solution -

🔹 What I did

In your Body component, you wrote:

<RestaurantCard resData={resObj} />


Here, resObj is an array of restaurants (look at your resObj definition – it has [ { type: 'restaurant', data: { … } } ]).

So resData inside RestaurantCard becomes the whole array, not a single object.

🔹 What RestaurantCard expects

Inside RestaurantCard, you wrote:

<h3>{resData.data.name}</h3>


Here you’re assuming that resData is a single object with a .data property.

But actually, since you passed the entire array, resData.data is undefined.

That’s why React throws the error:

TypeError: Cannot read properties of undefined (reading 'name')

🔹 Fix

You should pass a single object from the array, not the whole array.

✅ For one card:

<RestaurantCard resData={resObj[0]} />


✅ For multiple cards:

{resObj.map((restaurant) => (
  <RestaurantCard key={restaurant.data.id} resData={restaurant} />
))}

🔹 In short

Problem: You passed an array where your component expected an object.

Solution: Pass a single object (resObj[0]) or loop over the array (map) to render multiple cards.

