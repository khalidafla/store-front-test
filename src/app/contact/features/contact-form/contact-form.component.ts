import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Message } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';

@Component({
    selector: "app-contact-form",
    templateUrl: "./contact-form.component.html",
    styleUrls: ["./contact-form.component.scss"],
    standalone: true,
    imports: [CommonModule, MessagesModule, ReactiveFormsModule, InputTextModule, InputTextareaModule, ButtonModule],
  })
  export class ContactFormComponent {

    messages: Message[] = []

    contactForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]], 
        message: ['', [Validators.required, Validators.minLength(300)]]
    });
    
    constructor(private fb: FormBuilder) { };

    sendForm() {
        this.messages = [
            { severity: 'info', summary: 'Demande de contact envoyée avec succès' },
        ];
    }
    
  }