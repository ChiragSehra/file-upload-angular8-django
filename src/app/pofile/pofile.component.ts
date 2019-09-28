import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-pofile',
  templateUrl: './pofile.component.html',
  styleUrls: ['./pofile.component.css']
})
export class PofileComponent implements OnInit {
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form: FormGroup;
  response: any;
  imageUrl: any;

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      pofile: new FormControl([''])
    });
  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('pofile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('pofile').value);

    this.uploadService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageUrl = `${this.DJANGO_SERVER}${res.file}`;
        console.log(res)
        console.log(this.imageUrl);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
