const socket = io()

$(function() {
    let loginDiv = $('#loginDiv')
    let chatDiv = $('#chatDiv')

    let loginInput = $('#loginInput')
    let loginButton = $('#loginButton')

    let chatInput = $('#chatInput')
    let chatButton = $('#chatButton')
    let msglist = $('#msgList')
    let userlist=$('#userlist')
    // const dta=[{
    //     message:''
    // }]
    // const message=[]
    let user;

    loginButton.click(() => {
        $('#loginInput').hide()
      $('#loginButton').hide()

        // user = loginInput.val()
        socket.emit("user_name",{
            username:loginInput.val()
         })
    })
    socket.on("recieve_username",(data)=>{
        userlist.append(`<li>${data.username}</li>`)
    })
    chatButton.click(() => {
        
        socket.emit("send_chat",{
            username:loginInput.val(), 
            message:chatInput.val() 
        })
    })

    socket.on("recieve_chat", (data) => {
        msglist.append(`<li>${data.username} :${data.message}</li>`)
    })
})