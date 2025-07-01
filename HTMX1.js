npx http-server ./chapter2

npm start server 

$  npm start server.js

> htmx-project@1.0.0 start
> node server.js server.js




1)Hello World --> hx-post,hx-get,hx-target
2) hx-trigger --> mouseenter,mouseleave,click
3)triggers modifier :_ hx-trigger: mouseenter once ,delay:3s
 <div hx-post="http://localhost:1330/messages" hx-trigger="click from:#requestTrigget">Make DELAYED Request</div> 

     <button type="button" id="requestTrigget">Submit</button>
4)Trigger Filters:- conditions ko add krna :- click[2 +3 ==4]s
5) Using Special Events:- revealed,intersect threshold:0.7
6) Polling content :-hx-trigger: mouseenter 5s
<div hx-get="http://localhost:1330/"
      hx-target="#response"
      hx-trigger="every 5s"
      hx-swap="beforeend"
	  //It Will append(add-on hoti jaayengi).
7) Adding Progress Indicators:- 

       <div hx-post="http://localhost:1330/messages"
      >

      Click Me and See Indicator

      <p class="htmx-indicator">Loading Content...</p>
      </div> 

8)Sending data in requests:-
1) form ke through :-
<!-- <form action="submitttt">
      <input type="email" name="email" placeholder="Enter your name" />
      <input type="password" name="pass" placeholder="Enter your email" />

      <button
        type="button"
        id="submitttt"
        hx-post="http://localhost:1330/echopayload"
        hx-target="#response"
      >
        Submit
      </button>
    </form> -->



2) Json data:- 
//Hard Coding
 <button
      type="button"
      hx-post="http://localhost:1330/echopayload"
      hx-target="#response"
      hx-vals='{
          "email":  "sameer.uddin@gmail.com",
          "pass": "sameer123"}'
    >
      Submit
    </button>
    </button>
	
	From JS functions 
	
	getPassword =() => {
      return "sameer123";
    };
    function getEmail(){
      return "sameer123@gmail.com";
    };
    </script>
	
	<button
      type="button"
      hx-post="http://localhost:1330/echopayload"
      hx-target="#response"
      hx-vals='js:{
          "email":  getEmail(),
          "pass": getPassword()}'
    >
      Submit
    </button>
	
3)     <button

      hx-post="http://localhost:1330/echopayload"
      hx-target="#response"
      hx-include="#myID"
     
    >
      Submit
    </button>

    <input type="text" id="myID" name="email" > 

9)Using Confirm Dialog Box :-
hx-confirm=" Do you want to confirm?"

10) Uploading files :- multiples files
    <form>
      <input type="file" name="file" />

      <button
        hx-post="http://localhost:1330/upload"
        hx-encoding="multipart/form-data"
      >
        File Upload
      </button>
    </form>
  </body>
11)Handling Race conditions :-
hx-sync="#FirstButton:drop" //disable the second request(It is pending till the seond request is done) 
hx-sync="#FirstButton:replace" //first request got cancel and replace it with the second 
hx-sync="#FirstButton:queue"// it goes into queue


<button id="FirstButton" hx-get="http://localhost:1330/" hx-target="#target1">First Request</button>

<button id="SecondButton"  hx-post="http://localhost:1330/messages2" hx-target="#target2" hx-sync="#FirstButton:drop">Next Request</button>

12) Cancelling request:-
    <button type="button" hx-get="http://localhost:1330/" id="request1">
      Message Sent
    </button>
    <button type="button" onclick="htmx.trigger('#request1','htmx:abort')">
      Cancel Message Sent
    </button>


Sunday :- 

chapter 3 :-Loading Content :-  30 mins --1.5

1)Targetting Content destination :- 

   <button hx-post="http://localhost:1330/messages2" hx-target=".destination1">
      Load Content
    </button>
    <div id="destination"></div>
        <div class="destination1"></div>
          <div class="destination1"></div>
            <div class="destination1"></div>
id--> #
class-->.

2)Content Swapping 
outerHTML:_ It will swap fully div
inner HTML :- It will swap inside div

3)Use diffrent contant Swap Styles
 hx-swap="afterend"
 
1)afterbegin
beforebegin

beforeend
afterend

4)Out of bound Swaps

//Here from server only we define that it will goes into this:-

    <button hx-post="http://localhost:1330/messages3" 
            hx-target="#maintarget"
            hx-swap="outerHTML"
           >
        Load Content
    </button>

    <div id="maintarget">Main target</div>
    
   
    <div id="SomeContent">Some Content</div>
    
    <div id="target2">target2</div>
	
	//From Server
	app.post("/messages3", async (req, res) => {
  res.send(`<div><h3 id="target2" hx-swap-oob="true">Hello World Create</h3>
    This goes intoi Main target
    
    </div>`);
5)Loading a subset of your response


6)Animating content:-Last me krte hain 



chapter 4:- Working with Events:- 30 mins ---1.5
1) Hooking into the Page Load Events
htmx.onLoad((target)=> {
     console.log("htmx loaded--->", target);
     
     console.log("htmx loaded ended--->");
    
   })
    </script>


  </head>
  <body>
 <script>
   document.body.addEventListener('htmx:load', (evt)=> {
     console.log( evt);  
     fetch("http://localhost:1330/users")
     .then(response => response.json())
     .then(fetchedusers => {
       console.log(fetchedusers);
       users=fetchedusers;
      
     })
   });
    </script>

2) Performing Action before and After
 <script>
        htmx.on("htmx:beforeSwap", (evt) => {
            console.log("htmx:beforeSwap event triggered");
             console.log("Target element:", evt.detail.target);
            // console.log("Swapped content:", evt.detail.xhr.responseText);
        });
        htmx.on("htmx:afterSwap", (evt) => {
            console.log("htmx:afterSwap event triggered");
             console.log("Target element:", evt.detail.target);
            // console.log("Swapped content:", evt.detail.xhr.responseText);
        });
    </script>

3) HTML Request Events
  <script>
        htmx.on("htmx:beforeRequest", (evt) => {
       alert("Request Is about to trigger");
            console.log("htmx:beforeRequest event triggered");
            console.log("Target element:", evt.detail.requestConfig.target);
            // console.log("Request details:", evt.detail.xhr);
        });
        htmx.on("htmx:afterRequest", (evt) => {
              alert("Request Is baout to trigger");
            console.log("htmx:afterRequest event triggered");
            console.log("Target element:", evt.detail.headers);
            // console.log("Swapped content:", evt.detail.xhr.responseText);
        });
    </script>


4) Handling Request failure with Events 
 htmx.on("htmx:responseError", (evt) => {
            console.log("Error:", evt.detail);
            console.log(evt);
            alert("Request failed with status: " + evt.detail.xhr.status);
            console.log("htmx:responseerror event triggered");
            console.log("Error details:", evt.detail.xhr.responseText);
            console.log("Response status:", evt.detail.xhr.status);
        });
     
5) using Request Interceptors
//We can send data in form of header and paramter from htmx:- 



    htmx.on("htmx:configRequest", (evt) => {
      console.log("htmx:config event triggered");
      console.log("Request configuration:", evt.detail.headers);
      event.detail.headers["Authorization"]="Bearer 79747789995";
       event.detail.parameters["API_KEY"]="djbndklndkndkik";
    });
     

6) Logging Page Activity 
 htmx.logger= function (element, event,data) {
        console.log("htmx logger called");
        console.log("Element:", element);
        console.log("Event:", event);
        console.log("Data:", data);
            console.log("htmx ended");
     
    };

7) All HTMX events

htmx:xhr:loadstart
htmx:xhr:progress
htmx:xhr:loadend
htmx:xhr:progress
htmx:beforeOnLoad
htmx:beforeSwap
htmx:beforeCleanupElement
htmx:beforeCleanupElement
htmx:afterSwap
htmx:afterRequest
htmx:afterOnLoad
htmx:xhr:loadend
htmx:beforeProcessNode
htmx:load
htmx:afterSettle
htmx:trigger
htmx:confirm
htmx:configRequest
htmx:validateUrl
htmx:beforeRequest
htmx:beforeSend

htmx:xhr:loadstart
htmx:xhr:progress
htmx:xhr:loadend
htmx:xhr:progress
htmx:beforeOnLoad
htmx:beforeSwap

htmx:beforeCleanupElement
htmx:afterSwap
htmx:afterRequest
htmx:afterOnLoad
htmx:xhr:loadend
htmx:beforeProcessNode
htmx:load
htmx:afterSettle
﻿



chapter 5 :- Working with Websockets:- 25mins --
1)Building a simple Websocket Server :

command:- 
mkdir ws-Server
cd ws-Server
npm init -y 
node install 
create a file server.js
add below code 
const { WebSocketServer } = require("ws");
const server = new WebSocketServer({ port: 5000 });

server.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", (data) => {
    // Echo the message back to the client
    const sent_data = JSON.parse(data);
    console.log(`${sent_data.chat_message}`);

    socket.send(`
        <div id ="target2" hx-swap-oob="true" >           
            <h3> Server received: ${sent_data.chat_message} </h3>
        </div>
    `);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

2) conecting to websocket server 

npx-http-server chapter5
and then create index.html--> It will be serve automatically 
create a form 
and make connection 


3) Sending Data to Websocket server
    <div hx-ws="connect:ws://localhost:5000">
        <form hx-ws="send">
            <input type="text" name="chat_message" placeholder="Type your message here..." hx-target="destination"  >
            <br>
            <button type="submit">Send</button>
        </form>
    </div>
    <div id="destination" >
         <div id="target2">target2</div>
       

    </div>
	const { WebSocketServer } = require("ws");
const server = new WebSocketServer({ port: 5000 });

server.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", (data) => {
    // Echo the message back to the client
    const sent_data = JSON.parse(data);
    console.log(`${sent_data.chat_message}`);

    socket.send(`
        <div id ="target2" hx-swap-oob="true" >           
            <h3> Server received: ${sent_data.chat_message} </h3>
        </div>
    `);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});


4) Recieveing data from websocket server 

Server should have :- hx-swap-oob="true" and id="target1"

//this target Id should be matched with id of elements in html file 
//then it will redirect the message 

5)Sending message continously over
put setTime interval --> uske andar send message laga do ..baar daalta rhega 
  socket.on("message", (data) => {
    // Echo the message back to the client
    const sent_data = JSON.parse(data);
    console.log(`${sent_data.chat_message}`);
    setInterval(() => {
      socket.send(`
            <div id ="chat_box" hx-swap-oob="beforeend" >           
                <h3> ${sent_data.chat_message} </h3>
            </div>
        `);
    },1000); // Send every second

 
  });




chapter 6:- HTMX and browser:- 15 mins -->

1) working with Browser history

hx-push-url="true" 

  <button hx-push-url="true" type="button"
     hx-post="http://localhost:1330/messages2" 
     hx-target="#destination">
        Load Stuff
    </button>
    <div id="destination"></div>

2) Caching HTTP responses:- 

From server only :- 
app.post("/messages2", async (req, res) => {
  res.set({"Last-Modified":"Tuesday, 02 July 2025"});

  res.send(`<div><h3>Hello World Create</h3></div>`);
});

3) HTMX security Tools
hx-disable
<script> htmx.config.allowScriptTags=false;</script>

//Very carefully 
<script> htmx.config.allowEval=false;</script>
//It will disable events 
 htmx.config.selfRequestsOnly=true;
 //It will disable 8080 self ports

4) HTMX configuration

From website :- docs--> webs



Monday:-
project :- 1 :- project--CRUD
Project Set Up 
Loading tasks
Adding tasks
Updating tasks
Deleteing tasks

Advance --> Advance --> 


docker rm mysql-container
docker run --name mysql-container -e MY_SQL_ROOT_PASSWORD=pass123 -p 3307:3306 -d mysql:latest
docker ps
docker ps -a
docker exec -it mysql-container mysql -uroot -ppass123
docker rm mysql-container
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=pass123 -p 3307:3306 -d mysql:latest
docker ps
docker exec -it mysql-container mysql -uroot -ppass123

Go to SQL workbench --
connectionName

Host:- 127.0.0.1
Port :3307
Username:- root
password:- pass123

create Database mydb;

