import React from 'react'
import '../index.css';

const Home = () => {
  return (
    <div>
        <section class="px-6 py-3">
        <div class="max-w-sm overflow-hidden rounded shadow-lg">
            <img class="w-full" src="https://source.unsplash.com/random/400x300" alt="Card image" />
            <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold">Card title</div>
            <p class="text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <span class="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">Tag 1</span>
            <span class="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">Tag 2</span>
            <span class="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">Tag 3</span>
            </div>
        </div>
        </section>

        <br />

        <section class="bg-transparent p-10">
        <div class="flex flex-col justify-around space-y-2 sm:flex-row">
            <h2 class="w-full text-4xl font-bold text-green-700 sm:w-2/5">We Help choose the most suitable plants for you</h2>
            <h2 class="w-full text-base font-medium text-gray-800 sm:w-2/5">Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift.</h2>
        </div>
        </section>

        <br />

        <section class="bg-transparent p-10">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div class="mx-auto max-w-md overflow-hidden rounded-lg border bg-white shadow-sm">
            <img class="h-50 w-full object-cover" src="https://dummyimage.com/720x400/edf2f7/1a202c" alt="Product image" />
            <div class="px-4 py-4">
                <h2 class="mb-2 text-2xl font-bold text-green-700">Indoor Plants</h2>
                <p class="text-sm text-gray-600">Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants</p>
            </div>
            </div>
            <div class="mx-auto max-w-md overflow-hidden rounded-lg border bg-green-700 text-white shadow-md">
            <img class="h-50 w-full object-cover" src="https://dummyimage.com/720x400/edf2f7/1a202c" alt="Product image" />
            <div class="px-4 py-4">
                <h2 class="mb-2 text-2xl font-bold">Outdoor Plants</h2>
                <p class="text-sm">Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.</p>
            </div>
            </div>
            <div class="mx-auto max-w-md overflow-hidden rounded-lg border bg-white shadow-sm">
            <img class="h-50 w-full object-cover" src="https://dummyimage.com/720x400/edf2f7/1a202c" alt="Product image" />
            <div class="px-4 py-4">
                <h2 class="mb-2 text-2xl font-bold text-green-700">Plants Pots</h2>
                <p class="text-sm text-gray-600">Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor</p>
            </div>
            </div>
        </div>
        </section>

        <section class="bg-gray-200 py-20">
        <div class="container mx-auto px-6">
            <h2 class="mb-2 text-4xl font-bold text-gray-800">Shop with Us</h2>
            <h3 class="mb-5 text-2xl font-semibold text-gray-800">Let's make the nature fruitfull to us</h3>
            <button class="rounded-full border-green-800 bg-white py-2 px-4 font-bold text-green-800 hover:border-green-800 hover:bg-green-800 hover:text-white">Shop Now</button>
        </div>
        </section>
    </div>
  )
}

export default Home