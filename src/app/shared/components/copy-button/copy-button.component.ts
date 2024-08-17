import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-button',
  standalone: true,
  imports: [],
  templateUrl: './copy-button.component.html',
  styleUrl: './copy-button.component.scss',
})
export class CopyButtonComponent {
  @Input({ required: true }) contentToCopy!: string;

  copyButtonText: 'skopiuj' | 'skopiowano ✔' = 'skopiuj';

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.contentToCopy);

    this.copyButtonText = 'skopiowano ✔';
    setTimeout(() => {
      this.copyButtonText = 'skopiuj';
    }, 1000);
  }
}
