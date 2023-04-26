import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formTitle!: string
  @Input() formusername: string =''
  @Input() formpassword: string =''

  name: string =''
  password: string =''

  @Output() onSubmit = new EventEmitter<User>()

  constructor(private router: Router){}

  ngOnInit(): void {
    this.name= this.formusername
    this.password=this.formpassword
  }

  onButtonClick(): void{
    this.onSubmit.emit({
      id: null!,
      name: this.name,
      password: this.password,
      pic:null!,
    });
  }
}
