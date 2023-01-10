import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegexEnum } from 'src/app/shared/common/constants/regex';
import { PricingPlan } from 'src/app/shared/models/pricing-plan/pricing-plan.model';

import { PricingPlanService } from 'src/app/shared/services/pricing-plan.service';
import { ToasTMessageService } from 'src/app/shared/services/toast-message.service';
import { UserApiService } from 'src/app/shared/services/user-api.service';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {
  constructor(private pricingPlanService: PricingPlanService, private router: Router, private fb: FormBuilder, private userApiService: UserApiService, private toastMessageService: ToasTMessageService) { }


  pricingPlans: PricingPlan[] = [];
  selectedPricingPlan: PricingPlan;
  userForm: FormGroup;
  submitted: boolean;
  isLoading: boolean = false;
  isConflictErr: boolean = false;
  emailInputValue: string;
  popModel = document.getElementById("pop-model") as HTMLElement;
  ngOnInit(): void {
    this.popModel.style.display = "none";
    // user form
    this.userForm = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(RegexEnum.email)]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      goals: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      loseOrGain: new FormControl('', [Validators.required]),
      goingGym: new FormControl('', [Validators.required]),
      foodType: new FormControl('', [Validators.required]),
      planDuration: new FormControl('3', [Validators.required]),
      medicalIssue: new FormControl(''),
      foodAllergy: new FormControl(''),

      // image: new FormControl('', {asyncValidators: mimeType})
    },
      {
        validator: this.ConfirmedValidator('password', 'confirmPassword'),
      });

    // getting pricing plans
    this.pricingPlans = this.pricingPlanService.getPricingPlans();
    if (this.pricingPlans.length > 0) {
      this.pricingPlans.map((plan: PricingPlan) => {
        if (this.router.url.toLowerCase() === plan['planUrlLink'].toLowerCase()) {
          this.selectedPricingPlan = plan;
        }
      })

      if (this.router.url.toLowerCase() !== this.selectedPricingPlan?.['planUrlLink'].toLowerCase()) {
        this.router.navigate(['/not-found'])
      }
    }


    if (this.isLoggedIn()) {
      this.userForm.controls['fullName'].setErrors(null);
      this.userForm.controls['fullName'].clearValidators();
      this.userForm.controls['email'].setErrors(null);
      this.userForm.controls['email'].clearValidators();
      this.userForm.controls['password'].setErrors(null);
      this.userForm.controls['password'].clearValidators();
      this.userForm.controls['confirmPassword'].setErrors(null);
      this.userForm.controls['confirmPassword'].clearValidators();
      this.userForm.controls['phone'].setErrors(null);
      this.userForm.controls['phone'].clearValidators();

      this.userApiService.getUserProfile().subscribe((res: any) => {
        this.userForm.patchValue({
          goals: res['user']['goals'],
          age: res['user']['age'],
          gender: res['user']['gender'],
          height: res['user']['height'],
          weight: res['user']['weight'],
          loseOrGain: res['user']['loseOrGain'],
          goingGym: res['user']['goingGym'],
          foodType: res['user']['foodType'],
          medicalIssue: res['user']['medicalIssue'],
          foodAllergy: res['user']['foodAllergy']
        })
      })
    }
  }

  get f() {
    return this.userForm.controls;
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }


  submitForm() {
    this.submitted = true;
    if (!this.userForm.valid) {
      console.log('form not valid');
      return;
    }
    if (!this.isLoggedIn()) {
      this.isLoading = true;
      const formBody = {
        fullName: this.userForm.value.fullName,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        confirmPassword: this.userForm.value.confirmPassword,
        phone: this.userForm.value.phone,
        gender: this.userForm.value.gender,
        goals: this.userForm.value.goals,
        age: this.userForm.value.age,
        height: this.userForm.value.height,
        weight: this.userForm.value.weight,
        loseOrGain: this.userForm.value.loseOrGain,
        goingGym: this.userForm.value.goingGym,
        foodType: this.userForm.value.foodType,
        medicalIssue: this.userForm.value.medicalIssue,
        foodAllergy: this.userForm.value.foodAllergy,
        planPrice: this.selectedPricingPlan.planPrice,
        payableTotal: this.onGetPayableTotal(),
        planName: this.selectedPricingPlan.planName,
        planDuration: this.userForm.value.planDuration + ' months',
      }
      this.userApiService.postRegisterUser(formBody).subscribe((res: any) => {
        this.isLoading = false;
        this.toastMessageService.success(res['message']);
        // if (this.router.url.split('?')[0] === '/admin/employees') {
        //   this.router.navigate(['admin/employees/leaves/check']);
        // }
        // else {
        //   this.router.navigate(['admin/employees']);
        // }
      }, error => {
        if (error.status === 409 || error.statusText === "Conflict") {
          // this.toastMessageService.error(error.error.message);
          this.isConflictErr = true;
          this.emailInputValue = this.userForm.value.email;
          this.isLoading = false;
          if (this.isConflictErr) {
            this.popModel.style.display = "block";
          }
        }
        else {
          this.isLoading = false;
          this.toastMessageService.info(error.error.message);
        }
        // if (Array.isArray(error.error)) {
        //   this.toastMessageService.info(error.error[0]);
        //   if (this.router.url.split('?')[0] === '/admin/employees') {
        //     this.router.navigate(['admin/employees/leaves/check']);
        //   }
        //   else {
        //     this.router.navigate(['admin/employees']);
        //   }
        // }
        // else {
        //   this.toastMessageService.info(error.error.message);
        //   if (this.router.url.split('?')[0] === '/admin/employees') {
        //     this.router.navigate(['admin/employees/leaves/check']);
        //   }
        //   else {
        //     this.router.navigate(['admin/employees']);
        //   }
        // }
      })
    }
    else {
      this.isLoading = true;
      const formBody = {
        goals: this.userForm.value.goals,
        email: this.userForm.value.email,
        age: this.userForm.value.age,
        height: this.userForm.value.height,
        weight: this.userForm.value.weight,
        loseOrGain: this.userForm.value.loseOrGain,
        goingGym: this.userForm.value.goingGym,
        foodType: this.userForm.value.foodType,
        medicalIssue: this.userForm.value.medicalIssue,
        foodAllergy: this.userForm.value.foodAllergy,
        payableTotal: this.onGetPayableTotal(),
        planPrice: this.selectedPricingPlan.planPrice,
        planName: this.selectedPricingPlan.planName,
        planDuration: this.userForm.value.planDuration + ' months',
      }

      // paymentStatus: 'Success',
      // payableTotal: 'req.body.payableTotal',
      // planPrice: 'req.body.planPrice',
      // planDetails: {
      //     planName: 'req.body.planName',
      //     planDuration: 'req.body.planDuration',
      this.userApiService.postPlaceOrder(formBody).subscribe((res: any) => {
        this.isLoading = false;
        this.toastMessageService.success(res['message']);
        // if (this.router.url.split('?')[0] === '/admin/employees') {
        //   this.router.navigate(['admin/employees/leaves/check']);
        // }
        // else {
        //   this.router.navigate(['admin/employees']);
        // }
      }, error => {
        this.isLoading = false;
        console.log("error", error);

        // if (Array.isArray(error.error)) {
        //   this.toastMessageService.info(error.error[0]);
        //   if (this.router.url.split('?')[0] === '/admin/employees') {
        //     this.router.navigate(['admin/employees/leaves/check']);
        //   }
        //   else {
        //     this.router.navigate(['admin/employees']);
        //   }
        // }
        // else {
        //   this.toastMessageService.info(error.error.message);
        //   if (this.router.url.split('?')[0] === '/admin/employees') {
        //     this.router.navigate(['admin/employees/leaves/check']);
        //   }
        //   else {
        //     this.router.navigate(['admin/employees']);
        //   }
        // }
      })
    }

  }

  onGetPayableTotal() {
    return +(this.selectedPricingPlan['planPrice']) * +(this.userForm.value.planDuration / 3)
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  isLoggedIn() {
    return this.userApiService.isLoggedIn();
  }

  showModel() {
    const backdrop = document.getElementById('custom-backdrop') as HTMLElement;
    backdrop.style.visibility = 'visible';
    backdrop.style.opacity = '1';
    const model = document.getElementById('custom-modal') as HTMLElement;
    model.style.transform = 'translateY(0)'
  }
  // closeModel() {
  //   const backdrop = document.getElementById('custom-backdrop') as HTMLElement;
  //   backdrop.style.visibility = 'hidden';
  //   backdrop.style.opacity = '0';
  //   const model = document.getElementById('custom-modal') as HTMLElement;
  //   model.style.transform = 'translateY(100vh)';
  //   console.log('clicked')
  // }

}
