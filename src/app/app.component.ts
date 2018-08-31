import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Adia demo chat bot';
  chatmsg = '';
  chatboxtoggle: Boolean = false;
  chatmessages: any = [
    {
      id: 12345,
      who: 'adia',
      name: 'mohamed',
      message: 'Hi, How can i help you?'
    }
    // {
    //   id: 12345,
    //   who: 'recipient',
    //   name: 'mohamed',
    //   message: 'How many coutries you have operation?'
    // },
    // {
    //   id: 12345,
    //   who: 'adia',
    //   name: 'mohamed',
    //   message: 'As of now we have an operation in four countries.'
    // },
    // {
    //   id: 12345,
    //   who: 'recipient',
    //   name: 'mohamed',
    //   message: 'Which are the countries?'
    // },
    // {
    //   id: 12345,
    //   who: 'adia',
    //   name: 'mohamed',
    //   message: 'US, UK, CH, DE'
    // },
    // {
    //   id: 12345,
    //   who: 'recipient',
    //   name: 'mohamed',
    //   message: 'Thanks'
    // }
  ];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    console.log('oninit function is calling');
    const data = {
      name: 'mohamed',
      empid: 791646
    };
    this.http.post ('https://testadiachatbot.herokuapp.com/api/test', data).subscribe(
    result => {
      console.log(result);
    },
    error => {
      console.log(error);
    });
  }
  submit(val) {
    console.log(val);
    const msgobj = {
      id: 12345,
      who: 'recipient',
      name: 'mohamed',
      message: val
    };
    this.chatmessages.push(msgobj);
    console.log(this.chatmessages);
    this.chatmsg = '';
  }
  showchatbox() {
    this.chatboxtoggle = !this.chatboxtoggle;
  }
}
