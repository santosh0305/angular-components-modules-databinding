import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  welcome: string = "Welcome to angular"
  age: number =35

  imageSource: string = "https://picsum.photos/seed/picsum/200/300"
  imgHeight:number = 100
  imgWidth:number = 180

  placeholder:string = "Enter your age"

  SubmitForm(){
    console.log('I am clicked !!')
  }

  OnChange(evt: Event){
    console.log(evt.target)
    //console.log(data.target.value)
    //console.log('Text is changed')
  }
}
