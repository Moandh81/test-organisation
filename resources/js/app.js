/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Echo from "laravel-echo"



window.Echo = new Echo({
    broadcaster : 'socket.io',
    host : window.location.hostname + ':6001'
})




window.Echo.channel('laravel_database_channel-demo').listen('.post-created',  function (e)  {
    console.log('PostcreatedEvent' , e)

    )


})