const socket = io()

socket.on("user-connection" , (arg) => {
    console.log(arg)
})

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position), () =>{
        
        
    })
}