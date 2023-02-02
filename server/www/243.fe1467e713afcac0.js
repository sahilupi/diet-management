"use strict";(self.webpackChunkbalancedyte=self.webpackChunkbalancedyte||[]).push([[243],{9243:(W,T,s)=>{s.r(T),s.d(T,{AccountAndSettingsModule:()=>u});var l=s(6895),a=s(7874),g=s(3874),e=s(8256),_=s(7952),Z=s(2670);class m{}function q(n,r){1&n&&e._UZ(0,"app-inline-spinner")}function w(n,r){if(1&n&&(e.TgZ(0,"div")(1,"h3"),e._uU(2),e.ALo(3,"currency"),e.qZA()()),2&n){const o=e.oxw();e.xp6(2),e.Oqu(e.gM2(3,1,null==o.orderDetails?null:o.orderDetails.planDetails.planPrice,null==o.orderDetails?null:o.orderDetails.planDetails.currency,"symbol","2.0"))}}function U(n,r){1&n&&e._UZ(0,"app-spinner")}m.\u0275fac=function(r){return new(r||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-inline-spinner"]],decls:4,vars:0,consts:[[1,"spinner"],[1,"bounce1"],[1,"bounce2"],[1,"bounce3"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"div",1)(2,"div",2)(3,"div",3),e.qZA())},styles:[".spinner[_ngcontent-%COMP%]{margin:100px auto 0;width:70px;text-align:center}.spinner[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:18px;height:18px;background-color:var(--greenColor);border-radius:100%;display:inline-block;animation:_ngcontent-%COMP%_sk-bouncedelay 1.4s infinite ease-in-out both}.spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%]{animation-delay:-.32s}.spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%]{animation-delay:-.16s}@keyframes _ngcontent-%COMP%_sk-bouncedelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}"]});class c{constructor(r,o,t){this.userApiService=r,this.router=o,this.activatedRoute=t,this.errMsg="",this.isShowPassword=!1,this.isLoading=!1}ngOnInit(){this.activatedRoute.params.subscribe(r=>{this.userApiService.getUserOrder(r.orderId).subscribe(o=>{this.orderDetails=o.order[0],console.log(this.orderDetails)})}),setTimeout(()=>{const r=document.getElementById("custom-order-backdrop");r.style.visibility="visible",r.style.opacity="1",document.getElementById("custom-order-modal").style.transform="translateY(0)"},0)}submitForm(){}scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}closeModal(){const r=document.getElementById("custom-order-backdrop");r.style.visibility="hidden",r.style.opacity="0",document.getElementById("custom-order-modal").style.transform="translateY(100vh)",setTimeout(()=>{this.router.navigate(["/account/profile/orders"])},300)}scrollToDiv(){document.getElementById("plan-details").scrollIntoView()}}c.\u0275fac=function(r){return new(r||c)(e.Y36(_.Q),e.Y36(a.F0),e.Y36(a.gz))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-model"]],inputs:{component:"component",emailInputValue:"emailInputValue"},decls:14,vars:3,consts:[["id","custom-order-backdrop",1,"custom-order-backdrop",3,"click"],["id","custom-order-modal",1,"custom-order-modal"],[1,"user-area","pt-100","pb-70",2,"width","100%"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12"],[1,"user-all-form"],[1,"contact-form"],[1,"model-text"],[4,"ngIf"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.closeModal()}),e.qZA(),e.TgZ(1,"div",1)(2,"div")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"p",8),e._uU(10,"You Order Details!"),e.qZA(),e.YNc(11,q,1,0,"app-inline-spinner",9),e.YNc(12,w,4,6,"div",9),e.qZA()()()()()()()(),e.YNc(13,U,1,0,"app-spinner",9)),2&r&&(e.xp6(11),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("ngIf",!o.isLoading),e.xp6(1),e.Q6J("ngIf",o.isLoading))},dependencies:[l.O5,Z.O,m,l.H9],styles:[".custom-order-backdrop[_ngcontent-%COMP%]{visibility:hidden;opacity:0;width:100%;height:100%;position:fixed;z-index:100;left:0;top:0;background-color:#000c;filter:blur(10px);transition:all .3s ease-out}.custom-order-modal[_ngcontent-%COMP%]{position:fixed;z-index:500;background-color:transparent;width:100%;height:20%;border:1px solid transparent;padding:16px;left:25%;top:3%;bottom:0;box-sizing:border-box;transform:translateY(-100vh);transition:all .3s ease-out}@media (min-width: 601px){.custom-order-modal[_ngcontent-%COMP%]{width:500px;left:calc(50% - 250px)}}@media (max-width: 600px){.custom-order-modal[_ngcontent-%COMP%]{top:20%;width:500px;left:calc(50% - 250px)}}@media (max-width: 478px){.custom-order-modal[_ngcontent-%COMP%]{top:20%;width:420px;left:calc(50% - 210px)}}@media (max-width: 378px){.custom-order-modal[_ngcontent-%COMP%]{top:20%;width:350px;left:calc(50% - 175px)}}.error-div-outer[_ngcontent-%COMP%]{margin:auto;text-align:center}.error-div-inner[_ngcontent-%COMP%]{margin:auto;color:#d32a2a;background:rgba(255,64,64,.2);border:1px solid #ff4040;text-align:center;padding:10px}.model-text[_ngcontent-%COMP%]{color:var(--greenColor);font-weight:500}"]});var b=s(1606),C=s(1653),i=s(433),A=s(7323);function P(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"h3"),e._uU(1,"You havn't placed any order yet! "),e.TgZ(2,"a",11),e.NdJ("click",function(){e.CHM(o);const d=e.oxw();return e.KtG(d.scrollTop())}),e._uU(3," Place an order"),e.qZA()()}}function O(n,r){if(1&n&&(e.TgZ(0,"tbody")(1,"tr",15)(2,"td",16)(3,"span",17),e._uU(4),e.qZA()(),e.TgZ(5,"td",18)(6,"span",17),e._uU(7),e.qZA()(),e.TgZ(8,"td",19)(9,"span",17),e._uU(10),e.qZA()(),e.TgZ(11,"td",19)(12,"span",17),e._uU(13),e.qZA()(),e.TgZ(14,"td",19)(15,"span",17),e._uU(16),e.qZA()(),e.TgZ(17,"td",20)(18,"span",17),e._uU(19),e.ALo(20,"currency"),e.qZA()()()()),2&n){const o=r.$implicit;e.xp6(4),e.hij(" ",o.razorPayOrderId," "),e.xp6(3),e.Oqu(o.createdAt.slice(0,10)),e.xp6(3),e.Oqu(o.planDetails.paymentStatus),e.xp6(3),e.Oqu(o.planDetails.planName),e.xp6(3),e.Oqu(o.planDetails.planDuration),e.xp6(3),e.Oqu(e.gM2(20,6,o.planDetails.payableTotal,o.planDetails.currency,"symbol","2.0"))}}function I(n,r){if(1&n&&(e.TgZ(0,"table",12)(1,"thead")(2,"tr")(3,"th",13),e._uU(4,"Order Id"),e.qZA(),e.TgZ(5,"th",13),e._uU(6,"Date"),e.qZA(),e.TgZ(7,"th",13),e._uU(8,"Status"),e.qZA(),e.TgZ(9,"th",13),e._uU(10,"Plan Name"),e.qZA(),e.TgZ(11,"th",13),e._uU(12,"Plan Duration"),e.qZA(),e.TgZ(13,"th",13),e._uU(14,"Total"),e.qZA()()(),e.YNc(15,O,21,11,"tbody",14),e.qZA()),2&n){const o=e.oxw();e.xp6(15),e.Q6J("ngForOf",o.orders)}}function N(n,r){1&n&&e._UZ(0,"app-spinner")}class f{constructor(r,o,t){this.userApiService=r,this.toastMessageService=o,this.router=t,this.isLoading=!1,this.orders=[]}ngOnInit(){this.scrollTop(),this.isLoggedIn()&&(this.isLoading=!0,this.userApiService.getUserOrders().subscribe(r=>{this.orders=r.orders.slice().reverse(),this.getTotalOfOrders(),this.isLoading=!1},r=>{this.isLoading=!1,console.log(r)}))}isLoggedIn(){return this.userApiService.isLoggedIn()}scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}onNavigate(r){this.router.navigate(["/account/profile/orders/view-order/"+r])}getTotalOfOrders(){let r=0,o=0;return this.orders.map(t=>{r+=Number(t.planDetails.payableTotal),o+=Number(t.planDetails.planDuration.slice(0,1))}),{totalAmount:r,totalDuration:o}}}f.\u0275fac=function(r){return new(r||f)(e.Y36(_.Q),e.Y36(C.E),e.Y36(a.F0))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-orders"]],hostVars:1,hostBindings:function(r,o){2&r&&e.d8E("@fallIn",void 0)},decls:23,vars:3,consts:[[1,"inner-banner","inner-bg13"],[1,"container"],[1,"inner-title","text-center"],["routerLink","/"],[1,"cart-wraps-area","pt-100","pb-70"],[1,"row"],[1,"col-lg-12"],[1,"cart-wraps"],[1,"cart-table","table-responsive"],[4,"ngIf"],["class","table table-bordered",4,"ngIf"],["routerLink","/diet-plans",2,"margin-left","4px",3,"click"],[1,"table","table-bordered"],["scope","col"],[4,"ngFor","ngForOf"],[1,"order-row"],[1,"product-thumbnail"],[1,"unit-amount"],[1,"product-name"],[1,"product-price"],[1,"product-quantity"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),e._uU(4,"My Orders"),e.qZA(),e.TgZ(5,"ul")(6,"li")(7,"a",3),e._uU(8,"Home"),e.qZA()(),e.TgZ(9,"li"),e._uU(10,"My orders"),e.qZA()()()()(),e.TgZ(11,"section",4)(12,"div",1)(13,"div",5)(14,"div",6)(15,"form")(16,"div",7)(17,"div",8),e.YNc(18,P,4,0,"h3",9),e.YNc(19,I,16,1,"table",10),e.qZA()()()()()()(),e.YNc(20,N,1,0,"app-spinner",9),e._UZ(21,"ng-progress")(22,"router-outlet")),2&r&&(e.xp6(18),e.Q6J("ngIf",o.orders.length<1),e.xp6(1),e.Q6J("ngIf",o.orders.length>=1),e.xp6(1),e.Q6J("ngIf",o.isLoading))},dependencies:[l.sg,l.O5,a.lC,a.rH,i._Y,i.JL,i.F,Z.O,A.Yh,l.H9],styles:[".order-row[_ngcontent-%COMP%]{box-shadow:2px 3px 4px #ccc}.view-details[_ngcontent-%COMP%]{box-shadow:2px 3px 4px #ccc;padding:2px 6px;border-radius:3px;color:var(--greenColor)}"],data:{animation:[(0,b.ph)()]}});var M=s(4347);function E(n,r){1&n&&(e.TgZ(0,"div",58),e._UZ(1,"i",59),e.TgZ(2,"span",60),e._uU(3,"Your account details."),e.qZA()())}function J(n,r){1&n&&(e.TgZ(0,"div",61),e._UZ(1,"i",62),e._uU(2," Please enter your name. "),e.qZA())}function Y(n,r){1&n&&(e.TgZ(0,"div",61),e._UZ(1,"i",62),e._uU(2," Please enter email address. "),e.qZA())}function F(n,r){1&n&&(e.TgZ(0,"div",61),e._UZ(1,"i",62),e._uU(2," Please enter a valid email address. "),e.qZA())}function k(n,r){1&n&&(e.TgZ(0,"div",61),e._UZ(1,"i",62),e._uU(2," Please enter your phone number. "),e.qZA())}function G(n,r){1&n&&(e.TgZ(0,"div",61),e._UZ(1,"i",62),e._uU(2," Please enter your fitness goals. "),e.qZA())}function Q(n,r){1&n&&(e.TgZ(0,"div",61),e._UZ(1,"i",62),e._uU(2," Enter your age in years. "),e.qZA())}function L(n,r){1&n&&(e.TgZ(0,"div",61),e._UZ(1,"i",62),e._uU(2," Height in feet inches. "),e.qZA())}function S(n,r){1&n&&(e.TgZ(0,"div",61),e._UZ(1,"i",62),e._uU(2," Enter weight in Kg(s). "),e.qZA())}function D(n,r){1&n&&(e.TgZ(0,"span",63),e._UZ(1,"i",62),e._uU(2," Please select your gender. "),e.qZA())}function x(n,r){1&n&&(e.TgZ(0,"span",63),e._UZ(1,"i",62),e._uU(2," Select weight goal(Lose/gain). "),e.qZA())}function B(n,r){1&n&&(e.TgZ(0,"span",63),e._UZ(1,"i",62),e._uU(2," Select weight goal(Lose/gain). "),e.qZA())}function V(n,r){1&n&&(e.TgZ(0,"span",63),e._UZ(1,"i",62),e._uU(2," Are you going to gym?(Yes/No). "),e.qZA())}function j(n,r){1&n&&(e.TgZ(0,"span",63),e._UZ(1,"i",62),e._uU(2," Please select your food type. "),e.qZA())}function z(n,r){1&n&&e._UZ(0,"app-spinner")}class h{constructor(r,o,t,d){this.router=r,this.fb=o,this.userApiService=t,this.toastMessageService=d,this.isLoading=!1,this.isConflictErr=!1}ngOnInit(){this.scrollTop(),this.isLoading=!0,this.userForm=this.fb.group({fullName:new i.NI("",[i.kI.required]),email:new i.NI("",[i.kI.required,i.kI.pattern(M.f.email)]),phone:new i.NI("",[i.kI.required]),age:new i.NI("",[i.kI.required]),goals:new i.NI("",[i.kI.required]),height:new i.NI("",[i.kI.required]),weight:new i.NI("",[i.kI.required]),gender:new i.NI("",[i.kI.required]),loseOrGain:new i.NI("",[i.kI.required]),goingGym:new i.NI("",[i.kI.required]),physicallyActive:new i.NI("",[i.kI.required]),foodType:new i.NI("",[i.kI.required]),planDuration:new i.NI("3",[i.kI.required]),medicalIssue:new i.NI(""),foodAllergy:new i.NI("")}),this.isLoggedIn()&&this.userApiService.getUserProfile().subscribe(r=>{this.userForm.patchValue({fullName:r.user.fullName,email:r.user.email,phone:r.user.phone,goals:r.user.goals,age:r.user.age,gender:r.user.gender,height:r.user.height,weight:r.user.weight,loseOrGain:r.user.loseOrGain,goingGym:r.user.goingGym,physicallyActive:r.user.physicallyActive,foodType:r.user.foodType,medicalIssue:r.user.medicalIssue,foodAllergy:r.user.foodAllergy}),this.isLoading=!1},r=>{this.toastMessageService.error("An unknown error occured!"),this.isLoading=!1,console.log(r)})}get f(){return this.userForm.controls}submitForm(){if(this.userForm.valid){this.isLoading=!0;const r=this.userForm.value;try{this.userApiService.postUpdateUserProfile(r).subscribe(o=>{this.toastMessageService.success(o.message),Object.keys(this.userForm.controls).forEach(t=>{this.userForm.controls[t].markAsPristine()}),this.isLoading=!1},o=>{console.log(o),this.toastMessageService.error(11e3===o.error.message.code?"An account with this email address exists already!":o.error.message),this.isLoading=!1})}catch{this.toastMessageService.success("An unknown error occured!"),this.isLoading=!1}}else console.log("Form not valid")}scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}isLoggedIn(){return this.userApiService.isLoggedIn()}showModel(){const r=document.getElementById("custom-backdrop");r.style.visibility="visible",r.style.opacity="1",document.getElementById("custom-modal").style.transform="translateY(0)"}}function H(n,r){1&n&&e._UZ(0,"app-spinner")}h.\u0275fac=function(r){return new(r||h)(e.Y36(a.F0),e.Y36(i.qu),e.Y36(_.Q),e.Y36(C.E))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-profile"]],hostVars:1,hostBindings:function(r,o){2&r&&e.d8E("@fallIn",void 0)},decls:163,vars:35,consts:[[1,"checkout-area","pt-100","pb-70"],[1,"container"],[3,"formGroup","ngSubmit"],["id","plan-details",1,"row"],[1,"col-lg-12"],["class","checkout-user","style","background-color: #72ae44; color: #ffffff",4,"ngIf"],[1,"billing-details"],[1,"title"],[1,"row"],[1,"col-lg-6","col-md-6"],[1,"form-group",3,"ngClass"],[1,"required"],["formControlName","fullName","type","text",1,"form-control"],["class","error-msg",4,"ngIf"],["formControlName","email","type","email",1,"form-control"],["formControlName","phone","type","text",1,"form-control"],["formControlName","goals","type","text",1,"form-control"],[1,"col-lg-4","col-md-6"],["formControlName","age","type","text",1,"form-control"],["formControlName","height","type","text",1,"form-control"],["formControlName","weight","type","text",1,"form-control"],[1,"col-lg-4","col-md-6",3,"ngClass"],[1,"form-group","radio-group",3,"ngClass"],[1,"payment-box",2,"margin-bottom","10px"],[1,"payment-method"],[1,"radio-group",2,"margin-bottom","0"],["type","radio","id","male","value","Male","formControlName","gender"],["for","male"],["type","radio","id","female","value","Female","formControlName","gender"],["for","female"],["style","margin-bottom: 10px;","class","error-msg",4,"ngIf"],[1,"payment-box"],["type","radio","id","lose","value","Lose","formControlName","loseOrGain"],["for","lose"],["type","radio","id","gain","value","Gain","formControlName","loseOrGain"],["for","gain"],["style","margin-bottom: 10px","class","error-msg",4,"ngIf"],["type","radio","id","yes","value","Yes","formControlName","physicallyActive"],["for","yes"],["type","radio","id","No","value","No","formControlName","physicallyActive"],["for","No"],[1,"col-lg-6","col-md-6",3,"ngClass"],["type","radio","id","yesgym","value","Yes","formControlName","goingGym"],["for","yesgym"],["type","radio","id","nogym","value","No","formControlName","goingGym"],["for","nogym"],["style","margin-bottom:\n                                                10px","class","error-msg",4,"ngIf"],["type","radio","id","veg","value","Veg","formControlName","foodType"],["for","veg"],["type","radio","id","non-veg","value","Non-Veg","formControlName","foodType"],["for","non-veg"],["type","radio","id","just-egg","value","Just-egg","formControlName","foodType"],["for","just-egg"],[1,"form-group"],["formControlName","medicalIssue","type","text",1,"form-control"],["formControlName","foodAllergy","type","text",1,"form-control"],["type","submit",1,"default-btn",3,"disabled"],[4,"ngIf"],[1,"checkout-user",2,"background-color","#72ae44","color","#ffffff"],[1,"fas","fa-sign-out-alt"],[2,"color","#ffffff"],[1,"error-msg"],["aria-hidden","true",1,"fa","fa-exclamation-triangle"],[1,"error-msg",2,"margin-bottom","10px"]],template:function(r,o){1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return o.submitForm()}),e.TgZ(3,"div",3)(4,"div",4),e.YNc(5,E,4,0,"div",5),e.TgZ(6,"div",6)(7,"h3",7),e._uU(8,"Account details"),e.qZA(),e.TgZ(9,"div",8)(10,"div",9)(11,"div",10)(12,"label"),e._uU(13,"Full Name "),e.TgZ(14,"span",11),e._uU(15,"*"),e.qZA()(),e._UZ(16,"input",12),e.YNc(17,J,3,0,"div",13),e.qZA()(),e.TgZ(18,"div",9)(19,"div",10)(20,"label"),e._uU(21,"Email Address "),e.TgZ(22,"span",11),e._uU(23,"*"),e.qZA()(),e._UZ(24,"input",14),e.YNc(25,Y,3,0,"div",13),e.YNc(26,F,3,0,"div",13),e.qZA()(),e.TgZ(27,"div",9)(28,"div",10)(29,"label"),e._uU(30,"Phone "),e.TgZ(31,"span",11),e._uU(32,"*"),e.qZA()(),e._UZ(33,"input",15),e.YNc(34,k,3,0,"div",13),e.qZA()(),e.TgZ(35,"div",9)(36,"div",10)(37,"label"),e._uU(38,"Your Goals "),e.TgZ(39,"span",11),e._uU(40,"*"),e.qZA()(),e._UZ(41,"input",16),e.YNc(42,G,3,0,"div",13),e.qZA()(),e.TgZ(43,"div",17)(44,"div",10)(45,"label"),e._uU(46,"Age (in years) "),e.TgZ(47,"span",11),e._uU(48,"*"),e.qZA()(),e._UZ(49,"input",18),e.YNc(50,Q,3,0,"div",13),e.qZA()(),e.TgZ(51,"div",17)(52,"div",10)(53,"label"),e._uU(54,"Height(in feet inches) "),e.TgZ(55,"span",11),e._uU(56,"*"),e.qZA()(),e._UZ(57,"input",19),e.YNc(58,L,3,0,"div",13),e.qZA()(),e.TgZ(59,"div",17)(60,"div",10)(61,"label"),e._uU(62,"Weight(in kg(s)) "),e.TgZ(63,"span",11),e._uU(64,"*"),e.qZA()(),e._UZ(65,"input",20),e.YNc(66,S,3,0,"div",13),e.qZA()(),e.TgZ(67,"div",21)(68,"div",22)(69,"label"),e._uU(70,"Gender "),e.TgZ(71,"span",11),e._uU(72,"*"),e.qZA()(),e.TgZ(73,"div",23)(74,"div",24)(75,"p",25),e._UZ(76,"input",26),e.TgZ(77,"label",27),e._uU(78,"Male"),e.qZA(),e._UZ(79,"input",28),e.TgZ(80,"label",29),e._uU(81,"Female"),e.qZA()(),e.YNc(82,D,3,0,"span",30),e.qZA()()()(),e.TgZ(83,"div",21)(84,"div",22)(85,"label"),e._uU(86,"Lose/Gain "),e.TgZ(87,"span",11),e._uU(88,"*"),e.qZA()(),e.TgZ(89,"div",31)(90,"div",24)(91,"p",25),e._UZ(92,"input",32),e.TgZ(93,"label",33),e._uU(94,"Lose"),e.qZA(),e._UZ(95,"input",34),e.TgZ(96,"label",35),e._uU(97,"Gain"),e.qZA()(),e.YNc(98,x,3,0,"span",36),e.qZA()()()(),e.TgZ(99,"div",21)(100,"div",22)(101,"label"),e._uU(102,"Physically Active? "),e.TgZ(103,"span",11),e._uU(104,"*"),e.qZA()(),e.TgZ(105,"div",31)(106,"div",24)(107,"p",25),e._UZ(108,"input",37),e.TgZ(109,"label",38),e._uU(110,"Yes"),e.qZA(),e._UZ(111,"input",39),e.TgZ(112,"label",40),e._uU(113,"No"),e.qZA()(),e.YNc(114,B,3,0,"span",36),e.qZA()()()(),e.TgZ(115,"div",41)(116,"div",22)(117,"label"),e._uU(118,"Going gym? "),e.TgZ(119,"span",11),e._uU(120,"*"),e.qZA()(),e.TgZ(121,"div",31)(122,"div",24)(123,"p",25),e._UZ(124,"input",42),e.TgZ(125,"label",43),e._uU(126,"Yes"),e.qZA(),e._UZ(127,"input",44),e.TgZ(128,"label",45),e._uU(129,"No"),e.qZA()(),e.YNc(130,V,3,0,"span",46),e.qZA()()()(),e.TgZ(131,"div",41)(132,"div",22)(133,"label"),e._uU(134,"Food Type "),e.TgZ(135,"span",11),e._uU(136,"*"),e.qZA()(),e.TgZ(137,"div",31)(138,"div",24)(139,"p",25),e._UZ(140,"input",47),e.TgZ(141,"label",48),e._uU(142,"Veg"),e.qZA(),e._UZ(143,"input",49),e.TgZ(144,"label",50),e._uU(145,"Non-veg"),e.qZA(),e._UZ(146,"input",51),e.TgZ(147,"label",52),e._uU(148,"Just egg"),e.qZA()(),e.YNc(149,j,3,0,"span",46),e.qZA()()()(),e.TgZ(150,"div",9)(151,"div",53)(152,"label"),e._uU(153,"Any Medical Issue"),e.qZA(),e._UZ(154,"input",54),e.qZA()(),e.TgZ(155,"div",9)(156,"div",53)(157,"label"),e._uU(158,"Any food you are having allergy with?"),e.qZA(),e._UZ(159,"input",55),e.qZA()(),e.TgZ(160,"button",56),e._uU(161),e.qZA()()()()()()()(),e.YNc(162,z,1,0,"app-spinner",57)),2&r&&(e.xp6(2),e.Q6J("formGroup",o.userForm),e.xp6(3),e.Q6J("ngIf",o.isLoggedIn()),e.xp6(6),e.Q6J("ngClass",o.f.fullName.invalid&&(o.f.fullName.dirty||o.f.fullName.touched)||o.f.fullName.hasError("required")&&o.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",o.f.fullName.hasError("required")&&o.f.fullName.touched||o.f.fullName.hasError("required")&&o.submitted),e.xp6(2),e.Q6J("ngClass",o.f.email.invalid&&(o.f.email.dirty||o.f.email.touched)||o.f.email.hasError("required")&&o.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",o.f.email.hasError("required")&&o.f.email.touched||o.f.email.hasError("required")&&o.submitted),e.xp6(1),e.Q6J("ngIf",o.f.email.hasError("pattern")&&o.f.email.touched||o.f.email.hasError("pattern")&&o.submitted),e.xp6(2),e.Q6J("ngClass",o.f.phone.invalid&&(o.f.phone.dirty||o.f.phone.touched)||o.f.phone.hasError("required")&&o.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",o.f.phone.hasError("required")&&o.f.phone.touched||o.f.phone.hasError("required")&&o.submitted),e.xp6(2),e.Q6J("ngClass",o.f.goals.invalid&&(o.f.goals.dirty||o.f.goals.touched)||o.f.goals.hasError("required")&&o.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",o.f.goals.hasError("required")&&o.f.goals.touched||o.f.goals.hasError("required")&&o.submitted),e.xp6(2),e.Q6J("ngClass",o.f.age.invalid&&(o.f.age.dirty||o.f.age.touched)||o.f.age.hasError("required")&&o.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",o.f.age.hasError("required")&&o.f.age.touched||o.f.age.hasError("required")&&o.submitted),e.xp6(2),e.Q6J("ngClass",o.f.height.invalid&&(o.f.height.dirty||o.f.height.touched)||o.f.height.hasError("required")&&o.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",o.f.height.hasError("required")&&o.f.height.touched||o.f.height.hasError("required")&&o.submitted),e.xp6(2),e.Q6J("ngClass",o.f.weight.invalid&&(o.f.weight.dirty||o.f.weight.touched)||o.f.weight.hasError("required")&&o.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",o.f.weight.hasError("required")&&o.f.weight.touched||o.f.weight.hasError("required")&&o.submitted),e.xp6(1),e.Q6J("ngClass",o.f.goingGym.invalid&&(o.f.goingGym.dirty||o.f.goingGym.touched)||o.f.goingGym.hasError("required")&&o.submitted?"m-top":""),e.xp6(1),e.Q6J("ngClass",o.f.gender.invalid&&(o.f.gender.dirty||o.f.gender.touched)||o.f.gender.hasError("required")&&o.submitted?"has-error m-top":""),e.xp6(14),e.Q6J("ngIf",o.f.gender.hasError("required")&&o.f.gender.touched||o.f.gender.hasError("required")&&o.submitted),e.xp6(1),e.Q6J("ngClass",o.f.loseOrGain.invalid&&(o.f.loseOrGain.dirty||o.f.loseOrGain.touched)||o.f.loseOrGain.hasError("required")&&o.submitted?"m-top":""),e.xp6(1),e.Q6J("ngClass",o.f.loseOrGain.invalid&&(o.f.loseOrGain.dirty||o.f.loseOrGain.touched)||o.f.loseOrGain.hasError("required")&&o.submitted?"has-error m-top":""),e.xp6(14),e.Q6J("ngIf",o.f.loseOrGain.hasError("required")&&o.f.loseOrGain.touched||o.f.loseOrGain.hasError("required")&&o.submitted),e.xp6(1),e.Q6J("ngClass",o.f.physicallyActive.invalid&&(o.f.physicallyActive.dirty||o.f.physicallyActive.touched)||o.f.physicallyActive.hasError("required")&&o.submitted?"m-top":""),e.xp6(1),e.Q6J("ngClass",o.f.physicallyActive.invalid&&(o.f.physicallyActive.dirty||o.f.physicallyActive.touched)||o.f.physicallyActive.hasError("required")&&o.submitted?"has-error m-top":""),e.xp6(14),e.Q6J("ngIf",o.f.physicallyActive.hasError("required")&&o.f.physicallyActive.touched||o.f.physicallyActive.hasError("required")&&o.submitted),e.xp6(1),e.Q6J("ngClass",o.f.goingGym.invalid&&(o.f.goingGym.dirty||o.f.goingGym.touched)||o.f.goingGym.hasError("required")&&o.submitted?"m-top":""),e.xp6(1),e.Q6J("ngClass",o.f.goingGym.invalid&&(o.f.goingGym.dirty||o.f.goingGym.touched)||o.f.goingGym.hasError("required")&&o.submitted?"has-error m-top":""),e.xp6(14),e.Q6J("ngIf",o.f.goingGym.hasError("required")&&o.f.goingGym.touched||o.f.goingGym.hasError("required")&&o.submitted),e.xp6(1),e.Q6J("ngClass",o.f.goingGym.invalid&&(o.f.goingGym.dirty||o.f.goingGym.touched)||o.f.goingGym.hasError("required")&&o.submitted?"m-top":""),e.xp6(1),e.Q6J("ngClass",o.f.foodType.invalid&&(o.f.foodType.dirty||o.f.foodType.touched)||o.f.foodType.hasError("required")&&o.submitted?"has-error m-top":""),e.xp6(17),e.Q6J("ngIf",o.f.foodType.hasError("required")&&o.f.foodType.touched||o.f.foodType.hasError("required")&&o.submitted),e.xp6(11),e.Q6J("disabled",!o.userForm.valid||!o.userForm.dirty),e.xp6(1),e.hij(" ",o.isLoading?"Saving...":"Save changes"," "),e.xp6(1),e.Q6J("ngIf",o.isLoading))},dependencies:[l.mk,l.O5,i._Y,i.Fj,i._,i.JJ,i.JL,i.sg,i.u,Z.O],styles:['.radio-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:not(:checked){display:none}.radio-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:checked{display:none}.radio-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:inline-flex;justify-content:space-between}p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{padding-left:22px;padding-right:8px;cursor:pointer;display:inline-flex;justify-content:space-between;font-weight:600;position:relative;margin-bottom:15px}p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%]{padding-left:22px;padding-right:8px;cursor:pointer;display:inline-flex;justify-content:space-between;font-weight:300;position:relative;margin-bottom:15px}p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:3px;width:18px;height:18px;border:1px solid #ddd;border-radius:50%}p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%]:after{content:"";width:12px;height:12px;background:var(--greenColor);position:absolute;top:6px;left:3px;border-radius:50%;transition:.5s;opacity:0;visibility:hidden;transform:scale(0)}.billing-totals[_ngcontent-%COMP%]   .default-btn[_ngcontent-%COMP%]{margin-top:20px;text-align:center;width:100%}.error-msg[_ngcontent-%COMP%]{color:red}.form-group.has-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:rgba(255,64,64,.2);border:1px solid #FF4040}.m-top[_ngcontent-%COMP%]{margin-bottom:1.6rem}.save-btn[_ngcontent-%COMP%]{float:right}button[_ngcontent-%COMP%]:disabled{cursor:not-allowed;pointer-events:all;opacity:.5}'],data:{animation:[(0,b.ph)()]}});class v{constructor(r,o,t,d){this.formBuilder=r,this.userApiService=o,this.toastMessageService=t,this.router=d,this.isLoading=!1,this.changePasswordForm=this.formBuilder.group({oldPassword:["",i.kI.required],newPassword:["",i.kI.required],confirmNewPassword:["",i.kI.required]},{validator:this.ConfirmedValidator("newPassword","confirmNewPassword")})}get value(){return this.changePasswordForm.value}get f(){return this.changePasswordForm.controls}ConfirmedValidator(r,o){return t=>{const y=t.controls[o];y.errors&&!y.errors.confirmedValidator||y.setErrors(t.controls[r].value!==y.value?{confirmedValidator:!0}:null)}}matchingInputsValidator(r,o){return function(t){return t.controls[r].value!==t.controls[o].value?(console.log("missmatch",t.controls[r].value),{missmatch:!0}):{missmatch:!1}}}get newPasswordControl(){return console.log(this.changePasswordForm.controls.newPassword.value),this.changePasswordForm.controls.newPassword.value}get confirmNewPasswordControl(){return console.log(this.changePasswordForm.hasError("missmatch")),this.changePasswordForm.controls.confirmNewPassword.value}submitForm(){const r=this.changePasswordForm.value;try{if(!this.changePasswordForm.valid)return void console.log("Form values are not valid");this.isLoading=!0,this.userApiService.putChangePassword(r).subscribe(o=>{this.isLoading=!1,!0===o.success&&(this.toastMessageService.success(o.message),this.isLoading=!1,this.router.navigate(["/account/profile"]))},o=>{this.toastMessageService.error(o.error.message),this.isLoading=!1})}catch{console.log("some error occured"),this.isLoading=!1}}scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}}v.\u0275fac=function(r){return new(r||v)(e.Y36(i.qu),e.Y36(_.Q),e.Y36(C.E),e.Y36(a.F0))},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-change-password"]],decls:25,vars:5,consts:[[1,"user-area","pt-100","pb-70"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12"],[1,"user-all-form"],[1,"contact-form"],["id","contactForm",3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group"],["type","password","formControlName","oldPassword","placeholder","Old Password",1,"form-control"],["type","password","formControlName","newPassword","placeholder","New Password",1,"form-control"],[1,"col-12"],["type","password","formControlName","confirmNewPassword","placeholder","Confirm New Password",1,"form-control"],[1,"col-lg-12","form-condition"],[1,"agree-label"],[1,"col-lg-12","col-md-12","text-center"],["type","submit",1,"default-btn",3,"disabled"],[4,"ngIf"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3"),e._uU(7,"Change Password"),e.qZA(),e.TgZ(8,"form",6),e.NdJ("ngSubmit",function(){return o.submitForm()}),e.TgZ(9,"div",7)(10,"div",3)(11,"div",8),e._UZ(12,"input",9),e.qZA()(),e.TgZ(13,"div",3)(14,"div",8),e._UZ(15,"input",10),e.qZA()(),e.TgZ(16,"div",11)(17,"div",8),e._UZ(18,"input",12),e.qZA()(),e.TgZ(19,"div",13),e._UZ(20,"div",14),e.qZA(),e.TgZ(21,"div",15)(22,"button",16),e._uU(23),e.qZA()()()()()()()()()(),e.YNc(24,H,1,0,"app-spinner",17)),2&r&&(e.Q6J("@fade","active"),e.xp6(8),e.Q6J("formGroup",o.changePasswordForm),e.xp6(14),e.Q6J("disabled",o.isLoading),e.xp6(1),e.hij(" ",o.isLoading?"Changing...":"Change Password"," "),e.xp6(1),e.Q6J("ngIf",o.isLoading))},dependencies:[l.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,Z.O],data:{animation:[b.U1]}});const X=[{path:"profile",canActivate:[g.Z],data:{title:"User Profile"},children:[{path:"",component:h,canActivate:[g.Z],data:{title:"User Profile"}},{path:"orders",component:f,canActivate:[g.Z],data:{title:"My orders"},children:[{path:"view-order/:orderId",component:c,canActivate:[g.Z],data:{title:"View order details"}}]}]},{path:"settings/change-password",component:v,canActivate:[g.Z],data:{title:"Change Password"}}];class p{}p.\u0275fac=function(r){return new(r||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[a.Bz.forChild(X),a.Bz]});var R=s(4466),K=s(5588);class u{}u.\u0275fac=function(r){return new(r||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[l.ez,p,i.u5,i.UX,R.m,a.Bz,A.Q8.withConfig({color:"green"}),K.bj]})}}]);