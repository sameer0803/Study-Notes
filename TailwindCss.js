Tail Wind Css

1.Intro :- 
Code Step by step 
It is a JS code because we have to put in script tag 
2.Tailwind with Css CND setup:- 
Vs code --> extension --> Tailwind CSS IntelliSense --> cdn me nhi deti --> cli me deti hai intelligence
ya fir look into website 

body me -->bg-black-700
bg-black-700--> background -color -opacity
m-2 -> margin 2 pixel
p-2-->padding 2 pixel
rounded ---> rounded div or Button
**************************************

installation :- (From CDN) 
Copy and paste cdn script ain vs code and will start working but it wont give you suggestion as expected
for that we need to go and set diffrent appraoch 
that is alsoi mentioned in the docs that cdn is not recommmnded.

Sahi Tariqa :-Tailwind CLI 
1)sabse pehle node hona chahiye system me . node -v --. check node in the system.
2)first go to vs code and make two folder --> dist ,src ( yahan code file rekhenge)
dist --> index.html 
3)go to terminal 
 npx tailwindcss init
ye config.js bana kr dega 

4) src ke andar ham ek file banaynge
input.CSS

@tailwind base
@tailwind components@tailwind utilities

settings me jaao --> search me unknown rules --> ko band kr do -- lint in \

5) index.html me jaao -->DOM bnaao 
<h1 class="bg-slate-500"> Test </h1)

Suggestion aa rha hai :- pr chal nahi rha qki config file me bataya nahi ke hamne css khan likhi hai 
config file mee jaao or content["./dist/index.html]

par abhi bhi nahi aaya?
css file hee link nahi h ?
6)
customise css generate krna padega 
 npx tailwindcss -i ./src/imnput.css -o ./dist/style.css
Isse file ban jaayegi.--> style.css
7) NOW LINK TO DOM
<link rel ="stylesheet" href="style.css"

8) now change class to bosy to see changes 
class="bg-slate-500"
9) h1 ke upar 
class ="text-white"
to nhi chala qki new css generate nahi hui hai .

jab ham chalaynge tab  hee genrate hogi 
npx tailwindcss -i ./src/imnput.css -o ./dist/style.css

 to kya ham baar baar chlate rahe ?
 nahi uske liye 
 npx tailwindcss -i ./src/imnput.css -o ./dist/style.css --watch 
 
 --watch se background me chalti rhegi 
10) text-4xl 
11) Note :- Config.js ---> me ./dist/*.html */   
taki sari html chale sake.

Practise more ::
requirement :- code editor(vs code),target,documentation
----------------------------------------------
Document me wo search kro jo chahiye :- 
jaise text size :- text size to kuch hai nahi --> asli me font size hai .


Question:
container ko center me kaise laaye ? orizontal or vertical dono ko ek sath 
Hint :-Grid se krenge 

grid lgaa do --> place-content-center 
pr isse horizontal me aaya  dikh rha hai 
qki page me content hee nahi hai 
ab page ki height -->view-port ka use kro 
h-screen ka use kro 
example :- 
<body class="bg-black-700 grod place-contant-center h-screen">
<h1 class="text-white text-4xl m-6"> test</h1> 
----------------------------------------------
4)Now we will buld a card :- 

div  --> outer div
uske andar 2 div 
div1  ke andar img  
div2 ke andar uska content  ek or div 2a  <p>

parent div---> class="p-6 max-w-sm  mx-auto bg-white"
isse dono img or container me ek sath editing ho rhi hai 

p-6 --> padding 6
max-w-sm---> max-width-small
 mx-auto--> left or right dono se center ho jata hai --> margin auto
bg-white --> background -white 
rounded-xl --> rounded xl ho gya
shadow-lg--> shadow large
flex --> isse flex ki properties use kr lenge 
flex me basically 2 hee chize hoti hai main axis or other axis
device me main axis hoti hai left to right .

flex ke sath --> items-center ,space-x-4(margin mil jaate hain)


iMAGE KO KRNE KE LIYE 

Class="h-12 --hieght 12


isse ham sari utility first classes use kri 
Homework :- logo wali photo ko upar or niche lines
----------------------------------------------
5)hover seekhenge 

create button 
 
 <button class="">BuyNow</buttton>
 class="bg-sky-500 text-center mt-2 text-white text-base p-2 rounded-xl hover:bg-white hover:text-black"\
 
 
 hover or colon  baar baar likhne padega .
 agre ek se zyada class lagani hai 
 
 dark bhi ek mode hota hai same like hover
 dark :bg-red

States sab me hoti hai paragraph me 


----------------------------------------------
Responsive design 

Example :- 

<p class=" text-white md:-text-green-500 sm:-text-red-600" p/>


Working on  bydefault mobile first approach bybreakpoint system.
by state:-
bybreakpoint -->sm-->small, md--> medium ,lg-->large

Explanation :- medium se jitne bhi upar jaaynge un sab pr green kr do
jaise hee small tak pohnche or usse sare bade red ho jaaynge .

Question
mobile me card alag dikhe or badi screen par alag dikhe.
badi screen --> left me image ,right me detail



Margin slye dedi --> taki thodi dur rahe 
mt-3:- margin from top 
mx-auto :- margin on x axis is auto center me aajya sliye krte hain .
rounded-xl :- thoda gol dikhane ko 


overflow-Hidden
overflow-auto 

taki image jo ham bnaate hain wo overflow na ho 
rounded diya hai to rounded rahe.

div ke andar ham isliye daalte hain child divs ko taki wrapper laga sake  or apne hisab se control kar sake

 medium screen ke liye :-
  md:max-w-2xl
 
 
 md ke andar flex ko daal do.
 taki jab screen medium ya usse badi ho to image or contant horizontal me chali jaaye
 
 upprcase
 text-sm-text-indigo-500
 
 
 p-2--> jaise samjh nahi aa rha to apne pixel bhi use krlo 
 
 p-[2px] --> hamara customised padding
 
----------------------------------------------
Project page banaenge :- 

isme ham nav baar banaenge 
image load krenge :- badi me dusri image ,Chhoti me dusri image
main section :-
or footer banaenge 


navbar 
ul>li*3

Example :- 

<div>


</div>

w-full :- full lenge 
h-12 :- height of navbar is 12 
bg-indigo-200
flex justify between
px-4 --> x axis pr padding

hidden :- isse hmesha hide rhega \
breakpoit pa flex laga do 






