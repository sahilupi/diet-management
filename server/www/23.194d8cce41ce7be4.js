"use strict";(self.webpackChunkbalancedyte=self.webpackChunkbalancedyte||[]).push([[23],{4023:(W,Z,n)=>{n.r(Z),n.d(Z,{RegisterModule:()=>p});var c=n(6895),l=n(5450),t=n(433),h=n(1606),R=n(2340),e=n(8256),_=n(7952),C=n(1653),w=n(2670);function b(o,r){1&o&&(e.TgZ(0,"div",16)(1,"div",9)(2,"div",17),e._uU(3," Please enter a valid email!"),e.qZA()()())}function U(o,r){if(1&o&&(e.TgZ(0,"div",18)(1,"div",9)(2,"div",19),e._uU(3),e.qZA()()()),2&o){const s=e.oxw();e.xp6(3),e.hij(" ",s.successMessage,"")}}function T(o,r){if(1&o&&(e.TgZ(0,"div",16)(1,"div",9)(2,"div",17),e._uU(3),e.qZA()()()),2&o){const s=e.oxw();e.xp6(3),e.hij(" ",s.errorMessage,"")}}function P(o,r){1&o&&e._UZ(0,"app-spinner")}class g{constructor(r,s,i){this.userApiService=r,this.router=s,this.toastMessageService=i,this.IsvalidForm=!0,this.isLoading=!1}ngOnInit(){this.RequestResetForm=new t.cw({email:new t.NI(null,[t.kI.required,t.kI.email],this.forbiddenEmails)})}RequestResetUser(){this.successMessage="",this.errorMessage="",this.RequestResetForm.value.domain=R.N.domain,this.RequestResetForm.valid?(this.isLoading=!0,this.IsvalidForm=!0,this.userApiService.requestResetPassword(this.RequestResetForm.value).subscribe(r=>{this.isLoading=!1,this.RequestResetForm.reset(),this.successMessage="Reset password link sent to your email, please check your email inbox",this.toastMessageService.success("Reset password link sent to your email, please check your email inbox")},r=>{this.isLoading=!1,r.error.message&&(this.errorMessage=r.error.message,this.toastMessageService.error(r.error.message))})):(this.IsvalidForm=!1,this.isLoading=!1)}}function M(o,r){1&o&&(e.TgZ(0,"div",7)(1,"div",8)(2,"h2"),e._uU(3," Please Wait..."),e.qZA()()())}function x(o,r){1&o&&(e.TgZ(0,"div",7)(1,"div",9)(2,"h2"),e._uU(3," Invalid URL."),e.qZA()()())}function q(o,r){if(1&o&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),e.YNc(4,M,4,0,"div",6),e.YNc(5,x,4,0,"div",6),e.qZA()()()()),2&o){const s=e.oxw();e.xp6(4),e.Q6J("ngIf","Wait"==s.CurrentState),e.xp6(1),e.Q6J("ngIf","NotVerified"==s.CurrentState)}}function I(o,r){1&o&&(e.TgZ(0,"div",23)(1,"div",13)(2,"div",24),e._uU(3," Password is required with atleast 4 characters."),e.qZA()()())}function F(o,r){1&o&&(e.TgZ(0,"div",23)(1,"div",13)(2,"div",24),e._uU(3," Form not valid"),e.qZA()()())}function N(o,r){1&o&&(e.TgZ(0,"div",23)(1,"div",13)(2,"div",24),e._uU(3," Confirm Password does not match with password."),e.qZA()()())}function A(o,r){if(1&o&&(e.TgZ(0,"div",25)(1,"div",13)(2,"div",26),e._uU(3),e.qZA()()()),2&o){const s=e.oxw(2);e.xp6(3),e.hij(" ",s.successMessage,"")}}function y(o,r){if(1&o&&(e.TgZ(0,"div",23)(1,"div",13)(2,"div",24),e._uU(3),e.qZA()()()),2&o){const s=e.oxw(2);e.xp6(3),e.hij(" ",s.errorMessage,"")}}function S(o,r){if(1&o){const s=e.EpF();e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",10)(5,"div",11)(6,"h3"),e._uU(7,"Set New Password"),e.qZA(),e.TgZ(8,"form",12),e.NdJ("ngSubmit",function(){e.CHM(s);const d=e.oxw();return e.KtG(d.ResetPassword(d.ResponseResetForm))}),e.TgZ(9,"div",7)(10,"div",5)(11,"div",13),e._UZ(12,"input",14),e.YNc(13,I,4,0,"div",15),e.qZA()(),e.TgZ(14,"div",16)(15,"div",13),e._UZ(16,"input",17),e.YNc(17,F,4,0,"div",15),e.YNc(18,N,4,0,"div",15),e.qZA()(),e.TgZ(19,"div",18),e._UZ(20,"div",19),e.qZA(),e.YNc(21,A,4,1,"div",20),e.YNc(22,y,4,1,"div",15),e.TgZ(23,"div",21)(24,"button",22),e._uU(25),e.qZA()()()()()()()()()()}if(2&o){const s=e.oxw();e.xp6(8),e.Q6J("formGroup",s.ResponseResetForm),e.xp6(5),e.Q6J("ngIf",!s.ResponseResetForm.controls.newPassword.valid&&!s.IsResetFormValid),e.xp6(4),e.Q6J("ngIf",!s.ResponseResetForm.controls.confirmPassword.valid&&!s.IsResetFormValid),e.xp6(1),e.Q6J("ngIf",s.ResponseResetForm.controls.confirmPassword.valid&&s.ResponseResetForm.controls.confirmPassword.value!=s.ResponseResetForm.controls.newPassword.value&&!s.IsResetFormValid),e.xp6(3),e.Q6J("ngIf",s.successMessage),e.xp6(1),e.Q6J("ngIf",s.errorMessage),e.xp6(2),e.Q6J("disabled",s.isLoading),e.xp6(1),e.hij(" ",s.isLoading?"Updating...":"Update Password"," ")}}function J(o,r){1&o&&e._UZ(0,"app-spinner")}g.\u0275fac=function(r){return new(r||g)(e.Y36(_.Q),e.Y36(l.F0),e.Y36(C.E))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-request-reset"]],hostVars:1,hostBindings:function(r,s){2&r&&e.d8E("@fallIn",void 0)},decls:20,vars:5,consts:[[1,"user-area","pt-100","pb-70"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12"],[1,"user-all-form"],[1,"contact-form"],[1,"text-center"],["id","contactForm",3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group"],["type","text","formControlName","email","id","name","placeholder","Email Address",1,"form-control"],["class","col-12 error-div-outer",4,"ngIf"],["class","col-12 success-div-outer",4,"ngIf"],[1,"col-lg-12","col-md-12","text-center"],["type","submit",1,"default-btn"],[4,"ngIf"],[1,"col-12","error-div-outer"],[1,"error-div-inner"],[1,"col-12","success-div-outer"],[1,"success-div-inner"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3",6),e._uU(7,"Forgot Password"),e.qZA(),e.TgZ(8,"form",7),e.NdJ("ngSubmit",function(){return s.RequestResetUser()}),e.TgZ(9,"div",8)(10,"div",3)(11,"div",9),e._UZ(12,"input",10),e.YNc(13,b,4,0,"div",11),e.qZA()(),e.YNc(14,U,4,1,"div",12),e.YNc(15,T,4,1,"div",11),e.TgZ(16,"div",13)(17,"button",14),e._uU(18," Reset Now "),e.qZA()()()()()()()()()(),e.YNc(19,P,1,0,"app-spinner",15)),2&r&&(e.xp6(8),e.Q6J("formGroup",s.RequestResetForm),e.xp6(5),e.Q6J("ngIf",!s.RequestResetForm.controls.email.valid&&!s.IsvalidForm),e.xp6(1),e.Q6J("ngIf",s.successMessage),e.xp6(1),e.Q6J("ngIf",s.errorMessage),e.xp6(4),e.Q6J("ngIf",s.isLoading))},dependencies:[c.O5,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,w.O],styles:[".success-div-outer[_ngcontent-%COMP%]{margin:auto;text-align:center}.success-div-inner[_ngcontent-%COMP%]{margin:auto;color:green;background:rgb(13 255 21 / 20%);border:1px solid green;text-align:center;padding:10px}.error-div-outer[_ngcontent-%COMP%]{margin:auto;text-align:center}.error-div-inner[_ngcontent-%COMP%]{margin:auto;color:#d32a2a;background:rgba(255,64,64,.2);border:1px solid #FF4040;text-align:center;padding:10px}"],data:{animation:[(0,h.ph)()]}});class m{constructor(r,s,i,d){this.userApiService=r,this.router=s,this.activatedRoute=i,this.fb=d,this.isLoading=!1,this.IsResetFormValid=!0,this.CurrentState="Wait",this.activatedRoute.params.subscribe(a=>{this.resetToken=a.token,this.VerifyToken()})}ngOnInit(){this.Init()}VerifyToken(){this.isLoading=!0,this.userApiService.validatePasswordToken({resettoken:this.resetToken}).subscribe(r=>{this.isLoading=!1,this.CurrentState="Verified"},r=>{this.isLoading=!1,this.CurrentState="NotVerified"})}Init(){this.ResponseResetForm=this.fb.group({resettoken:[this.resetToken],newPassword:["",[t.kI.required,t.kI.minLength(4)]],confirmPassword:["",[t.kI.required,t.kI.minLength(4)]]})}ConfirmedValidator(r,s){return i=>{const a=i.controls[s];a.errors&&!a.errors.confirmedValidator||a.setErrors(i.controls[r].value!==a.value?{confirmedValidator:!0}:null)}}Validate(r){const i=r.controls.confirmPassword.value;return i.length<=0?null:i!==r.controls.newPassword.value?{doesNotMatch:!0}:{doesNotMatch:!1}}ResetPassword(r){this.errorMessage="",this.successMessage="",r.valid?(this.isLoading=!0,this.IsResetFormValid=!0,this.userApiService.newPassword(this.ResponseResetForm.value).subscribe(s=>{this.isLoading=!1,this.ResponseResetForm.reset(),this.successMessage=s.message},s=>{this.isLoading=!1,s.error.message&&(this.errorMessage=s.error.message)})):this.IsResetFormValid=!1}}function L(o,r){if(1&o&&(e.TgZ(0,"div",23)(1,"div",8)(2,"div",24),e._uU(3),e.qZA()()()),2&o){const s=e.oxw();e.xp6(3),e.hij(" ",s.serverErrorMessages,"")}}function k(o,r){1&o&&e._UZ(0,"app-spinner")}m.\u0275fac=function(r){return new(r||m)(e.Y36(_.Q),e.Y36(l.F0),e.Y36(l.gz),e.Y36(t.qu))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-response-reset"]],hostVars:1,hostBindings:function(r,s){2&r&&e.d8E("@fallIn",void 0)},decls:3,vars:3,consts:[["class","user-area pt-100 pb-70",4,"ngIf"],[4,"ngIf"],[1,"user-area","pt-100","pb-70"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-12","close-form"],[1,"col-md-12"],[1,"user-all-form"],[1,"contact-form"],["id","contactForm",3,"formGroup","ngSubmit"],[1,"form-group"],["type","password","formControlName","newPassword","id","name","placeholder","New Password",1,"form-control"],["class","col-12 error-div-outer",4,"ngIf"],[1,"col-12"],["type","password","formControlName","confirmPassword","placeholder","Confirm New Password",1,"form-control"],[1,"col-lg-12","form-condition"],[1,"agree-label"],["class","col-12 success-div-outer",4,"ngIf"],[1,"col-lg-12","col-md-12","text-center"],["type","submit",1,"default-btn",3,"disabled"],[1,"col-12","error-div-outer"],[1,"error-div-inner"],[1,"col-12","success-div-outer"],[1,"success-div-inner"]],template:function(r,s){1&r&&(e.YNc(0,q,6,2,"div",0),e.YNc(1,S,26,8,"div",0),e.YNc(2,J,1,0,"app-spinner",1)),2&r&&(e.Q6J("ngIf","Wait"==s.CurrentState||"NotVerified"==s.CurrentState),e.xp6(1),e.Q6J("ngIf","Verified"==s.CurrentState),e.xp6(1),e.Q6J("ngIf",s.isLoading))},dependencies:[c.O5,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,w.O],styles:[".success-div-outer[_ngcontent-%COMP%]{margin:auto;text-align:center}.success-div-inner[_ngcontent-%COMP%]{margin:auto;color:green;background:rgb(13 255 21 / 20%);border:1px solid green;text-align:center;padding:10px}.error-div-outer[_ngcontent-%COMP%]{margin:auto;text-align:center}.error-div-inner[_ngcontent-%COMP%]{margin:auto;color:#d32a2a;background:rgba(255,64,64,.2);border:1px solid #FF4040;text-align:center;padding:10px}"],data:{animation:[(0,h.ph)()]}});class f{constructor(r,s,i,d){this.formBuilder=r,this.userApiService=s,this.router=i,this.toastMessageService=d,this.errMsg="",this.isShowPassword=!1,this.isLoading=!1}ngOnInit(){this.loginForm=this.formBuilder.group({email:["",[t.kI.required]],password:["",[t.kI.required]]})}submitForm(){if(this.serverErrorMessages="",this.loginForm.valid){this.isLoading=!0;try{this.userApiService.postLogin(this.loginForm.value).subscribe(r=>{this.userApiService.setToken(r.token),this.router.navigate(["/diet-plans"]),this.scrollTop(),this.isLoading=!1},r=>{this.serverErrorMessages=r.error.message,this.isLoading=!1})}catch{this.toastMessageService.error("An unknown error occured! Please try again after sometime.")}}}scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}}f.\u0275fac=function(r){return new(r||f)(e.Y36(t.qu),e.Y36(_.Q),e.Y36(l.F0),e.Y36(C.E))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-user-login"]],hostVars:1,hostBindings:function(r,s){2&r&&e.d8E("@fallIn",void 0)},decls:33,vars:5,consts:[[1,"user-area","pt-100","pb-70"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12"],[1,"user-all-form"],[1,"contact-form"],["id","contactForm",3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group"],["type","text","formControlName","email","id","name","placeholder","Email Address",1,"form-control"],[1,"col-12"],["type","password","formControlName","password","placeholder","Password",1,"form-control"],["class","col-12 error-div-outer",4,"ngIf"],[1,"col-lg-12","form-condition"],[1,"agree-label"],["type","checkbox","id","chb1"],["for","chb1"],["routerLink","/user/reset-password",1,"forget",3,"click"],[1,"col-lg-12","col-md-12","text-center"],["type","submit",1,"default-btn",3,"disabled"],[1,"account-desc","text-center"],["routerLink","/user/sign-up",3,"click"],[4,"ngIf"],[1,"col-12","error-div-outer"],[1,"error-div-inner"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3"),e._uU(7,"Log In"),e.qZA(),e.TgZ(8,"form",6),e.NdJ("ngSubmit",function(){return s.submitForm()}),e.TgZ(9,"div",7)(10,"div",3)(11,"div",8),e._UZ(12,"input",9),e.qZA()(),e.TgZ(13,"div",10)(14,"div",8),e._UZ(15,"input",11),e.qZA()(),e.YNc(16,L,4,1,"div",12),e.TgZ(17,"div",13)(18,"div",14),e._UZ(19,"input",15),e.TgZ(20,"label",16),e._uU(21," Remember Me "),e.TgZ(22,"a",17),e.NdJ("click",function(){return s.scrollTop()}),e._uU(23,"Forgot My Password?"),e.qZA()()()(),e.TgZ(24,"div",18)(25,"button",19),e._uU(26),e.qZA()(),e.TgZ(27,"div",10)(28,"p",20),e._uU(29," Not a member? "),e.TgZ(30,"a",21),e.NdJ("click",function(){return s.scrollTop()}),e._uU(31,"Register"),e.qZA()()()()()()()()()()(),e.YNc(32,k,1,0,"app-spinner",22)),2&r&&(e.xp6(8),e.Q6J("formGroup",s.loginForm),e.xp6(8),e.Q6J("ngIf",s.serverErrorMessages),e.xp6(9),e.Q6J("disabled",s.isLoading),e.xp6(1),e.hij(" ",s.isLoading?"Logging in...":"Log In Now"," "),e.xp6(6),e.Q6J("ngIf",s.isLoading))},dependencies:[c.O5,l.rH,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,w.O],styles:[".error-div-outer[_ngcontent-%COMP%]{margin:auto;text-align:center}.error-div-inner[_ngcontent-%COMP%]{margin:auto;color:#d32a2a;background:rgba(255,64,64,.2);border:1px solid #FF4040;text-align:center;padding:10px}"],data:{animation:[(0,h.ph)()]}});var O=n(4347);function Y(o,r){1&o&&(e.TgZ(0,"div",25),e._UZ(1,"i",26),e._uU(2," Please enter your full name. "),e.qZA())}function E(o,r){1&o&&(e.TgZ(0,"div",25),e._UZ(1,"i",26),e._uU(2," Please enter email address. "),e.qZA())}function Q(o,r){1&o&&(e.TgZ(0,"div",25),e._UZ(1,"i",26),e._uU(2," Please enter a valid email address. "),e.qZA())}function V(o,r){1&o&&(e.TgZ(0,"div",25),e._UZ(1,"i",26),e._uU(2," Please enter password. "),e.qZA())}function j(o,r){1&o&&(e.TgZ(0,"div",25),e._UZ(1,"i",26),e._uU(2," Please confirm password. "),e.qZA())}function B(o,r){1&o&&(e.TgZ(0,"div",25),e._uU(1," Passwords do not match "),e.qZA())}function H(o,r){if(1&o&&(e.TgZ(0,"div",25),e._uU(1),e.qZA()),2&o){const s=e.oxw();e.xp6(1),e.hij(" ",s.serverErrMsg," ")}}function G(o,r){1&o&&e._UZ(0,"app-spinner")}class v{constructor(r,s,i,d){this.fb=r,this.userApiService=s,this.toastMessageService=i,this.router=d,this.isLoading=!1,this.serverErrMsg=""}ngOnInit(){this.userForm=this.fb.group({fullName:new t.NI("",[t.kI.required]),email:new t.NI("",[t.kI.required,t.kI.pattern(O.f.email)]),password:new t.NI("",[t.kI.required]),confirmPassword:new t.NI("",[t.kI.required])},{validator:this.ConfirmedValidator("password","confirmPassword")})}get f(){return this.userForm.controls}ConfirmedValidator(r,s){return i=>{const a=i.controls[s];a.errors&&!a.errors.confirmedValidator||a.setErrors(i.controls[r].value!==a.value?{confirmedValidator:!0}:null)}}submitForm(){if(this.submitted=!0,this.serverErrMsg="",!this.userForm.valid)return console.log("form not valid"),void this.toastMessageService.info("Please fill all required fields with valid values!");this.isLoading=!0,this.userApiService.postRegisterUser({fullName:this.userForm.value.fullName,email:this.userForm.value.email,password:this.userForm.value.password,confirmPassword:this.userForm.value.confirmPassword}).subscribe(s=>{this.isLoading=!1,this.toastMessageService.success(s.message),this.router.navigate(["/user/login"])},s=>{this.isLoading=!1,this.toastMessageService.error(s.error.message),this.serverErrMsg=s.error.message})}scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}}v.\u0275fac=function(r){return new(r||v)(e.Y36(t.qu),e.Y36(_.Q),e.Y36(C.E),e.Y36(l.F0))},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-user-sign-up"]],hostVars:1,hostBindings:function(r,s){2&r&&e.d8E("@fallIn",void 0)},decls:65,vars:14,consts:[[1,"inner-banner","inner-bg9"],[1,"container"],[1,"inner-title","text-center"],["routerLink","/",3,"click"],[1,"user-area","pt-100","pb-70"],[1,"row","align-items-center"],[1,"col-lg-12"],[1,"user-all-form"],[1,"contact-form"],["id","contactForm",3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group",3,"ngClass"],[1,"required"],["type","text","formControlName","fullName","placeholder","Fullname",1,"form-control"],["class","error-msg",4,"ngIf"],["type","email","formControlName","email","placeholder","Email",1,"form-control"],[1,"col-12"],["type","password","formControlName","password","placeholder","Password",1,"form-control"],["type","password","formControlName","confirmPassword","placeholder","Confirm Password",1,"form-control"],[1,"col-lg-12","col-md-12","text-center"],["type","submit",1,"default-btn"],[1,"col-12","text-center"],[1,"account-desc"],["routerLink","/user/login",3,"click"],[4,"ngIf"],[1,"error-msg"],["aria-hidden","true",1,"fa","fa-exclamation-triangle"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),e._uU(4,"Register"),e.qZA(),e.TgZ(5,"ul")(6,"li")(7,"a",3),e.NdJ("click",function(){return s.scrollTop()}),e._uU(8,"Home"),e.qZA()(),e.TgZ(9,"li"),e._uU(10,"Register"),e.qZA()()()()(),e.TgZ(11,"div",4)(12,"div",1)(13,"div",5)(14,"div",6)(15,"div",7)(16,"div",8)(17,"h3"),e._uU(18,"Create an Account!"),e.qZA(),e.TgZ(19,"form",9),e.NdJ("ngSubmit",function(){return s.submitForm()}),e.TgZ(20,"div",10)(21,"div",6)(22,"div",11)(23,"label"),e._uU(24,"Full Name "),e.TgZ(25,"span",12),e._uU(26,"*"),e.qZA()(),e._UZ(27,"input",13),e.YNc(28,Y,3,0,"div",14),e.qZA()(),e.TgZ(29,"div",6)(30,"div",11)(31,"label"),e._uU(32,"Email Address "),e.TgZ(33,"span",12),e._uU(34,"*"),e.qZA()(),e._UZ(35,"input",15),e.YNc(36,E,3,0,"div",14),e.YNc(37,Q,3,0,"div",14),e.qZA()(),e.TgZ(38,"div",16)(39,"div",11)(40,"label"),e._uU(41,"Set Password "),e.TgZ(42,"span",12),e._uU(43,"*"),e.qZA()(),e._UZ(44,"input",17),e.YNc(45,V,3,0,"div",14),e.qZA()(),e.TgZ(46,"div",16)(47,"div",11)(48,"label"),e._uU(49,"Confirm Password "),e.TgZ(50,"span",12),e._uU(51,"*"),e.qZA()(),e._UZ(52,"input",18),e.YNc(53,j,3,0,"div",14),e.YNc(54,B,2,0,"div",14),e.qZA()(),e.TgZ(55,"div",19),e.YNc(56,H,2,1,"div",14),e.TgZ(57,"button",20),e._uU(58),e.qZA()(),e.TgZ(59,"div",21)(60,"p",22),e._uU(61," Already have an account? "),e.TgZ(62,"a",23),e.NdJ("click",function(){return s.scrollTop()}),e._uU(63,"Log In"),e.qZA()()()()()()()()()()(),e.YNc(64,G,1,0,"app-spinner",24)),2&r&&(e.xp6(19),e.Q6J("formGroup",s.userForm),e.xp6(3),e.Q6J("ngClass",s.f.fullName.invalid&&(s.f.fullName.dirty||s.f.fullName.touched)||s.f.fullName.hasError("required")&&s.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",s.f.fullName.hasError("required")&&s.f.fullName.touched||s.f.fullName.hasError("required")&&s.submitted),e.xp6(2),e.Q6J("ngClass",s.f.email.invalid&&(s.f.email.dirty||s.f.email.touched)||s.f.email.hasError("required")&&s.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",s.f.email.hasError("required")&&s.f.email.touched||s.f.email.hasError("required")&&s.submitted),e.xp6(1),e.Q6J("ngIf",s.f.email.hasError("pattern")&&s.f.email.touched||s.f.email.hasError("pattern")&&s.submitted),e.xp6(2),e.Q6J("ngClass",s.f.password.invalid&&(s.f.password.dirty||s.f.password.touched)||s.f.password.hasError("required")&&s.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",s.f.password.hasError("required")&&s.f.password.touched||s.f.password.hasError("required")&&s.submitted),e.xp6(2),e.Q6J("ngClass",s.f.confirmPassword.invalid&&(s.f.confirmPassword.dirty||s.f.confirmPassword.touched)||s.f.confirmPassword.hasError("required")&&s.submitted?"has-error":""),e.xp6(6),e.Q6J("ngIf",s.f.confirmPassword.hasError("required")&&s.f.confirmPassword.touched||s.f.confirmPassword.hasError("required")&&s.submitted),e.xp6(1),e.Q6J("ngIf",s.f.confirmPassword.hasError("confirmedValidator")||s.f.password.hasError("confirmedValidator")),e.xp6(2),e.Q6J("ngIf",s.serverErrMsg),e.xp6(2),e.hij(" ",s.isLoading?"Registering...":"Register Now"," "),e.xp6(6),e.Q6J("ngIf",s.isLoading))},dependencies:[c.mk,c.O5,l.rH,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,w.O],styles:['.success-div-outer[_ngcontent-%COMP%]{margin:auto;text-align:center}.success-div-inner[_ngcontent-%COMP%]{margin:auto;color:green;background:rgb(13 255 21 / 20%);border:1px solid green;text-align:center;padding:10px}.radio-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:not(:checked){display:none}.radio-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:checked{display:none}.radio-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:inline-flex;justify-content:space-between}p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{padding-left:22px;padding-right:8px;cursor:pointer;display:inline-flex;justify-content:space-between;font-weight:600;position:relative;margin-bottom:15px}p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%]{padding-left:22px;padding-right:8px;cursor:pointer;display:inline-flex;justify-content:space-between;font-weight:300;position:relative;margin-bottom:15px}p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:3px;width:18px;height:18px;border:1px solid #ddd;border-radius:50%}p[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%]:after{content:"";width:12px;height:12px;background:var(--greenColor);position:absolute;top:6px;left:3px;border-radius:50%;transition:.5s;opacity:0;visibility:hidden;transform:scale(0)}.billing-totals[_ngcontent-%COMP%]   .default-btn[_ngcontent-%COMP%]{margin-top:20px;text-align:center;width:100%}.error-msg[_ngcontent-%COMP%]{color:red}.form-group.has-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:rgba(255,64,64,.2);border:1px solid #FF4040}.m-top[_ngcontent-%COMP%]{margin-bottom:1.6rem}'],data:{animation:[(0,h.ph)()]}});const X=[{path:"login",component:f,data:{title:"User Login"}},{path:"sign-up",component:v,data:{title:"User Sign Up"}},{path:"reset-password",component:g,data:{title:"Reset Password"}},{path:"response-reset-password/:token",component:m,data:{title:"Response Reset Password"}}];class u{}u.\u0275fac=function(r){return new(r||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[l.Bz.forChild(X),l.Bz]});var z=n(4466);class p{}p.\u0275fac=function(r){return new(r||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[c.ez,u,t.u5,t.UX,z.m]})}}]);