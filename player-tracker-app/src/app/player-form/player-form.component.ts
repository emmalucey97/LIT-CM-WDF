import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent  {

  private playerForm:FormGroup;

  ngOnInit(){}

  constructor( private formBuilder:FormBuilder) {
    this.playerForm = formBuilder.group({
      playerName: '',
      playerDOB: '',
      playerGuardian: '',
      playerContact: ''
    })
   }

  private onFormSubmit(formData:any) : void
  {
    this.playerForm.reset();
    console.log(formData);
    
  }
}
